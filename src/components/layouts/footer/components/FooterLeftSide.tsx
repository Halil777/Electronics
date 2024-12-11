import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { footersubLogo } from "../styles/footerStyles";

const FooterLeftSide: FC = () => {
  return (
    <>
      <Stack spacing={2}>
        <img
          style={{ width: "80%" }}
          src="./icons/footerLogo.svg"
          alt="footer logo"
        />
        <Typography sx={footersubLogo}>
          Электроника и бытовая техника
        </Typography>
      </Stack>
    </>
  );
};

export default FooterLeftSide;
