import axios from "axios";
import { useEffect, useState } from "react";

const useApi = (url) => {
  const [response, setResponse] = useState({
    data: [],
    loading: true,
  });

  const fetchApi = async () => {
    try {
      const { data } = await axios.get(url);
      setResponse({ data, loading: false });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchApi(url);
  }, [url]);

  return { response, fetchApi };
};

export default useApi;
