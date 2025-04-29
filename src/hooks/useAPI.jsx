import axios from "axios";
import { useState } from "react";

const useAPI = (url, config) => {
  const [data, setData] = useState([]);
  const [item, setItem] = useState(null);

  const get = async (getConfig) => {
    try {
      const response = await axios.get(url, { ...config, ...getConfig });
      setData(response?.data?.data || response?.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getSingle = async (id, getConfig) => {
    try {
      const response = await axios.get(`${url}/${id}`, {
        ...config,
        ...getConfig,
      });
      setItem(response?.data?.data || response?.data);
    } catch (error) {
      console.error(error);
    }
  };

  const post = async (body) => {
    try {
      const response = await axios.post(url, body, config);
      setData((prevState) => [...prevState, response.data.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const put = async (body) => {
    try {
      const response = await axios.put(url, body, config);
      setData((prevState) =>
        prevState.map((item) =>
          item.id === response.data.data.id ? response.data.data : item
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  const remove = async (id) => {
    try {
      await axios.delete(`${url}/${id}`, config);
      setData((prevState) => prevState.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return { data, item, get, getSingle, post, put, remove };
};
export default useAPI;
