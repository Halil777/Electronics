import { FC } from "react";
import { Box, Container, Typography, Link } from "@mui/material";
import useSWR, { BareFetcher } from "swr";
import {
  deliveryDescriptionText,
  deliveryNavigateTitle,
  deliveryTitle,
  deliveryUnderlineTSyle,
} from "../styles/deliveryStyle";
import { BASE_URL } from "../../../api/instance";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom"; // Importing RouterLink for navigation

const fetcher: BareFetcher<any> = (url: string) =>
  fetch(url).then((res) => res.json());

const DeliveryService: FC = () => {
  const { t, i18n } = useTranslation();
  const { data, error, isLoading } = useSWR(
    `${BASE_URL}delivery-rule`,
    fetcher
  );

  const titleKey = `title_${i18n.language}`;
  const descriptionKey = `desc_${i18n.language}`;

  if (isLoading) {
    return <Typography sx={deliveryDescriptionText}>{t("loading")}</Typography>;
  }

  if (error) {
    return <Typography sx={deliveryDescriptionText}>{t("error")}</Typography>;
  }

  if (!data || !data[0]) {
    return <Typography sx={deliveryDescriptionText}>{t("noData")}</Typography>;
  }

  const rule = data[0];

  return (
    <Container>
      <Typography sx={deliveryNavigateTitle}>
        <Link
          component={RouterLink}
          to="/"
          sx={{ textDecoration: "none", color: "inherit" }}
        >
          Baş sahypa
        </Link>{" "}
        /{" "}
        <Link
          component={RouterLink}
          to="/delivery"
          sx={{ textDecoration: "none", color: "inherit" }}
        >
          Eltip berme
        </Link>
      </Typography>
      <Box>
        <Typography sx={deliveryTitle}>
          {rule[titleKey] || rule.title_en || "Default Title"}
        </Typography>
        <Box sx={deliveryUnderlineTSyle}></Box>
      </Box>
      <Typography
        sx={deliveryDescriptionText}
        dangerouslySetInnerHTML={{
          __html: rule[descriptionKey] || rule.desc_en || "",
        }}
      />
    </Container>
  );
};

export default DeliveryService;
