import Prompt from "./Prompt";

const ListPrompt = () => {
  return [1, 2, 3, 4, 5].map((x) => (
    <Prompt
      prompt={{
        content: "",
      }}
    />
  ));
};
export default ListPrompt;
