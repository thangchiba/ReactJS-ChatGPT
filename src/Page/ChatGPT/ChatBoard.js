import styled from "@emotion/styled";
import { Box, LinearProgress, List, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { gptAction } from "../../Redux/GPTSlice";
import ChatItem from "./ChatItem";

const StyledChatBoard = styled(Box)({
  width: "100%",
  height: "90%",
  backgroundColor: "#242526",
  marginBottom: "20px",
  overflowY: "scroll",
  display: "flex",
  flexDirection: "column-reverse",
  justifyContent: "space-between",
  position: "relative",
});

const ChatBoard = (props) => {
  const { chunkMessage, messages, loading } = props;
  const dispatch = useDispatch();
  const token = useSelector((redux) => redux.gpt.accessToken);

  function updateToken(event) {
    const newToken = event.target.value;
    dispatch(gptAction.setAuth({ accessToken: newToken }));
  }

  return (
    <StyledChatBoard id="chatboard">
      <List>
        {/* <TextField
          label="Access Token"
          variant="outlined"
          fullWidth
          value={token}
          onChange={updateToken}
          color="success"
          InputProps={{ style: { color: "white" } }}
          focused
          placeholder="Enter Token In Here Before Start"
        /> */}
        {messages.map((message) => (
          <ChatItem key={message.id} message={message} id={message.id} />
        ))}
        {chunkMessage && (
          <ChatItem
            key={"chunk" + chunkMessage.id}
            message={chunkMessage}
            id={"chunk" + chunkMessage.id}
          />
        )}
        {loading && (
          <LinearProgress
            color="secondary"
            hidden={loading}
            sx={{ height: "15px", borderRadius: "5px" }}
          />
        )}
      </List>
    </StyledChatBoard>
  );
};
export default ChatBoard;
