import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productActions.js";

import { Link } from "react-router-dom";

const SearchBox = styled(Box)(({ theme }) => ({
  background: "#ffffff",
  width: "38%",
  borderRadius: "2px",
  marginLeft: "10px",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    width: "80%"
  }
}));

const SearchInputBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`;

const ListWrapper = styled(List)({
  position: "absolute",
  background: "white",
  color: "black",
  marginTop: "33px",
});

const Search = () => {
  const [text, setText] = useState("");

  const { products } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <SearchBox>
      <SearchInputBase
        placeholder="Search for products, brands, and more"
        onChange={(e) => setText(e.target.value)}
        onClick={(e) => setText(e.target.value)}
      />
      <Box style={{ color: "#2874F0", margin: "auto 5px" }}>
        <SearchIcon />
      </Box>
      {text && (
        <ListWrapper>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                  onClick={() => {
                    setText("");
                  }}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))}
        </ListWrapper>
      )}
    </SearchBox>
  );
};

export default Search;
