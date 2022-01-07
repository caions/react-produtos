import axios from "axios";
import { useEffect, useState } from "react";

const useApi = (url) => {
  const [response, setResponse] = useState({
    data: [],
    loading: true,
  });

  const fetchApi = async (fetchUrl, method, body) => {
    try {
      const { data } = await axios({
        method,
        url: fetchUrl || url,
        data: body,
      });

      setResponse({ data, loading: false });
    } catch (err) {
      //  console.log(err);
    }
  };

  useEffect((method, body) => {
    fetchApi(method, body);
  }, []);

  return { response, fetchApi };
};

export default useApi;
