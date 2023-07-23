import {
  Typography,
  Box,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import OfferText from "./OfferText";
import styled from "@emotion/styled";

const StyledTableRow = styled(TableRow)({
    verticalAlign: "baseline",
    "& > td": {
        border: "none",
        marginTop: "10px",
    }
})

const ProductDetail = ({ product }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

  const data = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);

  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography
        style={{ marginTop: "5px", color: "#878787", fontSize: "14px" }}
      >
        8 Ratings & 1 Review
        <Box component="span">
          <img
            src={fassured}
            style={{ width: "77px", marginLeft: "20px" }}
            alt="Fassure"
          />
        </Box>
      </Typography>
      <Typography>
        <span style={{ fontSize: "28px" }}>
          ₹{product.price.cost}&nbsp;&nbsp;&nbsp;
        </span>
        <span style={{ color: "#878787" }}>
          <strike>₹{product.price.mrp}</strike>&nbsp;&nbsp;&nbsp;
        </span>
        <span style={{ color: "#388E3C" }}>{product.price.discount}</span>
      </Typography>
      <Typography>Available offers</Typography>
      <Box>
        <OfferText
          title={"Bank Offer"}
          text={"Get 10% Cashback on Samsung Axis bank Credit Card"}
        />
        <OfferText
          title={"Bank Offer"}
          text={"5% Cashback on Flipkart Axis Bank Card"}
        />
        <OfferText
          title={"Bank Offer"}
          text={"₹1000 Off On HDFC Bank Credit Card Transactions"}
        />
        <OfferText
          title={"Special Offer"}
          text={"Get extra ₹3500 off (price inclusive of cashback/coupon)"}
        />
      </Box>
      <Table>
        <TableBody>
          <StyledTableRow>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: "600" }}>
              Delivered by {data.toDateString()} | ₹40
            </TableCell>
          </StyledTableRow>
          <StyledTableRow>
            <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
            <TableCell style={{ fontWeight: "600" }}>No Warranty</TableCell>
          </StyledTableRow>
          <StyledTableRow>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              <Box
                component="span"
                style={{ color: "#2874F0", fontWeight: "600" }}
              >
                Raen
              </Box>
              <Typography>GST invoice available</Typography>
              <Typography>
                View more sellers starting from {product.price.mrp}
              </Typography>
            </TableCell>
          </StyledTableRow>
          <StyledTableRow>
            <TableCell colSpan={2}><img src={adURL} style={{width: "390px"}} alt="supercoin"/></TableCell>
          </StyledTableRow>
          <StyledTableRow>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell>{product.description || "None"}</TableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetail;
