import styled from "@emotion/styled";
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CommonModal from "../../UIComponent/Common/CommonModal";

const StyledTutorialBox = styled(Box)(({ theme }) => ({
  width: "800px",
  height: "500px",
  [theme.breakpoints.down("sm")]: {
    width: "350px",
    height: "250px",
  },
}));

const YoutubeTutorial = (props) => {
  const { open, setOpen, onClose } = props;
  return (
    <CommonModal open={open} setOpen={setOpen} onClose={onClose}>
      <StyledTutorialBox>
        {/* <Typography variant="h4" color="primary" textAlign="center">
          Tutorial Video
        </Typography> */}
        <Divider />
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/3vzaH0vUWC8"
          title="ThangChiba GPT Tutorial"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </StyledTutorialBox>
    </CommonModal>
  );
};
export default YoutubeTutorial;
