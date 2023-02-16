import axios from "axios";
import { useEffect, useState } from "react";

const useFetchData = (url, params = {}, dependency = null) => {
  const [fetchData, setFetchData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetch = async () => {
    const response = await axios.get(url, {
      params: params,
    });
    const data = await response.data;
    setFetchData(data);
  };

  useEffect(() => {
    setIsLoading(true);
    handleFetch().then(() => {
      setIsLoading(false);
    });
  }, [dependency]);

  return [isLoading, fetchData];
};

export default useFetchData;
