import useSWR, { mutate } from "swr";
import { BASE_URL } from "../../api/instance";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }
  return response.json();
};

export const usePartner = () => {
  const { data, error } = useSWR(`${BASE_URL}partners`, fetcher); // Changed URL to 'partners'

  return {
    partners: data, // Changed key to 'partners'
    isLoading: !error && !data,
    isError: !!error,
    mutate,
  };
};
