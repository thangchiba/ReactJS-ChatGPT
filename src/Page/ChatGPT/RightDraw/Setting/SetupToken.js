import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { gptAction } from "../../../../Redux/GPTSlice";
const SetupToken = (props) => {
  const dispatch = useDispatch();
  const token = useSelector((redux) => redux.gpt.accessToken);

  function updateToken(event) {
    const newToken = event.target.value;
    dispatch(gptAction.setAuth({ accessToken: newToken }));
  }
  return (
    <TextField
      label="Access Token"
      variant="outlined"
      fullWidth
      value={token}
      onChange={updateToken}
      color="warning"
      InputProps={{ style: { color: "white" } }}
      focused
      placeholder="Enter Token In Here Before Start"
    />
  );
};
export default SetupToken;
