import { Typography } from "@mui/material";
import { FC } from "react";
import { footerLinks } from "../data/footerLinks";
import { footerLinksStyle } from "../styles/footerStyles";
import { useNavigate } from "react-router-dom";

const FooterLinks: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      {footerLinks.map((item) => (
        <Typography
          key={item.title}
          onClick={() => navigate(item.path)}
          sx={footerLinksStyle}
        >
          {item.title}
        </Typography>
      ))}
    </>
  );
};

export default FooterLinks;
