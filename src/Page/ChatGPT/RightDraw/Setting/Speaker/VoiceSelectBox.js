import { Autocomplete, FormControl, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { speakAction } from "../../../../../Redux/SpeakSlice";

function VoiceSelectBox(props) {
  const { voices } = props;
  const dispatch = useDispatch();
  const selectedVoice = useSelector((redux) => redux.speak.voice);

  const [selections, setSelections] = useState([]);

  useEffect(() => {
    setSelections(voices.map((voice) => `${voice.name}(${voice.lang})`));
  }, [voices]);

  const handleVoiceChange = (event) => {
    dispatch(speakAction.config({ voice: event.target.textContent }));
  };
  return (
    <div>
      <FormControl>
        <Autocomplete
          id="speak-voice"
          options={selections}
          getOptionLabel={(option) => option}
          onChange={handleVoiceChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Speak Voice"
              variant="outlined"
              inputProps={{
                ...params.inputProps,
                autoComplete: true, // Disable autocomplete and autofill of input field
                style: {
                  color: "white",
                  width: "100%",
                },
              }}
              color="warning"
              focused
            />
          )}
          value={selectedVoice}
          autoHighlight={true}
          autoSelect={true}
        />
      </FormControl>
    </div>
  );
}

export default VoiceSelectBox;
