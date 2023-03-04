import { Button, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gptAction } from "../../Redux/GPTSlice";
import VoiceSelectBox from "./VoiceSelectBox";

function SelectVoice() {
  const [voices, setVoices] = useState([]);
  const dispatch = useDispatch();
  const selectedVoice = useSelector((redux) => redux.gpt.voice);
  const selectedRate = useSelector((redux) => redux.gpt.rate);
  const [testContent, setTestContent] = useState(
    "I am ThangChiba and I created this application.You can copy and paste this sentence into your text-to-speech application to hear how it sounds with different voices and rates."
  );

  useEffect(() => {
    // Get list of voices when component mounts
    const voices = window.speechSynthesis.getVoices();
    setVoices(voices);

    // Update list of voices when voices change
    window.speechSynthesis.onvoiceschanged = () => {
      const updatedVoices = window.speechSynthesis.getVoices();
      setVoices(updatedVoices);
    };
  }, []);

  const handleVoiceChange = (event) => {
    // setSelectedVoice(event.target.value);
    dispatch(gptAction.setVoice({ voice: event.target.value }));
  };

  const handleRateChange = (newValue) => {
    // setSelectedRate(newValue);
    dispatch(gptAction.setRate({ rate: newValue }));
  };

  const handleSpeak = () => {
    if (selectedVoice && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      // Create a new SpeechSynthesisUtterance object
      const utterance = new SpeechSynthesisUtterance(testContent);

      // Set the selected voice and rate on the utterance
      utterance.voice = selectedVoice;
      utterance.rate = selectedRate;

      // Speak the utterance
      window.speechSynthesis.speak(utterance);
    }
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
      <Button variant="outlined" onClick={handleSpeak}>
        Test Speak
      </Button>
    </>
  );
}

export default SelectVoice;
