import axios from "axios";
import { useQuery } from "react-query";

export const useClienHook = (prop) => {
  const { onSuccess, onError, url, queryIdentifier } = prop;
  const fetchData = () => axios.get(url).then((res) => res.data);
  return useQuery(queryIdentifier, fetchData, { onSuccess, onError });
};
