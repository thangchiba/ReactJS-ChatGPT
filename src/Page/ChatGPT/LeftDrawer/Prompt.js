import BackspaceIcon from "@mui/icons-material/Backspace";
import { Box, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";

const Prompt = ({ prompt, onDelete }) => {
  const [value, setValue] = useState(prompt.content);
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
          label="Prompt"
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
        <IconButton onClick={() => onDelete(prompt)} mx={0}>
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

export default Prompt;
