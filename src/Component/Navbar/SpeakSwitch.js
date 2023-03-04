import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { IconButton, MenuItem, Select } from "@mui/material";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { useState, Fragment } from "react";
import SelectVoice from "./SelectVoice";
import { useDispatch, useSelector } from "react-redux";
import { speakAction } from "../../Redux/SpeakSlice";
const SpeakSwitch = () => {
  const isSpeak = useSelector((redux) => redux.speak.isSpeak);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <IconButton
        onClick={(e) => dispatch(speakAction.config({ isSpeak: !isSpeak }))}
      >
        {isSpeak && <VolumeUpIcon />}
        {!isSpeak && <VolumeOffIcon />}
      </IconButton>
      {isSpeak && (
        <>
          <SelectVoice />
        </>
      )}
    </Fragment>
  );
};

export default SpeakSwitch;
