import useSWR, { mutate } from "swr";
import { BASE_URL } from "../../../../api/instance";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useSegment = () => {
  const { data, error, isLoading } = useSWR(`${BASE_URL}segment`, fetcher);

  return {
    segment: data,
    isLoading,
    isError: !!error,
    mutate,
  };
};
