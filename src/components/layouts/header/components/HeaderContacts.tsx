import { FC } from "react";
import Grid from "@mui/material/Grid2";
import { Box, Typography } from "@mui/material";
import { size2_4, size4_8 } from "../utils/gridSize";
import {
  headerContactSubTitle,
  headerContactTitle,
  headerContacttitleContainer,
} from "../styles/headerStyles";

const HeaderContacts: FC = () => {
  return (
    <>
      <Box pl={3}>
        <Grid container width="100%" columnSpacing={1}>
          <Grid size={size4_8}>
            <Box sx={{ ...headerContacttitleContainer, alignItems: "start" }}>
              <Typography sx={headerContactTitle}>Iş sagady</Typography>
              <Typography sx={headerContactSubTitle}>
                Duşenbe - Anna: 09:00 - 18:00; Şenbe: 09:00 - 13:00
              </Typography>
            </Box>
          </Grid>
          <Grid size={size4_8}>
            <Box sx={{ ...headerContacttitleContainer, alignItems: "start" }}>
              <Typography sx={headerContactTitle}>Adres</Typography>
              <Typography sx={headerContactSubTitle}>
                Aşgabat, Bitarap Türkmenistan şaýoly 183
              </Typography>
            </Box>
          </Grid>
          <Grid size={size2_4}>
            <Box sx={{ ...headerContacttitleContainer, alignItems: "start" }}>
              <Typography sx={headerContactTitle}>+993 60 14 22 51</Typography>
              <Typography sx={headerContactTitle}>+993 62 56 01 31</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HeaderContacts;
