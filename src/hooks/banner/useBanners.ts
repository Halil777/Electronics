import useSWR from "swr";
import { BASE_URL } from "../../api/instance";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useBanners = () => {
  const { data, error, mutate } = useSWR(`${BASE_URL}banner`, fetcher);

  return {
    banners: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
