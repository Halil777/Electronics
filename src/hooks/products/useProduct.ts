import useSWR from "swr";
import { BASE_URL } from "../../api/instance";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useProduct = (limit: number = 1300) => {
  const { data, error, mutate } = useSWR(
    `${BASE_URL}products?limit=${limit}`,
    fetcher
  );

  const getLastAddedDiscountedProducts = (
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

    const discountedProducts = sortedProducts.filter(
      (product: any) => product.discount_percentage > 0
    );

    // Return the first 'limit' number of products
    return discountedProducts.slice(0, limit);
  };

  return {
    products: data?.data,
    totalProducts: data?.total, // Assuming the backend includes a total count
    lastAddedDiscountedProducts: data?.data
      ? getLastAddedDiscountedProducts(data.data, 4)
      : [],
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
