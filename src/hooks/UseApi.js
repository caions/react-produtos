import axios from "axios";
import { useEffect, useState } from "react";

const useApi = (url) => {
  const [response, setResponse] = useState({
    data: [],
    loading: true
  });

  useEffect(async () => {
    try {
      const { data } = await axios.get(url);
      setResponse({ data, loading: false });
    } catch (err) {
      console.log(err);
    }
  }, [url]);

  return response;
};

export default useApi;
