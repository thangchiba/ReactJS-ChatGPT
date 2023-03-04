import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import useHTTPGPT from "../../HTTP_Request/useHTTPGPT";
import { speakAction } from "../../Redux/SpeakSlice";
import ChatBoard from "./ChatBoard";
import ChatForm from "./ChatForm";

const StyledCover = styled(Box)(({ theme }) => ({
  minWidth: "100vw",
  minHeight: "calc(100vh - 64px)",
  backgroundImage: "../../static/Images/blacksakura.jpg",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    minHeight: "80vh",
  },
}));

const StyledChatBox = styled(Box)(({ theme }) => ({
  width: "90vw",
  height: "80vh",
  backgroundColor: "#242526",
  color: "white",
  borderRadius: "15px",
  paddingBlock: "35px",
  paddingInline: "20px",
  [theme.breakpoints.down("sm")]: {
    width: "87vw",
    height: "70vh",
  },
}));

const ChatGPT = (props) => {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);
  const gptAPI = useHTTPGPT();
  const speak = useSelector((redux) => redux.speak);

  useEffect(() => {
    console.log(speak.isSpeaking);
  }, [speak.isSpeaking]);

  async function submitChat(content) {
    try {
      const message = {
        id: uuidv4(),
        role: "user",
        content: content,
      };
      let newMessages = [...messages, message];
      setMessages(newMessages);
      const response = await gptAPI.post(
        newMessages.slice(-8).map((message) => {
          return {
            role: message.role,
            content: message.content,
          };
        })
      );
      const responseMessage = { ...response.choices[0].message, id: uuidv4() };
      newMessages = [...messages, message, responseMessage];
      console.log(newMessages);
      setMessages(newMessages);

      if (speak.isSpeak) {
        dispatch(speakAction.speak(responseMessage.content));
      }
    } catch {
      alert("Error when send message");
    }
  }

  return (
    <StyledCover>
      <StyledChatBox>
        <ChatBoard messages={messages} loading={gptAPI.loading} />
        <ChatForm onSubmit={submitChat} />
      </StyledChatBox>
    </StyledCover>
  );
};

export default ChatGPT;
