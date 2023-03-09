import { Box, Switch, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gptAction } from "../../../../Redux/GPTSlice";

function ShowAvatar() {
  const dispatch = useDispatch();
  const showAvatar = useSelector((redux) => redux.gpt.showAvatar);

  const toggle = () => {
    dispatch(gptAction.toggleShowAvatar());
  };

  return (
    <Box display="flex" alignItems="center">
      <Switch
        checked={showAvatar}
        onChange={toggle}
        name="showAvatar"
        color="primary"
      />
      <Typography textAlign="center">Show Avatar</Typography>
    </Box>
  );
}

export default ShowAvatar;
