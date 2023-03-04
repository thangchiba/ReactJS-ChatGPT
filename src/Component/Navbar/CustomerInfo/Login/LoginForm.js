import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import facebookLogo from "../../../../Static/Images/Logo/facebookLogo.png";
import googleLogo from "../../../../Static/Images/Logo/googleLogo.png";

function LoginForm(props) {
  const { setLogin, setOpen, setSignUp } = props;
  return (
    <Box marginTop={5} display="flex" justifyContent="center">
      <Stack spacing={3} sx={{ width: "80%" }}>
        <TextField
          id="input-with-icon-textfield"
          placeholder="Tài khoản"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleOutlinedIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />

        <TextField
          id="input-with-icon-textfield"
          placeholder="Mật khẩu"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlinedIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />

        <Button
          variant="contained"
          onClick={() => {
            setLogin(true);
            setOpen(false);
          }}
        >
          Sign in
        </Button>
        <Box display="flex" justifyContent="space-evenly">
          <img src={facebookLogo} width={50} height={50} />
          <img src={googleLogo} width={50} height={50} />
        </Box>
        <Button
          display="flex"
          variant="outlined"
          onClick={() => {
            setSignUp(true);
          }}
        >
          Sign up
        </Button>
      </Stack>
    </Box>
  );
}

export default LoginForm;
