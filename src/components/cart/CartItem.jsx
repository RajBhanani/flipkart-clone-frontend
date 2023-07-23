import { Box, Button, Typography, styled } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

import { removeFromCart } from "../../redux/actions/cartActions.js";

import React from "react";

import { addEllipsis } from "../../utils/commonUtils.js";
import CartButtons from "./CartButtons.jsx";
import { useDispatch } from "react-redux";

const Wrapper = styled(Box)({
  borderTop: "1px solid #F0F0F0",
  display: "flex",
  background: "white",
});

const LeftComponent = styled(Box)({
  margin: "20px",
  display: "flex",
  flexDirection: "column",
});

const RemoveButton = styled(Button)({
  marginTop: "20px",
  fontSize: "16px",
  color: "#000",
  fontWeight: "600",
});

const CartItem = ({ product }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <LeftComponent>
        <img
          src={product.url}
          alt="product"
          style={{ height: "110px", width: "110px" }}
        />
        <CartButtons />
      </LeftComponent>
      <Box style={{ margin: "20px" }}>
        <Typography>{addEllipsis(product.title.longTitle)}</Typography>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "5px",
            width: "max-content",
          }}
        >
          <Typography style={{ color: "#878787", size: "14px" }}>
            Seller: Raen
          </Typography>
          <img
            src={fassured}
            style={{ width: "60px", height: "auto", marginLeft: "10px" }}
            alt="Fassure"
          />
        </Box>
        <Typography style={{ marginTop: "10px" }}>
          <span style={{ fontWeight: "600", fontSize: "18px" }}>
            ₹{product.price.cost}&nbsp;&nbsp;
          </span>
          <span style={{ color: "#878787" }}>
            <strike>₹{product.price.mrp}</strike>&nbsp;&nbsp;
          </span>
          <span style={{ color: "#388E3C" }}>{product.price.discount}</span>
          <br />
          <span style={{ color: "#388E3C", fontWeight: "600" }}>
            4 offers applied {<InfoIcon fontSize="sm" />}
          </span>
        </Typography>
        <RemoveButton onClick={() => dispatch(removeFromCart(product.id))}>
          Remove
        </RemoveButton>
      </Box>
    </Wrapper>
  );
};

export default CartItem;
