import styled from "@emotion/styled";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  dracula,
  gruvboxDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import cumeoLogo from "../../Static/Images/Logo/cumeo128.png";
import twistedLogo from "../../Static/Images/Logo/twistedLogo.jpg";
const StyledChatItem = styled(ListItem)({
  backgroundColor: "#444654",
  marginBlock: "10px",
  borderRadius: "5px",
});

const ChatItem = (props) => {
  const showAvatar = useSelector((redux) => redux.gpt.showAvatar);
  const { message } = props;
  const codeBlockRegex = /```([\s\S]*?)```/;
  const strings = message.content.split(codeBlockRegex);
  return (
    <StyledChatItem>
      {showAvatar && (
        <ListItemAvatar sx={{ maxWidth: 50 }}>
          <Avatar
            src={message.role === "user" ? cumeoLogo : twistedLogo}
            alt="Avatar"
          />
        </ListItemAvatar>
      )}
      <Box>
        {strings.map((str, index) => {
          if (index % 2 === 0) {
            return str
              .split(`\n`)
              .map((text) => <ListItemText primary={text} />);
          } else {
            const code = str.replace(/```/g, "");
            const codeLanguage = code.split("\n")[0] || "javascript";
            return (
              <Box>
                <SyntaxHighlighter
                  language={codeLanguage}
                  style={dracula}
                  showLineNumbers={true}
                  // wrapLongLines={true}
                  customStyle={{
                    overflow: "scroll",
                    // maxWidth: "100%",
                    // fontSize: 12,
                  }}
                >
                  {code}
                </SyntaxHighlighter>
              </Box>
            );
          }
        })}
      </Box>
    </StyledChatItem>
  );
};
export default ChatItem;
