import { FC } from "react";
import { MenuItem, Select, Stack, Typography } from "@mui/material";
import { deliveryNavigateTitle } from "../../delivery/styles/deliveryStyle";
import { Link } from "react-router-dom";

interface CategoryHeaderProps {
  categoryTitle?: string;
}

const CategoryHeader: FC<CategoryHeaderProps> = ({ categoryTitle }) => {
  const staticCategoryTitle = categoryTitle || "Default Category Title";

  return (
    <>
      <Typography sx={deliveryNavigateTitle} mt={5}>
        <Link to="/" style={{ textDecoration: "none", color: "#777777" }}>
          Baş sahypa
        </Link>
        {" / "}
        <Typography style={{ textDecoration: "none", color: "#777777" }}>
          {staticCategoryTitle}
        </Typography>
      </Typography>
      <Stack
        my={3}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
          {staticCategoryTitle}
        </Typography>
        <Select
          displayEmpty
          defaultValue="A-Z"
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
          <MenuItem value="A-Z">A-dan Z cenli</MenuItem>
          <MenuItem value="Z-A">Z-dan A cenli</MenuItem>
          <MenuItem value="Z-A">Arzandan Gymmada</MenuItem>
          <MenuItem value="Z-A">Gymmatdan Arzana</MenuItem>
        </Select>
      </Stack>
    </>
  );
};

export default CategoryHeader;
