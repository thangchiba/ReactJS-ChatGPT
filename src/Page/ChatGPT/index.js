import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import useHTTPGPT from "../../HTTP_Request/useHTTPGPT";
import ChatBoard from "./ChatBoard";
import ChatForm from "./ChatForm";
import LeftDrawer from "./LeftDrawer";
import NewUpdate from "./NewUpdate";
import RightDrawer from "./RightDraw";
import useSpeak from "./RightDraw/Setting/Speaker/useSpeak";
import ScrollDownButton from "./ScrollDownButton";

const StyledCover = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    paddingBlock: 0,
    backgroundColor: "#242526",
    height: "100vh",
  },
  color: "white",
  height: "calc(100vh - 70px)",
  minWidth: "100vw",
  maxWidth: "100vw",
  margin: 0,
  paddingInline: 0,
  paddingBlock: 20,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
}));

const StyledChatBox = styled(Box)(({ theme }) => ({
  height: "calc(87vh - 70px)",
  width: "90vw",
  maxWidth: "90vw",
  color: "white",
  margin: 0,
  borderRadius: "15px",
  paddingBlock: "35px",
  paddingInline: "20px",
  backgroundColor: "#242526",
  [theme.breakpoints.down("sm")]: {
    minWidth: "100vw",
    maxWidth: "100vw",
    height: "83vh",
    paddingBlock: "0px",
    paddingInline: "0px",
  },
  position: "relative",
}));

const ChatGPT = (props) => {
  const speaker = useSpeak();
  const speak = useSelector((redux) => redux.speak);
  const teach = useSelector((redux) => redux.teach);
  const gptAPI = useHTTPGPT();
  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("messages")) || []
  );

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

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
        teach
          .map((t) => ({ role: "system", content: t.content }))
          .concat(
            newMessages.slice(-8).map((message) => {
              return {
                role: message.role,
                content: message.content,
              };
            })
          )
      );
      newMessages = [...messages, message, response];
      console.log(response);
      setMessages(newMessages);
      if (speak.isSpeak) {
        speaker.speak(response.content);
      }
    } catch {}
  }
  return (
    <StyledCover id="cover">
      <NewUpdate />
      <Grid container sx={{ height: "100%" }} id="container">
        <Grid
          item
          sx={{ display: { xs: "none", md: "block" } }}
          md={0.5}
        ></Grid>
        <Grid item md={11} display="flex" flexDirection="row">
          <StyledChatBox id="chatbox" sx={{ backgroundColor: "inherit" }}>
            <LeftDrawer />
            <RightDrawer />
            <ChatBoard
              messages={messages}
              loading={gptAPI.loading}
              chunkMessage={gptAPI.chunkMessage}
            />
            <ChatForm onSubmit={submitChat} />
            <ScrollDownButton />
          </StyledChatBox>
        </Grid>
        <Grid
          item
          sx={{ display: { xs: "none", md: "block" } }}
          md={0.5}
        ></Grid>
      </Grid>
    </StyledCover>
  );
};

export default ChatGPT;
