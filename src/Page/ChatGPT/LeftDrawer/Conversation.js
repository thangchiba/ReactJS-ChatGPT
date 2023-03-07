import BackspaceIcon from "@mui/icons-material/Backspace";
import { Box, IconButton, TextField } from "@mui/material";
import React from "react";

const Conversation = ({ message, onDelete }) => {
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
          value={message.content}
          InputProps={{ style: { color: "white" } }}
          placeholder="Enter Conversation Name"
        ></TextField>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <IconButton onClick={() => onDelete(message)} mx={0}>
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

export default Conversation;
