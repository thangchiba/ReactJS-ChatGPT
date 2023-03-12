import { Box } from "@mui/material";
import { Fragment } from "react";

export default function RPG() {
  return (
    <Fragment>
      <Box
        height="100vh"
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <iframe
          style={{ height: "100%", width: "100%" }}
          src="https://rpg.hoangthang.tech"
        ></iframe>
      </Box>
    </Fragment>
  );
}
