import {
  Select,
  MenuItem,
  Typography,
  Box,
  Stack,
  FormControl,
} from "@mui/material";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SelectChangeEvent } from "@mui/material";

const SidebarLinks: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");
  const navigate = useNavigate();

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubcategoryChange = (event: SelectChangeEvent<string>) => {
    const subcategory = event.target.value;
    setSelectedSubcategory(subcategory);
    console.log(selectedSubcategory);
    navigate(`/categories`);
  };

  const categories = {
    electronics: {
      image: "./images/pic1.png",
      name: "TV we multimediýa",
      subcategories: ["Laptops", "Phones", "TVs"],
    },
    fashion: {
      image: "./images/pic1.png",
      name: "Fashion",
      subcategories: ["Shirts", "Jeans", "Shoes"],
    },
    home: {
      image: "./images/pic1.png",
      name: "Home",
      subcategories: ["Furniture", "Kitchenware", "Decor"],
    },
  };

  return (
    <>
      <Box
        sx={{
          background: "#C3000E5C",
          height: "34px",
          p: "10px",
          display: "flex",
          alignItems: "center",
          color: "#2E2F38",
        }}
      >
        <Typography>Kategoriýa</Typography>
      </Box>

      {Object.entries(categories).map(
        ([key, { image, name, subcategories }]) => (
          <Box key={key} sx={{ mb: 2 }}>
            {/* Category Select */}
            <FormControl fullWidth>
              <Select
                value={selectedCategory === name ? name : ""}
                onChange={handleCategoryChange}
                renderValue={() => (
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <img
                      src={image}
                      alt={name}
                      style={{ width: 24, height: 24 }}
                    />
                    <Typography>{name}</Typography>
                  </Stack>
                )}
                displayEmpty
                sx={{
                  border: "none",
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "& .MuiSelect-select": {
                    display: "flex",
                    alignItems: "center",
                  },
                }}
              >
                {/* Subcategories */}
                {subcategories.map((subcategory, index) => (
                  <MenuItem
                    key={index}
                    value={subcategory}
                    onClick={() =>
                      handleSubcategoryChange({
                        target: { value: subcategory },
                      } as SelectChangeEvent<string>)
                    }
                  >
                    {subcategory}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        )
      )}
    </>
  );
};

export default SidebarLinks;
