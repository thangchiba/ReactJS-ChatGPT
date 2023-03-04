import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useHTTP = (endpoint) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const accessToken = useSelector((redux) => redux.auth.idToken);

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };

  const sendRequest = async (method, url, body = null) => {
    try {
      setLoading(true);
      let request = {
        method: method,
        headers: headers,
      };
      if (body !== null && body) request.body = JSON.stringify(body);
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}${endpoint}${url ? url : ""}`,
        request
      );
      setLoading(false);
      return await res.json();
    } catch (err) {
      setError(err);
      setLoading(false);
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
