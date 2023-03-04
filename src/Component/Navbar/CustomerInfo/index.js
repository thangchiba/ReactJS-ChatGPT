import { Button, styled } from "@mui/material";
import React, { Fragment, useState } from "react";
import Login from "./Login";
import UserAvatar from "./UserAvatar";
const CustomerInfoBar = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

function CustomerInfo() {
  const [isLogin, setLogin] = useState(false);
  const [isOpen, setOpen] = React.useState(false);
  function HandlerLogOut() {
    setLogin(false);
  }
  return (
    <Fragment>
      <CustomerInfoBar>
        {isLogin && <UserAvatar LogOut={HandlerLogOut} />}
        {!isLogin && (
          <Button
            variant="outlined"
            color="success"
            onClick={() => {
              setOpen(true);
            }}
          >
            Login
          </Button>
        )}
      </CustomerInfoBar>
      <Login open={isOpen} setOpen={setOpen} setLogin={setLogin} />
    </Fragment>
  );
}

export default CustomerInfo;
