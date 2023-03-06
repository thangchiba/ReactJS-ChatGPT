import styled from "@emotion/styled";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import cumeoLogo from "../../Static/Images/Logo/cumeo128.png";
import twistedLogo from "../../Static/Images/Logo/twistedLogo.jpg";
const StyledChatItem = styled(ListItem)({
  backgroundColor: "#444654",
  marginBlock: "10px",
  borderRadius: "5px",
});

const ChatItem = (props) => {
  const { message } = props;
  const codeBlockRegex = /```([\s\S]*?)```/;
  const strings = message.content.split(codeBlockRegex);
  return (
    <StyledChatItem>
      <ListItemAvatar>
        <Avatar
          src={message.role === "user" ? cumeoLogo : twistedLogo}
          alt="Avatar"
        />
      </ListItemAvatar>
      <Box>
        {strings.map((str, index) => {
          if (index % 2 === 0) {
            return str
              .split(`\n`)
              .map((text) => <ListItemText primary={text} />);
          } else {
            console.log(str);
            const code = str.replace(/```/g, "");
            return (
              <SyntaxHighlighter
                language="javascript"
                style={dracula}
                showLineNumbers={true}
              >
                {code}
              </SyntaxHighlighter>
            );
          }
        })}
      </Box>
    </StyledChatItem>
  );
};
export default ChatItem;
