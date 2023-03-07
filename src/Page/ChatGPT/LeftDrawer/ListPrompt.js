import Prompt from "./Prompt";

const ListPrompt = () => {
  return [1, 2, 3, 4, 5].map((x) => (
    <Prompt
      prompt={{
        content: "Chat ContentChat ContentChat ContentChat Content",
      }}
    />
  ));
};
export default ListPrompt;
