import { FC } from "react";
import { MenuItem, Select, Stack, Typography } from "@mui/material";
import { deliveryNavigateTitle } from "../../delivery/styles/deliveryStyle";

const CategoryHeader: FC = () => {
  return (
    <>
      <Typography sx={deliveryNavigateTitle} mt={5}>
        Baş sahypa / Öý tehnikalary / Guradyjy we kir ýuwujy maşynlar
      </Typography>
      <Stack
        my={3}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography sx={{ fontWeight: 600 }}>
          Guradyjy we kir ýuwujy maşynlar
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
