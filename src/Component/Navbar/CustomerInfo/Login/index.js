import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import lycheeLogo from "../../../../Static/Images/Logo/lycheeLogo.png";
import CommonModal from "../../../UIComponent/Common/CommonModal";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Login(props) {
  const { setLogin, setOpen, open } = props;
  const [isSignUp, setSignUp] = React.useState(false);
  return (
    <CommonModal width={350} open={open} setOpen={setOpen}>
      <Box justifyContent="center" display="flex">
        <img src={lycheeLogo} height={120} width={120} />
      </Box>

      <Typography variant="h3" textAlign="center">
        {!isSignUp ? "Welcome" : "Sign up"}
      </Typography>
      <Divider />
      {!isSignUp && (
        <LoginForm
          setLogin={setLogin}
          setOpen={setOpen}
          setSignUp={setSignUp}
        />
      )}
      {isSignUp && <SignUpForm setSignUp={setSignUp} />}
    </CommonModal>
  );
}

export default Login;
