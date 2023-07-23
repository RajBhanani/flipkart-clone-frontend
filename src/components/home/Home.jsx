import { useEffect } from "react";
import { Box, styled } from "@mui/material";
import { getProducts } from "../../redux/actions/productActions.js";
import { useDispatch, useSelector } from "react-redux";

import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidBanner from "./MidBanner";

const HomeBox = styled(Box)`
  padding: 10px;
  background-color: #f2f2f2;
`;

const Home = () => {
  const { products } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <HomeBox>
        <Banner />
        <Slide products={products} title={"Top Offers"} toggleAd={true}/>
        <MidBanner/>
        <Slide products={products} title={"Bestsellers"}/>
        <Slide products={products} title={"End of Season"} toggleAd={true}/>
        <MidBanner/>
        <Slide products={products} title={"Electronics"}/>
        <Slide products={products} title={"Fashion"} toggleAd={true}/>
        <Slide products={products} title={"Footwear"}/>
        <Slide products={products} title={"Sports Utilities"} toggleAd={true}/>
        <Slide products={products} title={"Home Essentials"}/>
        <MidBanner/>
        <Slide products={products} title={"Mobile Phones"} toggleAd={true}/>
        <Slide products={products} title={"Laptops"}/>
      </HomeBox>
    </>
  );
};

export default Home;
