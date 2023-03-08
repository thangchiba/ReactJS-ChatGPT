import { InputLabel, Slider } from "@mui/material";
import { default as React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { speakAction } from "../../../../../Redux/SpeakSlice";

const VoiceRate = () => {
  const dispatch = useDispatch();
  const rate = useSelector((redux) => redux.speak.rate);
  const handleRateChange = (event) => {
    dispatch(speakAction.config({ rate: event.target.value }));
  };

  return (
    <div>
      <InputLabel
        sx={{ color: "white" }}
        id="rate-slider-label"
      >{`Rate : ${rate}`}</InputLabel>
      <Slider
        value={rate}
        onChange={handleRateChange}
        aria-labelledby="rate-slider-label"
        step={0.01}
        min={0.5}
        max={2}
        color="warning"
      />
    </div>
  );
};
export default VoiceRate;
