import { Button, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useInput from "./useInput";

function SignUpForm(props) {
  const { setSignUp } = props;
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredAddress,
    isValid: addressIsValid,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddressInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredPhoneNumber,
    isValid: phoneNumberIsValid,
    hasError: phoneNumberHasError,
    valueChangeHandler: phoneNumberChangeHandler,
    inputBlurHandler: phoneNumberBlurHandler,
    reset: resetPhoneNumberInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim() !== "");
  const {
    value: reEnteredPassword,
    valueChangeHandler: reEnteredPasswordChangeHandler,
    inputBlurHandler: reEnteredPasswordBlurHandler,
    reset: resetReEnteredPasswordInput,
  } = useInput((value) => value.trim() !== "");

  const reEnteredPasswordIsValid = enteredPassword === reEnteredPassword;
  const reEnteredPasswordHasError = !reEnteredPasswordIsValid;
  const formIsInValid =
    !nameIsValid ||
    !addressIsValid ||
    !phoneNumberIsValid ||
    !passwordIsValid ||
    !reEnteredPasswordIsValid;

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    resetNameInput();
    resetAddressInput();
    resetPhoneNumberInput();
    resetPasswordInput();
    resetReEnteredPasswordInput();
  };
  return (
    <Box sx={{ m: 2 }}>
      <form onSubmit={formSubmissionHandler}>
        <Stack spacing={2}>
          <TextField
            label="Họ và tên"
            fullWidth
            error={nameInputHasError}
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            helperText={nameInputHasError && "Họ và tên chưa được nhập"}
          />
          <TextField
            label="Địa chỉ"
            fullWidth
            error={addressHasError}
            value={enteredAddress}
            onChange={addressChangeHandler}
            onBlur={addressBlurHandler}
            helperText={addressHasError && "Địa chỉ chưa được nhập"}
          />
          <TextField
            label="Tel"
            fullWidth
            error={phoneNumberHasError}
            value={enteredPhoneNumber}
            onChange={phoneNumberChangeHandler}
            onBlur={phoneNumberBlurHandler}
            helperText={phoneNumberHasError && "Tel chưa được nhập"}
          />
          <TextField
            label="Mật khẩu"
            fullWidth
            type="password"
            error={passwordHasError}
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            helperText={passwordHasError && "Mật khẩu chưa được nhập"}
          />
          <TextField
            label="Nhập lại mật khẩu"
            fullWidth
            type="password"
            error={reEnteredPasswordHasError}
            value={reEnteredPassword}
            onChange={reEnteredPasswordChangeHandler}
            onBlur={reEnteredPasswordBlurHandler}
            helperText={
              reEnteredPasswordHasError && "Mật khẩu nhập lại chưa đúng"
            }
          />
          <Button
            variant="contained"
            disabled={formIsInValid}
            onClick={() => {
              setSignUp(false);
            }}
          >
            Submit
          </Button>
          <Button
            onClick={() => {
              setSignUp(false);
            }}
            variant="outlined"
          >
            Quay lại Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default SignUpForm;
