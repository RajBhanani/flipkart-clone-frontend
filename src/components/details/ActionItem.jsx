import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { addToCart } from "../../redux/actions/cartActions.js";
import { useState } from "react";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("lg")]: {
    padding: "40px 0px",
  },
}));

const DetailImage = styled("img")({
  padding: "15px",
  width: "90%",
});

const ButtonBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  gap: "4%",
  margin: "30px auto 0 auto",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

const StyledButton = styled(Button)`
  width: 48%;
  height: 50px;
  border-radius: 2px;
`;

const ActionItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const addItemToCart = () => {
    dispatch(addToCart(product.id, quantity));
    navigate("/cart");
  };

  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
        }}
      >
        <DetailImage src={product.detailUrl} alt={product.title.longTitle} />
      </Box>
      <ButtonBox>
        <StyledButton
          variant="contained"
          style={{ background: "#FF9F00" }}
          onClick={() => addItemToCart()}
        >
          <ShoppingCartIcon />
          Add to Cart
        </StyledButton>
        <StyledButton variant="contained" style={{ background: "#FB541B" }}>
          <FlashOnIcon />
          Buy Now
        </StyledButton>
      </ButtonBox>
    </LeftContainer>
  );
};

export default ActionItem;
