import useSWR, { mutate } from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useSubcategories = () => {
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/subcategories",
    fetcher
  );

  return {
    subcategories: data,
    isLoading,
    isError: !!error,
    mutate,
  };
};
