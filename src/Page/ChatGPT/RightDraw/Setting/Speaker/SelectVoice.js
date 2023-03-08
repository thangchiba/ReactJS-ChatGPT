import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useSpeak from "./useSpeak";
import VoiceRate from "./VoiceRate";
import VoiceSelectBox from "./VoiceSelectBox";

const SelectVoice = () => {
  const speaker = useSpeak();
  const [testContent, setTestContent] = useState(
    "I am ThangChiba and I created this application.You can copy and paste this sentence into your text-to-speech application to hear how it sounds with different voices and rates."
  );
  return (
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
  );
};

export default SelectVoice;
