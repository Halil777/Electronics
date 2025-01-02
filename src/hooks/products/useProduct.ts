import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useProduct = () => {
  const { data, error, mutate } = useSWR(
    "http://localhost:3000/products",
    fetcher
  );

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
