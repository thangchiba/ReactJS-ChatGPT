import styled from "@emotion/styled";
import { Box, LinearProgress, List } from "@mui/material";
import { useDispatch } from "react-redux";
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

  return (
    <StyledChatBoard id="chatboard">
      <List>
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
