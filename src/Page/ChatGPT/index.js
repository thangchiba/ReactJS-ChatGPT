import styled from "@emotion/styled";
import { Fab, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import useSpeak from "../../Component/Navbar/Setting/Speaker/useSpeak";
import useHTTPGPT from "../../HTTP_Request/useHTTPGPT";
import ChatBoard from "./ChatBoard";
import ChatForm from "./ChatForm";

const StyledCover = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    paddingBlock: 0,
    backgroundColor: "#242526",
  },
  color: "white",
  height: "calc(100vh - 70px)",
  minWidth: "100vw",
  width: "100vw",
  margin: 0,
  paddingInline: 0,
  paddingBlock: 20,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledChatBox = styled(Box)(({ theme }) => ({
  height: "calc(87vh - 70px)",
  width: "90vw",
  color: "white",
  margin: 0,
  borderRadius: "15px",
  paddingBlock: "35px",
  paddingInline: "20px",
  backgroundColor: "#242526",
  [theme.breakpoints.down("sm")]: {
    width: "100vw",
    height: "calc(85vh - 70px)",
    paddingBlock: "0px",
    paddingInline: "0px",
  },
}));

const ChatGPT = (props) => {
  const speaker = useSpeak();
  const [messages, setMessages] = useState([
    {
      id: "2b653d85-a9c1-4e87-aae6-bbd28d561d8a",
      role: "user",
      content: "create a conversation",
    },
    {
      role: "assistant",
      content:
        "\n\nPerson 1: Hey there, how's it going?\n\nPerson 2: Hi, I'm doing pretty well, thanks for asking. How about you?\n\nPerson 1: Not so bad, just trying to get through the day. Did you get a chance to catch up on the latest episode of that show we were talking about?\n\nPerson 2: Oh, no, I haven't had time yet. I've been so swamped at work.\n\nPerson 1: Ah, bummer. Well, maybe we can catch up together sometime.\n\nPerson 2: Definitely, that sounds like fun. So, how's your work going?\n\nPerson 1: It's been a bit crazy lately, but it's keeping me on my toes. I'm learning a lot, which is always good, but it can be stressful too.\n\nPerson 2: Yeah, I know what you mean. I've been feeling the same way. But hey, at least we have each other to vent to, right?\n\nPerson 1: Absolutely. It's always good to have someone to share the ups and downs with. Speaking of which, do you have any plans for the weekend?\n\nPerson 2: Not yet, but I was thinking of maybe going out for a hike or something. How about you?\n\nPerson 1: That sounds great! I was actually thinking of checking out that new restaurant that just opened up. Want to join me?\n\nPerson 2: Sounds like a plan. Looking forward to it.",
      id: "706a80c5-f657-4337-9222-67c636349e77",
    },
    {
      id: "21ed54c9-ed88-4dd7-85fe-d269f3978b5b",
      role: "user",
      content: "one more",
    },
    {
      role: "assistant",
      content:
        "Person 1: Hi, how are you doing today?\n\nPerson 2: Hey there! I'm doing pretty well, thanks. How about you?\n\nPerson 1: I'm good, thanks for asking. So, what have you been up to lately?\n\nPerson 2: Not too much, just trying to stay busy with work and other stuff. How about you?\n\nPerson 1: I've been working on a new project at work, which has been keeping me pretty busy, but it's exciting. I'm also trying to get back into my exercise routine.\n\nPerson 2: Oh, that's great. What kind of project is it?\n\nPerson 1: It's a marketing campaign for a new product line. There's a lot of planning and coordination involved, but it's been a rewarding experience so far.\n\nPerson 2: Nice! And as for your exercise routine, what kind of workouts do you usually do?\n\nPerson 1: I like a mix of cardio and strength training. I've been going for runs in the morning and doing some weightlifting in the evenings.\n\nPerson 2: Wow, that sounds intense. I have to admit, I've been slacking on my own fitness lately.\n\nPerson 1: Yeah, it can be tough to stay motivated sometimes. But maybe we can work out together sometime and keep each other accountable?\n\nPerson 2: That actually sounds like a great idea. Let's plan on it soon.\n\nPerson 1: Definitely. And speaking of planning, do you have any plans for the weekend?\n\nPerson 2: Not yet, but I was thinking of maybe checking out that new art exhibit downtown. How about you?\n\nPerson 1: That sounds cool. I was thinking of having a BBQ with some friends. Wanna join us?\n\nPerson 2: That sounds like fun! Count me in.",
      id: "db0a27c1-6c13-46aa-ada7-3ba5096785a9",
    },
    {
      id: "d55b30cd-f6c7-4267-9576-4d727d89b531",
      role: "user",
      content: "hello",
    },
    {
      role: "assistant",
      content: "Hi there! How can I assist you today?",
      id: "2c6f01b0-328b-49be-865a-1ee3e599057d",
    },
  ]);
  const gptAPI = useHTTPGPT();
  const speak = useSelector((redux) => redux.speak);

  useEffect(() => {
    console.log(speak.isSpeaking);
  }, [speak.isSpeaking]);

  async function submitChat(content) {
    try {
      const message = {
        id: uuidv4(),
        role: "user",
        content: content,
      };
      let newMessages = [...messages, message];
      setMessages(newMessages);
      const response = await gptAPI.post(
        newMessages.slice(-8).map((message) => {
          return {
            role: message.role,
            content: message.content,
          };
        })
      );
      const responseMessage = { ...response.choices[0].message, id: uuidv4() };
      newMessages = [...messages, message, responseMessage];
      console.log(newMessages);
      setMessages(newMessages);

      if (speak.isSpeak) {
        speaker.speak(responseMessage.content);
      }
    } catch (err) {
      alert("Error when send message");
      console.log(err);
    }
  }

  return (
    <StyledCover id="cover">
      <Grid container sx={{ height: "100%" }} id="container">
        <Grid
          item
          sx={{ display: { xs: "none", md: "block" } }}
          md={0.5}
        ></Grid>
        <Grid item md={11}>
          <StyledChatBox id="chatbox" sx={{ backgroundColor: "inherit" }}>
            <ChatBoard messages={messages} loading={gptAPI.loading} />
            <ChatForm onSubmit={submitChat} />
          </StyledChatBox>
        </Grid>
        <Grid
          item
          sx={{ display: { xs: "none", md: "block" } }}
          md={0.5}
        ></Grid>
      </Grid>
    </StyledCover>
  );
};

export default ChatGPT;
