import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const HeadingBox = styled(Box)({
  padding: "15px 24px",
  background: "white",
  borderBottom: "1px solid #F0F0F0",
});

const StyledTable = styled(Table)({
  padding: "15px 24px",
  background: "white",
  "& > p": {
    marginBottom: "20px",
  },
});

const StyledTableRow = styled(TableRow)({
  verticalAlign: "baseline",
  "& > td": {
    border: "none",
    marginTop: "10px",
  },
});

const TotalView = ({ cartItems }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const totalAmount = () => {
    let price = 0,
      discount = 0;
    cartItems.map((item) => {
      price += item.price.mrp;
      discount += item.price.mrp - item.price.cost;
    });
    setPrice(price);
    setDiscount(discount);
  };

  useEffect(() => {
    totalAmount();
  }, [cartItems]);

  return (
    <Box>
      <HeadingBox>
        <Typography color={"#878787"}>PRICE DETAILS</Typography>
      </HeadingBox>
      <StyledTable>
        <TableBody>
          <StyledTableRow>
            <TableCell>Price ({cartItems?.length})</TableCell>
            <TableCell style={{textAlign: "right"}}>₹{price}</TableCell>
          </StyledTableRow>
          <StyledTableRow>
            <TableCell>Discount</TableCell>
            <TableCell style={{ color: "#388E3C", textAlign: "right" }}>- ₹{discount}</TableCell>
          </StyledTableRow>
          <StyledTableRow>
            <TableCell>Delivery Charges</TableCell>
            <TableCell style={{textAlign: "right"}}>₹40</TableCell>
          </StyledTableRow>
          <StyledTableRow>
            <TableCell colSpan={2}>
              <hr
                style={{
                  borderTop: "1px dashed #878787",
                  width: "100%",
                  margin: "0", textAlign: "right"
                }}
              />
            </TableCell>
          </StyledTableRow>
          <StyledTableRow>
            <TableCell style={{ fontWeight: "600", fontSize: "18px" }}>
              Total Amount
            </TableCell>
            <TableCell style={{ fontWeight: "600", fontSize: "18px", textAlign: "right" }}>
              ₹{price - discount + 40}
            </TableCell>
          </StyledTableRow>
          <StyledTableRow>
            <TableCell colSpan={2}>
              <hr
                style={{
                  borderTop: "1px dashed #878787",
                  width: "100%",
                  margin: "0",
                }}
              />
            </TableCell>
          </StyledTableRow>
          <StyledTableRow>
            <TableCell
              colSpan={2}
              style={{ color: "#388E3C", fontWeight: "600" }}
            >
              You will save {discount - 40} on this order
            </TableCell>
          </StyledTableRow>
        </TableBody>
      </StyledTable>
    </Box>
  );
};

export default TotalView;
