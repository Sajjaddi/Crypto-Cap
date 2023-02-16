import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (url, params = {}, dependency = null) => {
  const [fetchData, setFetchData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const pause = (duration) => {
    return new Promise((resolve) => {
      setTimeout(resolve, duration);
    });
  };
  const handleFetch = async () => {
    setIsLoading(true);
    await pause(2000)
    const response = await axios.get(url, {
      params: params,
    });
    const data = await response.data;
    setFetchData(data);
  };

  useEffect(() => {
    handleFetch().then(() => {
      setIsLoading(false);
    });
  }, [dependency]);

  return [isLoading, fetchData];
};

export default useFetchData;
