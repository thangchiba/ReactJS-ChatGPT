import MenuIcon from "@mui/icons-material/Menu";
import { Button, Divider, Drawer, Fab, Stack, TextField } from "@mui/material";
import { useState } from "react";
import Conversation from "./Conversation";
import ListConversation from "./ListConversation";
import ListPrompt from "./ListPrompt";

function LeftDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Fab
        onClick={handleDrawerOpen}
        sx={{
          position: "absolute",
          left: "5px",
          color: "red",
          top: 5,
          zIndex: 999,
          opacity: 1,
        }}
        size="small"
      >
        <MenuIcon />
      </Fab>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={handleDrawerClose}
        sx={{
          "& .MuiDrawer-root": {
            position: "absolute",
          },
          "& .MuiPaper-root": {
            position: "absolute",
          },
          overflow: "scroll",
        }}
        PaperProps={{
          sx: {
            width: 250,
            background: "#242526",
            opacity: 1,
            color: "white",
            padding: 3,
          },
        }}
        ModalProps={{
          container: document.getElementById("chatbox"),
          style: { position: "absolute", opacity: 1 },
        }}
      >
        <Stack direction="column" spacing={1}>
          <Button variant="outlined" sx={{ color: "white" }} size="large">
            New Chat
          </Button>
          <ListConversation />
        </Stack>

        <Divider color="white" sx={{ marginTop: 10, marginBottom: 2 }} />

        <Stack spacing={2}>
          <Button variant="outlined" sx={{ color: "white" }} size="large">
            New Prompt
          </Button>
          {/* <TextField
            label="Prompt"
            placeholder="Enter content to teach AI"
            InputLabelProps={{ style: { color: "white" }, shrink: true }}
            InputProps={{ style: { color: "white" } }}
          />
          <TextField
            label="Prompt"
            placeholder="Enter content to teach AI"
            InputLabelProps={{ style: { color: "white" }, shrink: true }}
            InputProps={{ style: { color: "white" } }}
          />
          <TextField
            label="Prompt"
            placeholder="Enter content to teach AI"
            InputLabelProps={{ style: { color: "white" }, shrink: true }}
            InputProps={{ style: { color: "white" } }}
          /> */}
          <ListPrompt />
        </Stack>
      </Drawer>
    </>
  );
}

export default LeftDrawer;
