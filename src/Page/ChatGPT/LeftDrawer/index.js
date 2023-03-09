import MenuIcon from "@mui/icons-material/Menu";
import { Button, Divider, Drawer, Fab, Stack, TextField } from "@mui/material";
import { useState } from "react";
import Conversation from "./Conversation";
import ListConversation from "./ListConversation";
import ListTeach from "./ListTeach";

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
        transitionDuration={{ appear: 700, enter: 700, exit: 300 }}
      >
        <Stack direction="column" spacing={1}>
          <Button
            variant="outlined"
            sx={{ color: "white" }}
            size="large"
            onClick={() =>
              alert(
                `Due to local storage limit of 5MB, my application does not support multiple conversations on local storage. Please log in to use this feature. (This feature is coming soon!)`
              )
            }
          >
            New Chat
          </Button>
          {/* <ListConversation /> */}
        </Stack>

        <Divider color="white" sx={{ marginTop: 10, marginBottom: 2 }} />

        <Stack spacing={2}>
          <ListTeach />
        </Stack>
      </Drawer>
    </>
  );
}

export default LeftDrawer;
