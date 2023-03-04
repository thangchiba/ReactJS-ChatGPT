import { useState } from "react";
import { useSelector } from "react-redux";

const useHTTPGPT = (endpoint) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const accessToken = useSelector((redux) => redux.gpt.accessToken);
  const freeToken = [
    "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",
    "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",
    "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",
  ];

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${
      accessToken !== "thangchiba" ? accessToken : getRandomToken(freeToken)
    }`,
  };

  function getRandomToken(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
  }

  const sendRequest = async (method, url, body = null) => {
    try {
      setLoading(true);
      let request = {
        method: method,
        headers: headers,
      };
      if (body !== null && body) request.body = JSON.stringify(body);
      const res = await fetch(`${endpoint}${url ? url : ""}`, request);
      setLoading(false);
      return await res.json();
    } catch (err) {
      setError(err);
      setLoading(false);
      alert("Failed to send request...");
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

export default useHTTPGPT;
