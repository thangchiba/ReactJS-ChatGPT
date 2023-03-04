import React, { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
} from "@mui/material";

function VoiceSelectBox(props) {
  const { voices, selectedVoice, selectedRate, onChangeVoice, onChangeRate } =
    props;
  const [rate, setRate] = useState(0.8);

  useEffect(() => {
    setRate(selectedRate);
  }, [selectedRate]);

  const handleSliderChange = (event, newValue) => {
    setRate(newValue);
    onChangeRate(newValue);
  };

  return (
    <div>
      <FormControl>
        <InputLabel id="voice-select-label">Voice</InputLabel>
        <Select
          labelId="voice-select-label"
          id="voice-select"
          value={selectedVoice}
          onChange={onChangeVoice}
        >
          {voices.map((voice) => (
            <MenuItem key={voice.voiceURI} value={voice}>
              {`${voice.name} (${voice.lang})`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div>
        <InputLabel id="rate-slider-label">{`Rate : ${rate}`}</InputLabel>
        <Slider
          value={rate}
          onChange={handleSliderChange}
          aria-labelledby="rate-slider-label"
          step={0.1}
          min={0.5}
          max={2}
        />
      </div>
    </div>
  );
}

export default VoiceSelectBox;
