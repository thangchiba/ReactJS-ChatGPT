import { useState } from "react";
import { Drawer, Fab, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function LeftDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  //   const container = () => document.getElementById("chatbox") || undefined;
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
        // container={container}
        open={isOpen}
        onClose={handleDrawerClose}
        // sx={{ position: "absolute", left: "10px", color: "white", top: 0 }}

        sx={{
          "& .MuiDrawer-root": {
            position: "absolute",
          },
          "& .MuiPaper-root": {
            position: "absolute",
          },
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
        // your drawer content here
      </Drawer>
    </>
  );
}

export default LeftDrawer;
