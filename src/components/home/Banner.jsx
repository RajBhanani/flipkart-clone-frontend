import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { styled } from "@mui/material";

import { bannerData } from "../../constants/data";

const StyledImg = styled("img")(({ theme }) => ({
  width: "100%",
  height: "240px",
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: "180px",
  },
}));

const Banner = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      swipeable={false}
      draggable={false}
      showDots={true}
      autoPlay={true}
      infinite={true}
      autoPlaySpeed={7000}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
    >
      {bannerData.map((data) => (
        <StyledImg src={data.url} alt="banner" key={data.id} />
      ))}
    </Carousel>
  );
};

export default Banner;
