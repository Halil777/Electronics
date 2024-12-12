import { Stack, Typography, Select, MenuItem } from "@mui/material";
import { FC, useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { navLinks } from "../styles/navLinks";
import { useLocation, useNavigate } from "react-router-dom";

const NavLinks: FC = () => {
  const [category, setCategory] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setCategory(event.target.value);
    console.log("Selected Category:", event.target.value);
  };

  const isActiveLink = (path: string) => location.pathname === path;

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={2}
      alignItems="center"
    >
      {/* Select for Categories */}
      <Select
        value={category}
        onChange={handleCategoryChange}
        displayEmpty
        disableUnderline
        variant="standard"
        sx={{
          color: "#2E2F38",
          "& .MuiSelect-select": {
            display: "flex",
            alignItems: "center",
            paddingLeft: 1,
          },
          "& .MuiSvgIcon-root": {
            color: "#2E2F38", // Change the arrow icon color to white
          },
          "& .MuiSelect-root": {
            padding: 0,
          },
        }}
      >
        <MenuItem value="" disabled>
          Category
        </MenuItem>
        <MenuItem onClick={() => navigate("/categories")} value="electronics">
          Electronics
        </MenuItem>
        <MenuItem onClick={() => navigate("/categories")} value="fashion">
          Fashion
        </MenuItem>
        <MenuItem onClick={() => navigate("/categories")} value="home">
          Home
        </MenuItem>
        <MenuItem onClick={() => navigate("/categories")} value="beauty">
          Beauty
        </MenuItem>
        <MenuItem onClick={() => navigate("/categories")} value="sports">
          Sports
        </MenuItem>
      </Select>

      {/* Navigation Links */}
      <Typography
        onClick={() => navigate("/delivery")}
        sx={{
          ...navLinks,
          fontWeight: isActiveLink("/delivery") ? 700 : 400,
        }}
      >
        Eltip berme
      </Typography>
      <Typography
        onClick={() => navigate("/service")}
        sx={{
          ...navLinks,
          fontWeight: isActiveLink("/service") ? 700 : 400,
        }}
      >
        Hyzmat
      </Typography>
      <Typography
        onClick={() => navigate("/return-exchange")}
        sx={{
          ...navLinks,
          fontWeight: isActiveLink("/return-exchange") ? 700 : 400,
        }}
      >
        Çalyşmak we gaýtarmak
      </Typography>
      <Typography
        onClick={() => navigate("/how-to-order")}
        sx={{
          ...navLinks,
          fontWeight: isActiveLink("/how-to-order") ? 700 : 400,
        }}
      >
        Nädip sargyt etmeli
      </Typography>
      <Typography
        onClick={() => navigate("/auction")}
        sx={{
          ...navLinks,
          fontWeight: isActiveLink("/auction") ? 700 : 400,
        }}
      >
        Auksion
      </Typography>
    </Stack>
  );
};

export default NavLinks;
