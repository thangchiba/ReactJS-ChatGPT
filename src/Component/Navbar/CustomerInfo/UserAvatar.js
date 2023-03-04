import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import {
  Avatar,
  Divider,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { Fragment, useState } from "react";
import cumeoImage from "../../../Static/Images/Avatar/cumeo.jpeg";

function UserAvatar(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <Fragment>
      <Avatar alt="Hoang Thang" src={cumeoImage} onClick={handleClick} />
      <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
        <MenuItem>
          <Avatar src={cumeoImage} />
          <Typography variant="h6" ml={1}>
            Profile
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <SettingsOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={props.LogOut}>
          <ListItemIcon>
            <LogoutOutlinedIcon fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Fragment>
  );
}
export default UserAvatar;
