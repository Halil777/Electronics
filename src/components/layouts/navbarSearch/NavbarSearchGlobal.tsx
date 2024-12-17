import { FC, useState } from "react";
import { TextField, InputAdornment, Stack } from "@mui/material";

const NavbarSearchGlobal: FC<{ onClose: () => void }> = ({ onClose }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={2}
      style={{ width: "25%" }}
    >
      <TextField
        fullWidth
        placeholder="Search..."
        variant="outlined"
        size="small"
        value={searchValue}
        onChange={handleInputChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src="./icons/search.svg" alt="search" />
            </InputAdornment>
          ),
          endAdornment: searchValue && (
            <InputAdornment position="end">
              <img
                src="./icons/close.svg"
                alt="close"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setSearchValue("");
                  onClose();
                }}
              />
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};

export default NavbarSearchGlobal;
