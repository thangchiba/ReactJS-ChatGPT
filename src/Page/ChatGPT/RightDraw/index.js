import SettingsIcon from "@mui/icons-material/Settings";
import { Drawer, Fab } from "@mui/material";
import { useState } from "react";
import Setting from "./Setting";
function RightDrawer() {
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
          right: "5px",
          color: "black",
          top: 5,
          zIndex: 999,
          opacity: 1,
        }}
        size="small"
      >
        <SettingsIcon />
      </Fab>
      <Drawer
        anchor="right"
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
            color: "white",
            padding: 2,
          },
        }}
        ModalProps={{
          container: document.getElementById("chatbox"),
          style: { position: "absolute", opacity: 1 },
        }}
        transitionDuration={{ appear: 0, enter: 0, exit: 700 }}
      >
        <Setting />
      </Drawer>
    </>
  );
}

export default RightDrawer;
