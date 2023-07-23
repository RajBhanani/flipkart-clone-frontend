import { Grid, Box, Typography, styled, Button } from "@mui/material";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import CartItem from "./CartItem";
import TotalView from "./TotalView";

const Wrapper = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",
  [theme.breakpoints.down("md")]: {
    padding: "30px 0px",
  },
}));

const RightGrid = styled(Grid)(({ theme }) => ({
  paddingRight: "20px",
  [theme.breakpoints.down("md")]: {
    padding: "0px",
    marginBottom: "20px",
  },
}));

const Header = styled(Box)({
  padding: "15px 24px",
  background: "white",
  marginBottom: "15px",
});

const PlaceOrderBox = styled(Box)({
  padding: "20px",
  background: "white",
  display: "flex",
  justifyContent: "end",
  boxShadow: "0px -3px 5px #00000020",
});

const PlaceOrderButton = styled(Button)({
  background: "#FB541B",
  width: "30%",
  height: "50px",
  borderRadius: "2px",
});

const EmptyCartBox = styled(Box)(({theme}) => ({
  background: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  flexDirection: "column",
  height: "400px",
  margin: "85px 150px",
  [theme.breakpoints.down("md")]: {
    margin: "85px 20px"
  }
}));

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const imgurl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";
  return (
    <>
      {cartItems.length ? (
        <Wrapper container>
          <RightGrid item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart ({cartItems.length})</Typography>
            </Header>
            {cartItems.map((item) => {
              return <CartItem product={item} key={item.id} />;
            })}
            <PlaceOrderBox>
              <PlaceOrderButton variant="contained">
                Place Order
              </PlaceOrderButton>
            </PlaceOrderBox>
          </RightGrid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Wrapper>
      ) : (
        <EmptyCartBox>
          <img src={imgurl} alt="cart empty" style={{ width: "250px" }} />
          <Typography>Cart is empty</Typography>
          <Link to={"/"}>
            <Button variant="contained">Home</Button>
          </Link>
        </EmptyCartBox>
      )}
    </>
  );
};

export default Cart;
