import { Box, Typography, styled } from "@mui/material";
import { navData } from "../../constants/data";

const NavBox = styled(Box)(({ theme }) => ({
  padding: "10px 150px",
  display: "flex",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  background: "white",
  [theme.breakpoints.down("md")]: {
    padding: "10px 0px",
  },
}));

const ItemBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140px;
  text-align: center;
`;

const NavBar = () => {
  return (
    <NavBox>
      {navData.map((data) => (
        <ItemBox key={data.key}>
          <img src={data.url} alt={data.text} style={{ width: "64px" }} />
          <Typography style={{ fontSize: "14px", fontWeight: "600" }}>
            {data.text}
          </Typography>
        </ItemBox>
      ))}
    </NavBox>
  );
};

export default NavBar;
