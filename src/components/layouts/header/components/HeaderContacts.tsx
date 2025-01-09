import { FC } from "react";
// import Grid from "@mui/material/Grid2";
import { Stack, Typography } from "@mui/material";
// import { size2_4, size4_8 } from "../utils/gridSize";
import {
  headerContactSubTitle,
  headerContactTitle,
  // headerContacttitleContainer,
} from "../styles/headerStyles";
import { useTranslation } from "react-i18next";

const HeaderContacts: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* <Box pl={3}>
        <Grid container width="100%" columnSpacing={1}>
          <Grid size={size4_8}>
            <Box sx={{ ...headerContacttitleContainer, alignItems: "start" }}>
              <Typography sx={headerContactTitle}>
                {t("header.work_time")}
              </Typography>
              <Typography sx={headerContactSubTitle}>
                {t("header.work_hours")}
              </Typography>
            </Box>
          </Grid>
          <Grid size={size4_8}>
            <Box sx={{ ...headerContacttitleContainer, alignItems: "start" }}>
              <Typography sx={headerContactTitle}>
                {t("header.address_title")}
              </Typography>
              <Typography sx={headerContactSubTitle}>
                {t("header.our_address")}
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
      </Box> */}
      <Stack direction="row" justifyContent="space-between">
        <Stack>
          <Typography sx={headerContactTitle}>
            {t("header.work_time")}
          </Typography>
          <Typography sx={headerContactSubTitle}>
            {t("header.work_hours")}
          </Typography>
        </Stack>
        <Stack>
          <Typography sx={headerContactTitle}>
            {t("header.address_title")}
          </Typography>
          <Typography sx={headerContactSubTitle}>
            {t("header.our_address")}
          </Typography>
        </Stack>
        <Stack>
          <Typography sx={headerContactTitle}>+993 60 14 22 51</Typography>
          <Typography sx={headerContactTitle}>+993 62 56 01 31</Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default HeaderContacts;
