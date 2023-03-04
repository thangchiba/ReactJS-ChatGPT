import { Box } from "@mui/system";
import Navbar from "./Component/Navbar";
// import MetaMessenger from "./Component/UIComponent/Common/MetaMessenger";
function Layout(props) {
  return (
    <Box>
      <Navbar />
      {/* <MetaMessenger /> */}
      {props.children}
    </Box>
  );
}
export default Layout;
