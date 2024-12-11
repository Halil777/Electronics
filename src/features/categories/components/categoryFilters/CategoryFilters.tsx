import { FC } from "react";
import { Stack } from "@mui/material";
import PriceFilter from "./PriceFilter";
import ColorFilter from "./ColorFilter";
import BrendFilter from "./BrendFilter";
import TypeFilter from "./TypeFilter";

const CategoryFilters: FC = () => {
  return (
    <>
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
    </>
  );
};

export default CategoryFilters;
