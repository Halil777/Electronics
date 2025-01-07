import { FC } from "react";
import { MenuItem, Select, Stack, Typography } from "@mui/material";
import { deliveryNavigateTitle } from "../../delivery/styles/deliveryStyle";
import { Link, useLocation } from "react-router-dom";

const CategoryHeader: FC = () => {
  const location = useLocation();
  const { category } = location.state || {};

  return (
    <>
      <Typography sx={deliveryNavigateTitle} mt={5}>
        <Link to="/" style={{ textDecoration: "none", color: "#777777" }}>
          Baş sahypa
        </Link>
        {category && (
          <>
            /{" "}
            <Link
              to="/categories"
              style={{ textDecoration: "none", color: "#777777" }}
            >
              {category?.title_en}
            </Link>
          </>
        )}
      </Typography>
      <Stack
        my={3}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography sx={{ fontWeight: 600 }}>
          {category ? category?.title_en : "All Products"}
        </Typography>
        <Select
          displayEmpty
          sx={{
            width: 160,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#929292",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#929292",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#929292",
            },
            "& .MuiSelect-select": {
              padding: "8px",
            },
            "& .MuiSvgIcon-root": {
              color: "#000",
            },
          }}
        >
          <MenuItem defaultValue="A-Z">A-dan Z cenli</MenuItem>
          <MenuItem value="Z-A">Z-dan A cenli</MenuItem>
        </Select>
      </Stack>
    </>
  );
};

export default CategoryHeader;
