import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { IconButton } from "@mui/material";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { speakAction } from "../../../../../Redux/SpeakSlice";
import SelectVoice from "./SelectVoice";
const SpeakSwitch = () => {
  const isSpeak = useSelector((redux) => redux.speak.isSpeak);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <IconButton
        color="warning"
        onClick={(e) => dispatch(speakAction.config({ isSpeak: !isSpeak }))}
        // sx={{ backgroundColor: "white" }}
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
