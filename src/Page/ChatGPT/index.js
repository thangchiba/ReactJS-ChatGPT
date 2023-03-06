import styled from "@emotion/styled";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Fab, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import useSpeak from "../../Component/Navbar/Setting/Speaker/useSpeak";
import useHTTPGPT from "../../HTTP_Request/useHTTPGPT";
import { gptAction } from "../../Redux/GPTSlice";
import ChatBoard from "./ChatBoard";
import ChatForm from "./ChatForm";
const StyledCover = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    paddingBlock: 0,
    backgroundColor: "#242526",
  },
  color: "white",
  height: "calc(100vh - 70px)",
  minWidth: "100vw",
  width: "100vw",
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
  color: "white",
  margin: 0,
  borderRadius: "15px",
  paddingBlock: "35px",
  paddingInline: "20px",
  backgroundColor: "#242526",
  [theme.breakpoints.down("sm")]: {
    width: "100vw",
    height: "calc(85vh - 70px)",
    paddingBlock: "0px",
    paddingInline: "0px",
  },
  position: "relative",
}));

const ChatGPT = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const token = params.get("token");

  const speaker = useSpeak();
  const speak = useSelector((redux) => redux.speak);
  const gptAPI = useHTTPGPT();
  const [messages, setMessages] = useState(
    JSON.parse(localStorage.getItem("messages")) || []
  );

  useEffect(() => {
    console.log(speak.isSpeaking);
  }, [speak.isSpeaking]);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    dispatch(gptAction.setAuth({ accessToken: token || "" }));
  }, []);

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
      <Grid container sx={{ height: "100%" }} id="container">
        <Grid
          item
          sx={{ display: { xs: "none", md: "block" } }}
          md={0.5}
        ></Grid>
        <Grid item md={11}>
          <StyledChatBox id="chatbox" sx={{ backgroundColor: "inherit" }}>
            <ChatBoard
              messages={messages}
              loading={gptAPI.loading}
              chunkMessage={gptAPI.chunkMessage}
            />
            <ChatForm onSubmit={submitChat} />
            <Fab
              id="scroll-up"
              sx={{
                position: "absolute",
                right: 10,
                bottom: { xs: 70, md: 120 },
              }}
              onClick={() => {
                document
                  .getElementById("chatboard")
                  .scrollTo({ top: 0, behavior: "smooth" });
              }}
              color="inherit"
              size="small"
            >
              <KeyboardDoubleArrowDownIcon color="primary" />
            </Fab>
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
