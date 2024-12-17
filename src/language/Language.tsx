import { FC, useState, useEffect } from "react";
import { Box, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import i18n from "./i18n"; // Import i18n for language management

const Language: FC = () => {
  // State to hold the selected language
  const [language, setLanguage] = useState<string>(() => {
    // Get the saved language from localStorage or default to 'en'
    return localStorage.getItem("selectedLanguage") || "en";
  });

  // Handle language change
  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    const selectedLang = event.target.value;
    setLanguage(selectedLang);
    i18n.changeLanguage(selectedLang); // Change the language using i18n
    localStorage.setItem("selectedLanguage", selectedLang); // Save to localStorage
  };

  // Initialize the language on component mount
  useEffect(() => {
    i18n.changeLanguage(language); // Set i18n to the saved language on initial render
  }, [language]);

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      {/* Select for Language */}
      <Select
        value={language}
        onChange={handleLanguageChange}
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
        <MenuItem value="tm">TKM</MenuItem>
        <MenuItem value="en">ENG</MenuItem>
        <MenuItem value="ru">RUS</MenuItem>
      </Select>
    </Box>
  );
};

export default Language;
