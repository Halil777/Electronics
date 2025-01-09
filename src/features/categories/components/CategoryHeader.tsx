import { FC } from "react";
import { MenuItem, Select, Stack, Typography } from "@mui/material";
import { deliveryNavigateTitle } from "../../delivery/styles/deliveryStyle";
import { Link } from "react-router-dom";

interface CategoryProps {
  category: {
    // You can define a more specific type for category if needed
    id: number;
    title_en: string;
  };
}

const CategoryHeader: FC<CategoryProps> = ({ category }) => {
  return (
    <>
      {/* Breadcrumb Navigation */}
      <Typography sx={deliveryNavigateTitle} mt={5}>
        <Link to="/" style={{ textDecoration: "none", color: "#777777" }}>
          Baş sahypa
        </Link>
        {category && (
          <>
            {" / "}
            <Link
              to={`/categories/${category.id}`}
              state={{ category }}
              style={{ textDecoration: "none", color: "#777777" }}
            >
              {category.title_en}
            </Link>
          </>
        )}
      </Typography>

      {/* Header and Sort Option */}
      <Stack
        my={3}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Title */}
        <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
          {category?.title_en || "All Products"}
        </Typography>

        {/* Sort Dropdown */}
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
