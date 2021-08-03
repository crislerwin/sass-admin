import useSWR from "swr";
import axios from "axios";

const base = axios.create({
  baseURL: "https://api.github.com",
});
export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(
    url,
    async (url) => {
      const response = await base.get(url);

      return response.data;
    },
    {}
  );
  return { data, error };
}
