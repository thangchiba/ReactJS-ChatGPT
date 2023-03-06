import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const useConversation = () => {
  const [conversations, setConversations] = useState([]);

  function newConversation(name = "") {
    setConversations(...conversations, {
      id: uuidv4(),
      name: name,
      messages: [],
    });
  }
  return <></>;
};

export default useConversation;
