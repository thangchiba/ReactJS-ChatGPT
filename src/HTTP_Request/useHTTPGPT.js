import { useState } from "react";
import { useSelector } from "react-redux";
import APIEndpoint from "./APIEndpoint";
import useHTTP from "./useHTTP";
import { toast } from "react-toastify";

const useHTTPGPT = () => {
  const endpoint = APIEndpoint.GPTTurbo;
  const accessToken = useSelector((redux) => redux.gpt.accessToken);
  const freeToken = process.env.REACT_APP_GPT_TOKENS.split(",");
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

  const [chunkMessage, setChunkMessage] = useState(null);

  const sendRequest = async (messages = null) => {
    const body = {
      model: "gpt-3.5-turbo",
      messages,
      stream: true,
    };
    const response = await post(endpoint, body);
    if (!response.ok && response.status === 401)
      toast("Access Token is not valid!");
    const stream = response.body.getReader();
    const responseMessage = await readStreamPromise(stream, setChunkMessage);
    return responseMessage;
  };

  function readStreamPromise(reader, setChunkMessage) {
    let chunksReceived = [];
    let responseMessage = null;
    const decoder = new TextDecoder("utf-8");
    return new Promise((resolve, reject) => {
      function readStream() {
        reader
          .read()
          .then(({ done, value }) => {
            if (done) {
              setChunkMessage(null);
              resolve(responseMessage);
              return;
            }
            const chunk = decoder.decode(value);
            const chunks = chunk.split("data: ");
            let listChunk = chunks.slice(1).map((x) => {
              try {
                return JSON.parse(x);
              } catch {
                return null;
              }
            });
            chunksReceived = chunksReceived.concat(listChunk);
            const message = chunksReceived
              .map((chunk) =>
                chunk ? chunk.choices[0].delta.content || "" : ""
              )
              .join("");
            responseMessage = {
              id: chunksReceived[0].id,
              role: chunksReceived[0].choices[0].delta.role,
              content: message,
            };
            setChunkMessage(responseMessage);
            readStream();
          })
          .catch((error) => {
            reject(error); // handle any errors that occur during reading
          });
      }
      readStream();
    });
  }
  return {
    post: (body) => sendRequest(body),
    chunkMessage,
    loading,
    error,
  };
};

export default useHTTPGPT;
