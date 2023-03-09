import { Card } from "@mui/material";
import { Box } from "@mui/system";
import Conversation from "./Conversation";

const ListConversation = () => {
  // return [1, 2, 3, 4, 5].map((x) => (
  // <Conversation
  //   message={{
  //     content: "Chat ContentChat ContentChat ContentChat Content",
  //   }}
  // />
  // ));
  return (
    <Box>
      Due to local storage limit of 5MB, our application does not support
      multiple conversations on local storage. Please log in to use this
      feature. (This feature is coming soon!)
    </Box>
  );
};
export default ListConversation;
