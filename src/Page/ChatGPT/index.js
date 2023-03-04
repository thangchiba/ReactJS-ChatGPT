import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import useHTTPGPT from "../../HTTP_Request/useHTTPGPT";
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
  const [messages, setMessages] = useState([]);
  const gptAPI = useHTTPGPT();
  const gptSetting = useSelector((redux) => redux.gpt);

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

      if (gptSetting.isSpeak) {
        handleSpeak(responseMessage.content);
      }
    } catch {
      alert("Error when send message");
    }
  }

  const handleSpeak = (content) => {
    try {
      if (gptSetting.voice && window.speechSynthesis) {
        window.speechSynthesis.cancel();
        // Create a new SpeechSynthesisUtterance object
        const utterance = new SpeechSynthesisUtterance(content);

        // Set the selected voice and rate on the utterance
        utterance.voice = gptSetting.voice;
        utterance.rate = gptSetting.rate;

        // Speak the utterance
        window.speechSynthesis.speak(utterance);
      }
    } catch {
      console.log("Error when speak");
    }
  };
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
