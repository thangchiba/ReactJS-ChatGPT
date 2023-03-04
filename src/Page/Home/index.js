import styled from "@emotion/styled";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import avatar from "../../Static/Images/Avatar/avatarRed.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import NeonAvatar from "./NeonAvatar";

const StyledImage = styled("img")(({ theme }) => ({
  borderRadius: 500,
  width: "200px",
  height: "200px",
}));

export default function Home() {
  return (
    <Fragment>
      <Box
        height="100vh"
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box
          height="80vh"
          width="400px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          border=""
        >
          <Grid mt={3} mb={1}>
            <NeonAvatar imageUrl={avatar}></NeonAvatar>
          </Grid>
          <Typography
            fontSize={45}
            color="white"
            sx={{ textShadow: "0.5px 0.5px" }}
          >
            Hoang Van Thang
          </Typography>
          <Typography
            fontSize={25}
            color="white"
            sx={{ textShadow: "0.3px 0.3px" }}
          >
            Software Engineer
          </Typography>
          <Box maxWidth={700} marginTop={2} mx={2}>
            <Typography fontSize={15} color="white">
              I am a software engineer with a strong foundation in computer
              science and a passion for solving complex problems with
              technology. I am skilled in delivering high-quality software and
              committed to writing clean, efficient code. I am constantly
              seeking new challenges and opportunities to grow as a developer.
            </Typography>
          </Box>
          <Box
            sx={{
              border: "2px solid white",
              borderRadius: "15px",
              marginTop: 1,
            }}
          >
            <Button
              href="https://www.facebook.com/kennythang9x"
              startIcon={
                <FacebookIcon
                  style={{
                    fontSize: "60px",
                    color: "white",
                    marginInline: "15px",
                  }}
                />
              }
            >
              {/* Facebook */}
            </Button>
            <Button
              href="https://www.youtube.com/channel/UCNgVlBys4lGMH1O9wlAVkBw"
              startIcon={
                <YouTubeIcon
                  style={{
                    fontSize: "60px",
                    color: "white",
                    marginInline: "15px",
                  }}
                />
              }
              fontSize={35}
            >
              {/* YouTube */}
            </Button>
            <Button
              href="https://github.com/thangchiba"
              startIcon={
                <GitHubIcon
                  style={{
                    fontSize: "60px",
                    color: "white",
                    marginInline: "15px",
                  }}
                />
              }
            >
              {/* GitHub */}
            </Button>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}
