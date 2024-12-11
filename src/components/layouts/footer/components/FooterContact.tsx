import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { footerAddressText, footerLinksStyle } from "../styles/footerStyles";

const FooterContact: FC = () => {
  return (
    <>
      <Stack>
        <Box>
          <Typography sx={footerAddressText}>Salgy: </Typography>
          <Typography sx={footerLinksStyle}>
            Aşgabat, Bitarap Türkmenistan şaýoly 183
          </Typography>
        </Box>
        <Box>
          <Typography sx={footerAddressText}>Telefon: </Typography>
          <Typography sx={footerLinksStyle}>
            (+993 60) 14-22-41; (+993 62) 56-01-31
          </Typography>
        </Box>
        <Box>
          <Typography sx={footerAddressText}>E-mail: </Typography>
          <Typography sx={footerLinksStyle}>
            contact1@tehnikadunyasi.com
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default FooterContact;
