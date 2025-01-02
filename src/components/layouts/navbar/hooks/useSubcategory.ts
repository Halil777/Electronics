import useSWR, { mutate } from "swr";
import { BASE_URL } from "../../../../api/instance";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useSubcategories = () => {
  const { data, error, isLoading } = useSWR(
    `${BASE_URL}subcategories`,
    fetcher
  );

  return {
    subcategories: data,
    isLoading,
    isError: !!error,
    mutate,
  };
};
