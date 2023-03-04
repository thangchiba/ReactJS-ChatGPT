import { Button, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { speakAction } from "../../Redux/SpeakSlice";
import useSpeak from "./useSpeak";
import VoiceSelectBox from "./VoiceSelectBox";

function SelectVoice() {
  const [voices, setVoices] = useState([]);
  const dispatch = useDispatch();
  const selectedVoice = useSelector((redux) => redux.speak.voice);
  const selectedRate = useSelector((redux) => redux.speak.rate);
  const speaker = useSpeak();
  const [testContent, setTestContent] = useState(
    "I am ThangChiba and I created this application.You can copy and paste this sentence into your text-to-speech application to hear how it sounds with different voices and rates."
  );

  useEffect(() => {
    try {
      // Get list of voices when component mounts
      const voices = window.speechSynthesis.getVoices();
      setVoices(voices);

      // Update list of voices when voices change
      window.speechSynthesis.onvoiceschanged = () => {
        const updatedVoices = window.speechSynthesis.getVoices();
        setVoices(updatedVoices);
      };
    } catch {
      alert("Cannot get voice data. Please refresh page.");
    }
  }, []);

  const handleVoiceChange = (event) => {
    dispatch(speakAction.config({ voice: event.target.value }));
  };

  const handleRateChange = (newValue) => {
    dispatch(speakAction.config({ rate: newValue }));
  };

  return (
    <>
      <VoiceSelectBox
        voices={voices}
        selectedVoice={selectedVoice}
        selectedRate={selectedRate}
        onChangeVoice={handleVoiceChange}
        onChangeRate={handleRateChange}
      />
      <TextField
        label="Test Content"
        value={testContent}
        onChange={(e) => setTestContent(e.target.value)}
      ></TextField>
      <Button
        variant="outlined"
        // onClick={() => dispatch(speakAction.speak(testContent))}
        onClick={() => speaker.speak(testContent)}
      >
        Test Speak
      </Button>
    </>
  );
}

export default SelectVoice;
