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
    });
    response
      .then((i) => {
        setFetchData(i.data || []);

        // for when every 10s reFetch don't loader show in UI just for first time.
        if (isFirst) {
          setIsLoading(false);
        }
        setIsFirst(false);
      })
      .catch(() => {
        if (isFirst) {
          setIsLoading(false);
        }
      });
  };

  useEffect(() => {
    handleFetch();
    const reFetch = setInterval(() => {
      handleFetch();
    }, 10000);
    return () => clearInterval(reFetch);
  }, [dependency]);

  return [isLoading, setIsLoading, fetchData];
};

export default useFetchData;
