import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  styled,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Search from "./Search";
import CustomButtons from "./CustomButtons";

import { Link } from "react-router-dom";
import { useState } from "react";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const StyledBox = styled(Box)(({theme}) => ({
  marginLeft: "7%",
  lineHeight: "0",
  [theme.breakpoints.down("lg")]: {
    margin: "0"
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: "10px"
  }
}));

const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
  font-weight: bold;
`;

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
  margin: "0 5% 0 auto",
  [theme.breakpoints.down("lg")]: {
    margin: "0"
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MenuIconButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  marginLeft: "-10px",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Header = () => {
  const logoUrl =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const list = () => {
    return (
      <Box>
        <List>
          <ListItem>
            <CustomButtons />
          </ListItem>
        </List>
      </Box>
    );
  };

  return (
    <div>
      <StyledHeader>
        <Toolbar style={{ minHeight: "55px" }}>
          <MenuIconButton color="inherit" onClick={handleDrawerOpen}>
            <MenuIcon />
          </MenuIconButton>
          <Drawer open={openDrawer} onClose={handleDrawerClose}>
            {list()}
          </Drawer>
          <StyledBox>
            <Link to={""} style={{ textDecoration: "none", color: "inherit" }}>
              <img src={logoUrl} alt="logo" style={{ width: "75px" }} />
              <Box style={{ display: "flex" }}>
                <SubHeading>
                  Explore&nbsp;
                  <Box component="span" style={{ color: "yellow" }}>
                    Plus
                  </Box>
                </SubHeading>
                <img
                  src={subURL}
                  alt="plus"
                  style={{ width: "10px", height: "10px", marginLeft: "4px" }}
                />
              </Box>
            </Link>
          </StyledBox>
          <Search />
          <CustomButtonWrapper>
            <CustomButtons />
          </CustomButtonWrapper>
        </Toolbar>
      </StyledHeader>
    </div>
  );
};

export default Header;
