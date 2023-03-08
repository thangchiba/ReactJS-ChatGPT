import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { speakAction } from "../../../../../Redux/SpeakSlice";

const useSpeak = () => {
  const dispatch = useDispatch();
  const speakState = useSelector((redux) => redux.speak);
  const [voices, setVoices] = useState([]);
  const [mapVoice, setMapVoice] = useState([]);

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

  useEffect(() => {
    try {
      const mapVoice = voices.reduce((map, voice) => {
        const key = `${voice.name}(${voice.lang})`;
        const value = voice;
        map[key] = value;
        return map;
      }, {});
      setMapVoice(mapVoice);
    } catch {
      alert("Error when set Voices Map");
    }
  }, [voices]);

  const speak = (content) => {
    try {
      if (speakState.voice && window.speechSynthesis) {
        if (speakState.isSpeak) {
          dispatch(speakAction.config({ isSpeaking: true }));
        }
        window.speechSynthesis.cancel();
        // Create a new SpeechSynthesisUtterance object
        const utterance = new SpeechSynthesisUtterance(content);
        // Set the selected voice and rate on the utterance
        utterance.voice = mapVoice[speakState.voice];
        utterance.rate = speakState.rate;
        // Update the state to indicate that speaking has started
        // Speak the utterance
        window.speechSynthesis.speak(utterance);
        // Register an event listener to update state when speaking ends
        utterance.onend = () => {
          dispatch(speakAction.config({ isSpeaking: false }));
        };
      }
    } catch {
      toast("Error when speak");
    }
  };

  const stopSpeak = () => {
    window.speechSynthesis.cancel();
    dispatch(speakAction.config({ isSpeaking: false }));
  };
  return { voices, speak, stopSpeak };
};
export default useSpeak;
