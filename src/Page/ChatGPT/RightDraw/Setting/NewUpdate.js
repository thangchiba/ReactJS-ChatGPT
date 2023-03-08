import { Fragment, useState } from "react";
import CommonModal from "../../UIComponent/Common/CommonModal";
import { Card, CardContent, Divider, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Box } from "@mui/system";

const UpdateCard = ({ releaseDate, versionNumber, features }) => {
  return (
    <Fragment>
      <Divider sx={{ marginTop: 2 }}>Version {versionNumber}</Divider>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h3">
            Release Date: {releaseDate}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            New Features:
          </Typography>
          {features.map((feature, index) => (
            <Typography key={index} variant="body2">
              - {feature}
            </Typography>
          ))}
        </CardContent>
      </Card>
    </Fragment>
  );
};
const StyledTutorialBox = styled(Box)(({ theme }) => ({
  width: "800px",
  height: "500px",
  [theme.breakpoints.down("sm")]: {
    width: "350px",
    height: "250px",
  },
}));

const NewUpdate = (props) => {
  const { open, setOpen, onClose } = props;
  return (
    <CommonModal open={open} setOpen={setOpen} onClose={onClose}>
      <Typography variant="h3" color="primary" textAlign="center">
        New Update
      </Typography>
      <StyledTutorialBox>
        <UpdateCard
          releaseDate="6/3/2023"
          versionNumber="Beta 0.0.3"
          features={[
            "Streamable",
            "Response chunk cutting",
            "Save data in local storage",
          ]}
        />
        <UpdateCard
          releaseDate="5/3/2023"
          versionNumber="Beta 0.0.2"
          features={["Migrate from homepage to separated page"]}
        />
        <UpdateCard
          releaseDate="4/3/2023"
          versionNumber="Beta 0.0.1"
          features={["Chatable overthrough openai", "Speakable"]}
        />
        <UpdateCard
          releaseDate="4/3/2023"
          versionNumber="beta 0.0.1"
          features={["Chatable overthrough openai", "Speakable"]}
        />
      </StyledTutorialBox>
    </CommonModal>
  );
};
export default NewUpdate;
