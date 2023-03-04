import { useSelector } from "react-redux";
import APIEndpoint from "./APIEndpoint";
import useHTTP from "./useHTTP";

const useHTTPGPT = () => {
  const endpoint = APIEndpoint.GPTTurbo;
  const accessToken = useSelector((redux) => redux.gpt.accessToken);
  const freeToken = ["token", "token", "token"];
  function getRandomToken(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
  }

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${
      accessToken !== "thangchiba" ? accessToken : getRandomToken(freeToken)
    }`,
  };

  const { post, loading, error } = useHTTP({ headers });

  const sendRequest = async (messages = null) => {
    const body = {
      model: "gpt-3.5-turbo",
      messages,
    };
    return post(endpoint, body);
  };

  return {
    post: (body) => sendRequest(body),
    loading,
    error,
  };
};

export default useHTTPGPT;
