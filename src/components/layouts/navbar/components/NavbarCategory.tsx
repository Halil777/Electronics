import { FC, useEffect, useState } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Grid from "@mui/material/Grid2";
import axios from "axios";

interface Category {
  id: string;
  nameRu: string;
}

interface Subcategory {
  id: string;
  nameRu: string;
  categoryId: string;
}

const NavbarCategory: FC = () => {
  const [openCategories, setOpenCategories] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [currentSubcategories, setCurrentSubcategories] = useState<
    Subcategory[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Toggle categories dropdown
  const toggleCategories = () => setOpenCategories(!openCategories);

  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          "http://localhost:8654/categories/fetch/all"
        );
        setCategories(data.categories || []);
      } catch (err: any) {
        setError("Failed to load categories");
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  // Fetch subcategories for a given category ID
  const fetchSubcategories = async (categoryId: string) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `http://localhost:8654/subcategories/fetch/all?categoryId=${categoryId}`
      );
      const filteredSubcategories = data.subCategories || [];
      setSubcategories(filteredSubcategories);
      setCurrentSubcategories(filteredSubcategories); // Store current subcategories
    } catch (err: any) {
      setError("Failed to load subcategories");
    } finally {
      setLoading(false);
    }
  };

  // Handle category selection
  const handleCategoryClick = async (categoryId: string) => {
    if (categoryId === selectedCategoryId) {
      setSelectedCategoryId(null);
      setSubcategories([]);
      setCurrentSubcategories([]);
      return;
    }

    setSelectedCategoryId(categoryId);
    await fetchSubcategories(categoryId);
  };

  // Render loading state
  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>{error}</Typography>;

  const subcategoriesToRender = selectedCategoryId ? currentSubcategories : [];
  return (
    <Box>
      {/* Dropdown toggle */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ cursor: "pointer" }}
        onClick={toggleCategories}
      >
        <Typography>Categories</Typography>
        <KeyboardArrowDownIcon
          sx={{ transform: openCategories ? "rotate(180deg)" : "rotate(0)" }}
        />
      </Stack>

      {/* Categories dropdown */}
      {openCategories && (
        <Paper
          elevation={3}
          sx={{
            width: "90%",
            position: "fixed",
            top: "50px",
            left: "5%",
            zIndex: 1000,
            p: 2,
          }}
        >
          <Grid container spacing={3}>
            {/* Categories */}
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <Stack spacing={2}>
                {categories.map((category) => (
                  <Typography
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                    sx={{
                      cursor: "pointer",
                      fontWeight:
                        selectedCategoryId === category.id ? "bold" : "normal",
                      color:
                        selectedCategoryId === category.id ? "red" : "black",
                    }}
                  >
                    {category.nameRu}
                  </Typography>
                ))}
              </Stack>
            </Grid>

            {/* Subcategories */}
            <Grid item lg={9} md={9} sm={12} xs={12}>
              <Grid container spacing={2}>
                {subcategoriesToRender?.length > 0 ? (
                  subcategoriesToRender.map((sub) => (
                    <Grid item key={sub.id} lg={3} md={3} sm={6} xs={12}>
                      <Typography>{sub.nameRu}</Typography>
                    </Grid>
                  ))
                ) : selectedCategoryId ? (
                  <Typography>No subcategories available</Typography>
                ) : null}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      )}
    </Box>
  );
};

export default NavbarCategory;
