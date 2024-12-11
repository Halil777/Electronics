import { Stack, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const HeaderLogo: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Stack onClick={() => navigate("/")}>
        <img
          src="./icons/logo.svg"
          style={{ width: "199px", height: "28px", cursor: "pointer" }}
          alt=""
        />
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "21.7px",
            width: "100%",
          }}
        >
          Электроника и бытовая техника
        </Typography>
      </Stack>
    </>
  );
};

export default HeaderLogo;
