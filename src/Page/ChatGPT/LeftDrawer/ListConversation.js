import Conversation from "./Conversation";

const ListConversation = () => {
  return [1, 2, 3, 4, 5].map((x) => (
    <Conversation
      message={{
        content: "Chat ContentChat ContentChat ContentChat Content",
      }}
    />
  ));
};
export default ListConversation;
