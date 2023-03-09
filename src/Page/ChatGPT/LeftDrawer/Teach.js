import BackspaceIcon from "@mui/icons-material/Backspace";
import { Box, IconButton, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { teachAction } from "../../../Redux/TeachSlice";

const Teach = ({ teach }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(teach.content);

  function handleRemove() {
    dispatch(teachAction.removeTeach(teach.id));
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(teachAction.updateTeach({ id: teach.id, content: value }));
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [value]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        maxWidth: "100%",
        backgroundColor: "inherit",
        color: "white",
      }}
    >
      <Box
        sx={{
          width: "100%",
        }}
      >
        <TextField
          style={{ width: 220 }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label="Teach"
          placeholder="Enter content to teach AI"
          InputLabelProps={{ style: { color: "white" }, shrink: true }}
          InputProps={{ style: { color: "white" } }}
        ></TextField>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <IconButton mx={0} onClick={handleRemove}>
          <BackspaceIcon
            sx={{
              color: "white",
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Teach;
