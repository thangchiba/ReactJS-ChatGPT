import SettingsIcon from "@mui/icons-material/Settings";
import { IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import CommonModal from "../UIComponent/Common/CommonModal";
import SetupToken from "./SetupToken";
import SpeakSwitch from "./SpeakSwitch";
import YoutubeTutorial from "./YoutubeTutorial";
const Setting = () => {
  const [open, setOpen] = useState(false);
  const [youtube, setYoutube] = useState(true);
  function handleCloseYoutube() {
    setOpen(true);
  }
  return (
    <>
      <IconButton onClick={(e) => setOpen(true)}>
        <SettingsIcon color="secondary" id="setting" />
      </IconButton>
      <YoutubeTutorial
        open={youtube}
        setOpen={setYoutube}
        onClose={handleCloseYoutube}
      />
      <CommonModal
        open={open}
        setOpen={setOpen}
        onClose={() => {
          window.speechSynthesis.cancel();
        }}
      >
        <Stack spacing={3} sx={{ padding: 2 }}>
          <Typography textAlign="center" variant="h3" color="primary">
            Setting
          </Typography>
          <SetupToken />
          <SpeakSwitch />
        </Stack>
      </CommonModal>
    </>
  );
};
export default Setting;
