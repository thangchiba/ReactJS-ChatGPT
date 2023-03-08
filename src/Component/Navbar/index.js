import { AppBar, Box, styled, Toolbar } from "@mui/material";
import CustomerInfo from "./CustomerInfo";
import Logo from "./Logo";
import MiddleBar from "./MiddleBar";
import Setting from "./Setting";

const StyledToolbar = styled(Toolbar)({
  backgroundColor: "white",
  justifyContent: "space-around",
  height: "70px",
  margin: 0,
  padding: 0,
});

function Navbar() {
  return (
    <Box display={{ xs: "none", md: "block" }}>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "red",
        }}
      >
        <StyledToolbar>
          <Logo />
          <MiddleBar />
          <Setting />
          <CustomerInfo />
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
