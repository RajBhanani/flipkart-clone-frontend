import { Box, Button, Typography, styled, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AuthDialog from "../login/AuthDialog";
import { useState, useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ButtonBox = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0 3% 0 auto",
  "& > button, & > p, & > div": {
    margin: "auto 25px",
    fontSize: "15px",
    fontWeight: "600",
    width: "max-content",
    textAlign: "center",
  },
  "& > div > a": {
    color: "white",
  },
  [theme.breakpoints.down("lg")]: {
    "& > button, & > p, & > div": {margin: "auto 15px"}
  },
  [theme.breakpoints.down("md")]: {
    padding: "20px",
    flexDirection: "column",
    gap: "30px",
    "& > button, & > p, & > div": {
      width: "auto",
    },
    "& > div > a": {
      color: "black",
    },
  },
}));

const LoginButton = styled(Button)`
  background: #ffffff;
  color: #2874f0;
  text-transform: none;
  border-radius: 2px;
  padding: 5px 40px;
  box-shadow: none;
  margin: auto 40px auto 0;
`;

const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  const { login, setLogin } = useContext(DataContext);

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <ButtonBox>
      {login ? (
        <Typography>
          <Profile login={login} setLogin={setLogin} />
        </Typography>
      ) : (
        <LoginButton variant="contained" onClick={() => setOpen(true)}>
          Login
        </LoginButton>
      )}

      <Typography>Become a Seller</Typography>
      <Typography>More</Typography>

      <Box>
        <Link
          to="/cart"
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "none",
          }}
        >
          <Badge badgeContent={cartItems?.length} color="error"></Badge>
          <ShoppingCartIcon fontSize="small" />
          <Typography style={{ fontSize: "15px", fontWeight: "600" }}>
            Cart
          </Typography>
        </Link>
      </Box>

      <Typography style={{marginRight: "0", width: "110px"}}>Clone made by Raj Bhanani</Typography>

      <AuthDialog open={open} setOpen={setOpen} />
    </ButtonBox>
  );
};

export default CustomButtons;
