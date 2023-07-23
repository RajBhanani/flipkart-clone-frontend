import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Box, Grid, styled } from "@mui/material";

import { getProductDetails } from "../../redux/actions/productActions";
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";

const DetailWrapperBox = styled(Box)(({ theme }) => ({
  background: "#F2F2F2",
  marginTop: "55px",
}));

const WrapperGrid = styled(Grid)(({ theme }) => ({
  background: "white",
  display: "flex",
  justifyContent: "center"
}));

const RightContainer = styled(Grid)`
  margin-top: 50px;
  padding: 0px 30px;
`;

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product.id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, loading, product]);

  return (
    <DetailWrapperBox>
      {product && Object.keys(product).length && (
        <WrapperGrid container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <ProductDetail product={product} />
          </RightContainer>
        </WrapperGrid>
      )}
    </DetailWrapperBox>
  );
};

export default DetailView;
