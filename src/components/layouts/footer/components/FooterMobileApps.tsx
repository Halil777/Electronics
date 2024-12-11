import { FC } from "react";
import { Stack } from "@mui/material";

const FooterMobileApps: FC = () => {
  return (
    <Stack spacing={2}>
      <img
        style={{
          width: "166px",
          height: "48px",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out", // Smooth transition
        }}
        src="./icons/appstore.svg"
        alt="appstore picture"
        className="appstore-img"
      />
      <img
        style={{
          width: "166px",
          height: "48px",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out", // Smooth transition
        }}
        src="./icons/googleplay.svg"
        alt="googleplay.svg"
        className="googleplay-img"
      />
    </Stack>
  );
};

export default FooterMobileApps;
