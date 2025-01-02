import useSWR from "swr";
import { BASE_URL } from "../../../../api/instance";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useCategories = () => {
  const { data, error, mutate } = useSWR(`${BASE_URL}category`, fetcher);

  return {
    categories: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
