import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gptAction } from "../../../../Redux/GPTSlice";
const SetupToken = () => {
  const dispatch = useDispatch();
  const token = useSelector((redux) => redux.gpt.accessToken);
  const [inputValue, setInputValue] = useState(token);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(gptAction.setAuth({ accessToken: inputValue }));
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <TextField
      label="Access Token"
      variant="outlined"
      fullWidth
      value={inputValue}
      onChange={handleInputChange}
      color="warning"
      InputProps={{ style: { color: "white" } }}
      focused
      placeholder="Enter Token In Here Before Start"
    />
  );
};
export default SetupToken;
