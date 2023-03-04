import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

const ChatForm = ({ onSubmit }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(message);
    setMessage("");
  };

  return (
    <Box
      sx={{
        padding: 0,
        margin: 0,
        backgroundColor: "#242526",
        height: "10%",
        maxHeight: "10%",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <TextField
              label="Message Box"
              variant="outlined"
              fullWidth
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              color="success"
              InputProps={{ style: { color: "white" } }}
              focused
              placeholder="Enter Chat Content Here..."
            />
          </Grid>
          <Grid item>
            <Button
              type="submit"
              variant="contained"
              color="warning"
              size="large"
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ChatForm;
