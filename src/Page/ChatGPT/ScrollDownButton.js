import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Fab } from "@mui/material";
import { useEffect, useState } from "react";
const ScrollDownButton = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const element = document.getElementById("chatboard");

  useEffect(() => {
    if (!element) return;
    element.addEventListener("scroll", handleScroll);

    return () => {
      element.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = element.scrollHeight;
    setScrollPosition(position);
  };

  return (
    <Fab
      id="scroll-down"
      sx={{
        position: "absolute",
        right: 10,
        bottom: { xs: 70, md: 120 },
      }}
      onClick={() => {
        element.scrollTo({ top: 0, behavior: "smooth" });
      }}
      color="inherit"
      size="small"
    >
      <KeyboardDoubleArrowDownIcon color="primary" />
    </Fab>
  );
};

export default ScrollDownButton;
