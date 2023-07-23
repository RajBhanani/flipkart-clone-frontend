import { Box } from "@mui/material";

import { imageURL } from "../../constants/data";

const MidBanner = () => {
  return (
    <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <img
        src={imageURL[Math.floor(Math.random() * 3)]}
        alt="banner"
        style={{ width: "360px" }}
      />
    </Box>
  );
};

export default MidBanner;
