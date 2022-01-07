import axios from "axios";
import { useEffect, useState } from "react";

const useApi = (url) => {
  const [response, setResponse] = useState({
    data: [],
    loading: true,
  });

  const fetchApi = async (method, body) => {
    try {
      const { data } = await axios({
        method,
        url,
        data: body,
      });
      if (method === "POST") {
        response.data.push(data);
        setResponse({ data: response.data, loading: false });
      } else {
        setResponse({ data, loading: false });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(
    (method, body) => {
      fetchApi(method, body);
    },
    [url]
  );

  return { response, fetchApi };
};

export default useApi;
