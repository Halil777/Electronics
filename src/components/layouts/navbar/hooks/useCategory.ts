import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useCategories = () => {
  const { data, error, mutate } = useSWR(
    "http://localhost:3000/category",
    fetcher
  );

  return {
    categories: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
