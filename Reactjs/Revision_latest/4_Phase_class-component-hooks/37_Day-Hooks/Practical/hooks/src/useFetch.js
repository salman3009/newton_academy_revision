import { useState, useEffect } from "react";
import axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(url)
      .then((result) => setData(result.data));
  }, [url]);

  return [data];
};

export default useFetch;