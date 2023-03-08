import SettingsIcon from "@mui/icons-material/Settings";
import { Divider, IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import CommonModal from "../../../../Component/UIComponent/Common/CommonModal";
import SetupToken from "./SetupToken";
import SpeakSetting from "./Speaker/SpeakSetting";
import YoutubeTutorial from "./YoutubeTutorial";
const Setting = () => {
  const [open, setOpen] = useState(false);
  const [youtube, setYoutube] = useState(true);
  const [newUpdate, setNewUpdate] = useState(true);
  function handleCloseYoutube() {
    setOpen(true);
  }
  function handleCloseNewUpdate() {
    // setOpen(true);
  }
  return (
    <>
      <Stack spacing={3} sx={{ padding: 2 }}>
        <Typography textAlign="center" variant="h3">
          Setting
        </Typography>
        <SetupToken />
        <SpeakSetting />
      </Stack>
    </>
  );
};
export default Setting;
