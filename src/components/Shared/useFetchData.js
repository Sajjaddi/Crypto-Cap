import axios from "axios";
import { useContext, useEffect, useState } from "react";

import { SiteContext } from "../../store";

const useFetchData = (url, params = {}, dependency = null) => {
  const [fetchData, setFetchData] = useState([]);
  const [isFirst, setIsFirst] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const { setFirstErrorFetch } = useContext(SiteContext);

  const handleFetch = () => {
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
        setFirstErrorFetch(false)
      })
      .catch(() => {
        if (isFirst) {
          setFirstErrorFetch(true)
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
