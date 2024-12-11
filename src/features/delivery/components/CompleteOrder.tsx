import { Box, Container } from "@mui/material";
import { FC } from "react";
import CompleteTitle from "./CompleteTitle";
import DeliveryAddress from "./DeliveryAddress";
import DeliveryType from "./DeliveryType";
import PaymentOptionSelector from "./PaymentOptionSelector";

const CompleteOrder: FC = () => {
  return (
    <>
      <Container>
        <Box my={5}>
          <CompleteTitle />
          <DeliveryAddress />
          <DeliveryType />
          <PaymentOptionSelector />
        </Box>
      </Container>
    </>
  );
};

export default CompleteOrder;
