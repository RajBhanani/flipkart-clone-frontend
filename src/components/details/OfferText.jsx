import { Box, Typography } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const OfferText = ({ title, text }) => {
  return (
    <Box style={{display: "flex", gap: "5px"}}>
      <LocalOfferIcon fontSize="small" style={{marginRight: "5px", color: "#00CC00"}}/>
      <Typography fontWeight={600} fontSize={15}>
        {title}
      </Typography>
      <Typography fontSize={15}>{text}</Typography>
      <Typography color={"blue"}>T&C</Typography>
    </Box>
  );
};

export default OfferText;
