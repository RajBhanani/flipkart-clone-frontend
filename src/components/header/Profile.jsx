import { PowerSettingsNew } from "@mui/icons-material";
import { Box, Typography, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const Profile = ({ login, setLogin }) => {
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logout = () => {
    setLogin("");
  };

  const [open, setOpen] = useState(false);
  return (
    <>
      <Box onClick={handleClick} style={{cursor: "pointer"}}>
        <Typography>{login}</Typography>
      </Box>
      <Menu
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        style={{ marginTop: "5px" }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          <PowerSettingsNew
            color="primary"
            fontSize="medium"
            style={{ marginRight: "5px" }}
          />
          <Typography>Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Profile;
