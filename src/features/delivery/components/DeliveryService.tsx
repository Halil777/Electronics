import { FC } from "react";
import { Box, Container, Typography } from "@mui/material";
import useSWR, { BareFetcher } from "swr";
import {
  deliveryDescriptionText,
  deliveryNavigateTitle,
  deliveryTitle,
  deliveryUnderlineTSyle,
} from "../styles/deliveryStyle";
import { BASE_URL } from "../../../api/instance";
import { useTranslation } from "react-i18next";

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
    return (
      <Typography sx={deliveryDescriptionText}>
        Loading delivery rules...
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography sx={deliveryDescriptionText}>
        Error loading delivery rules.
      </Typography>
    );
  }

  if (!data || !data[0]) {
    return (
      <Typography sx={deliveryDescriptionText}>
        No delivery rule data available.
      </Typography>
    );
  }

  const rule = data[0];

  return (
    <>
      <Container>
        <Typography sx={deliveryNavigateTitle}>
          Baş sahypa / Eltip berme
        </Typography>
        <Box>
          <Typography sx={deliveryTitle}>
            {rule[titleKey] || "Default Title"}
          </Typography>
          <Box sx={deliveryUnderlineTSyle}></Box>
        </Box>
        <Typography
          sx={deliveryDescriptionText}
          dangerouslySetInnerHTML={{ __html: rule[descriptionKey] || "" }}
        />
      </Container>
    </>
  );
};

export default DeliveryService;
