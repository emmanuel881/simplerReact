import axios from "axios";
import { useQuery } from "react-query";

const fetctData = () =>
  axios.get("http://localhost:4000/Dreamcar").then((res) => res.data);

export const useClienHook = (onSuccess, onError) => {
  return useQuery("RQClientQuery", fetctData, { onSuccess, onError });
};
