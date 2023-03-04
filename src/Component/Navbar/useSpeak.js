import { useDispatch, useSelector } from "react-redux";
import { speakAction } from "../../Redux/SpeakSlice";

const useSpeak = () => {
  const dispatch = useDispatch();
  const speakState = useSelector((redux) => redux.speak);

  const speak = (content) => {
    try {
      if (speakState.voice && window.speechSynthesis) {
        dispatch(speakAction.config({ isSpeaking: true }));
        window.speechSynthesis.cancel();
        // Create a new SpeechSynthesisUtterance object
        const utterance = new SpeechSynthesisUtterance(content);
        // Set the selected voice and rate on the utterance
        utterance.voice = speakState.voice;
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
      console.log("Error when speak");
    }
  };
  return { speak };
};
export default useSpeak;
