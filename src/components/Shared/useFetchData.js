import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (url, params = {}, dependency = null) => {
  const [fetchData, setFetchData] = useState([]);
  const [isFirst, setIsFirst] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetch = () => {
    if (isFirst) {
      setIsLoading(false);
    }
    const response = axios.get(url, {
      params: params,
      headers: {
        "Content-Type": "application/json",
      },
    });
    response
      .then((i) => {
        console.log(i.data);
        setFetchData(i.data || []);
        if (isFirst) {
          setIsLoading(false);
        }
        setIsFirst(false);
      })
      .catch((i) => {
        if (isFirst) {
          setIsLoading(false);
        }
      });
  };

  useEffect(() => {
    handleFetch();
    const reFetch = setInterval(() => {
      handleFetch();
      console.log("timeout");
    }, 100000);
    return () => clearInterval(reFetch);
  }, [dependency]);

  return [isLoading, setIsLoading, fetchData];
};

export default useFetchData;
