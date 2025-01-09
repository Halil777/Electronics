import { FC } from "react";
import { Stack } from "@mui/material";
import PriceFilter from "./PriceFilter";
import ColorFilter from "./ColorFilter";
import BrendFilter from "./BrendFilter";
import TypeFilter from "./TypeFilter";

interface CategoryFiltersProps {
  category: any; // Replace `any` with the specific type if needed
}

const CategoryFilters: FC<CategoryFiltersProps> = ({ category }) => {
  // Make sure category is valid before accessing its properties
  if (!category) {
    console.log("Category is undefined or null");
    return null; // Or return a fallback UI
  }

  console.log(category.length); // If category is an array, this is fine
  // Otherwise, replace with something like console.log(category.title_en) if category is an object

  return (
    <Stack spacing={6}>
      <Stack spacing={2}>
        <PriceFilter />
      </Stack>
      <Stack spacing={2}>
        <ColorFilter />
      </Stack>
      <Stack spacing={2}>
        <BrendFilter />
      </Stack>
      <Stack spacing={2}>
        <TypeFilter />
      </Stack>
    </Stack>
  );
};

export default CategoryFilters;
