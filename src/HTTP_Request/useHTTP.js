import { useState } from "react";

const useHTTP = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const headers = {
    ...props.headers,
  };

  const sendRequest = async (method, url, body = null) => {
    try {
      setLoading(true);
      let request = {
        method: method,
        headers: headers,
      };
      if (body !== null && body) request.body = JSON.stringify(body);
      const res = await fetch(url, request);
      setLoading(false);
      return await res;
    } catch (err) {
      setError(err);
      setLoading(false);
      console.log(err);
    }
  };

  return {
    get: (url = "") => sendRequest("GET", url),
    post: (url = "", body) => sendRequest("POST", url, body),
    put: (url = "", body) => sendRequest("PUT", url, body),
    delete: (url = "", body) => sendRequest("DELETE", url, body),
    loading,
    error,
  };
};

export default useHTTP;
