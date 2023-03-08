import StopCircleOutlinedIcon from "@mui/icons-material/StopCircleOutlined";
import { Box, Button, Grid, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import useSpeak from "./RightDraw/Setting/Speaker/useSpeak";

const ChatForm = ({ onSubmit }) => {
  const [message, setMessage] = useState("");
  const speakState = useSelector((redux) => redux.speak);
  const speaker = useSpeak();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(message);
    setMessage("");
  };
  const stopSpeak = () => {
    speaker.stopSpeak();
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
          {speakState.isSpeaking && (
            <Grid item>
              <IconButton onClick={stopSpeak} color="error" size="large">
                <StopCircleOutlinedIcon sx={{ fontSize: "40px" }} />
              </IconButton>
            </Grid>
          )}
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
