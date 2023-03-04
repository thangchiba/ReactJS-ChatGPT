import React, { useState } from "react";
import { Grid, Button, TextField } from "@mui/material";

const ChatForm = ({ onSubmit }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(message);
    setMessage("");
  };

  return (
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
  );
};

export default ChatForm;
