import { Button, ButtonGroup, styled } from "@mui/material";
import React from "react";

const ButtonBox = styled(ButtonGroup)({
  marginTop: "30px",
  gap: "10px"
});

const CartButtons = () => {
  return (
    <ButtonBox>
      <Button style={{ borderRadius: "100%", border: "0.5px solid black" }}>-</Button>
      <Button disabled style={{border: "0.5px solid black"}}>1</Button>
      <Button style={{ borderRadius: "100%", border: "0.5px solid black" }}>+</Button>
    </ButtonBox>
  );
};

export default CartButtons;
