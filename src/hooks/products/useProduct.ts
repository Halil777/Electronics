import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useProduct = () => {
  // Get the base URL from Vite environment variables
  const BASE_URL = import.meta.env.BASE_URL;

  // Use the base URL to construct the API endpoint
  const { data, error, mutate } = useSWR(`${BASE_URL}products`, fetcher);

  const getLastAddedProducts = (
    products: any[] | undefined,
    limit: number
  ): any[] => {
    if (!products || products.length === 0) {
      return [];
    }

    // Sort the products by created_at in descending order (newest first)
    const sortedProducts = [...products].sort((a, b) => {
      return (
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    });

    // Return the first 'limit' number of products
    return sortedProducts.slice(0, limit);
  };

  return {
    products: data?.data,
    lastAddedProducts: data?.data ? getLastAddedProducts(data.data, 6) : [],
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
