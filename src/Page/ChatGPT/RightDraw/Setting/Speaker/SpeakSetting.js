import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { Button, IconButton, TextField } from "@mui/material";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { speakAction } from "../../../../../Redux/SpeakSlice";
import useSpeak from "./useSpeak";
import VoiceRate from "./VoiceRate";
import VoiceSelectBox from "./VoiceSelectBox";
const SpeakSetting = () => {
  const isSpeak = useSelector((redux) => redux.speak.isSpeak);
  const dispatch = useDispatch();
  const speaker = useSpeak();
  const [testContent, setTestContent] = useState(
    "I am ThangChiba and I created this application.You can copy and paste this sentence into your text-to-speech application to hear how it sounds with different voices and rates."
  );
  return (
    <Fragment>
      <IconButton
        color="warning"
        onClick={(e) => dispatch(speakAction.config({ isSpeak: !isSpeak }))}
      >
        {isSpeak && <VolumeUpIcon />}
        {!isSpeak && <VolumeOffIcon />}
      </IconButton>
      {isSpeak && (
        <>
          <VoiceSelectBox voices={speaker.voices} />
          <VoiceRate />
          <TextField
            label="Test Content"
            value={testContent}
            onChange={(e) => setTestContent(e.target.value)}
            color="warning"
            InputProps={{ style: { color: "white" } }}
            focused
          ></TextField>
          <Button
            variant="outlined"
            onClick={() => speaker.speak(testContent)}
            color="warning"
          >
            Test Speak
          </Button>
        </>
      )}
    </Fragment>
  );
};

export default SpeakSetting;
