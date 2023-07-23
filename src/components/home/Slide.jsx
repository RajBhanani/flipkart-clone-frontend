import { Box, Typography, styled } from "@mui/material";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Link } from "react-router-dom";

const WrapperBox = styled(Box)(({ theme }) => ({
  margin: "30px 0px",
  display: "flex",
  flexDirection: "row",
  padding: "3px",
  height: "300px",
  backgroundColor: "white",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const TopBox = styled(Box)(({ theme }) => ({
  display: "none",
  padding: "10px",
  backgroundColor: "#2748F0",
  color: "white",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));

const SideBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background:
    "white url(https://images.unsplash.com/photo-1630609083938-3acb39a06392?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80) bottom/100% 40% no-repeat",
  gap: "20px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const AdImage = styled("img")(({ theme }) => ({
  height: "300px",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

const ProductBox = styled(Box)`
  background: white;
  text-align: center;
`;

const ProductImage = styled("img")`
  width: auto;
  height: 150px;
`;

const Slide = ({ products, title, toggleAd = false }) => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <WrapperBox>
      <TopBox>
        <Typography variant="h5">{title}</Typography>
        
      </TopBox>
      <SideBox style={{ width: toggleAd ? "16%" : "13%" }}>
        <Typography variant="h5">{title}</Typography>
        
      </SideBox>
      <Box style={{ width: toggleAd ? "74%" : "87%", margin: "auto" }}>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={true}
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
        >
          {products.map((product) => (
            <Link
              to={`product/${product.id}`}
              key={product.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ProductBox>
                <ProductImage src={product.url} alt="product" />
                <Typography fontWeight={"bold"}>
                  {product.title.shortTitle}
                </Typography>
                <Typography color={"green"}>{product.discount}</Typography>
                <Typography style={{ opacity: 0.6, fontSize: 14 }}>
                  {product.tagline}
                </Typography>
              </ProductBox>
            </Link>
          ))}
        </Carousel>
      </Box>
      {toggleAd && (
        <Box>
          <AdImage src={adURL} alt="ad" style={{ height: "300px" }} />
        </Box>
      )}
    </WrapperBox>
  );
};

export default Slide;
