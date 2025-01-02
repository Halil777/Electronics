import { FC, useEffect, useState } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Grid from "@mui/material/Grid2";
import { useCategories } from "../hooks/useCategory";
import { useSubcategories } from "../hooks/useSubcategory";
import { useSegment } from "../hooks/useSegment";

const NavbarCategory: FC = () => {
  const { categories, isLoading, isError } = useCategories();
  const { segment: allSegments } = useSegment();
  const { subcategories: allSubcategories, isError: subcategoriesError } =
    useSubcategories();

  const [openCategories, setOpenCategories] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );

  const [filteredSubcategories, setFilteredSubcategories] = useState<any[]>([]);

  const toggleCategories = () => setOpenCategories(!openCategories);

  const subcategories = subcategoriesError ? [] : allSubcategories || [];
  useEffect(() => {
    if (subcategories && selectedCategoryId) {
      setFilteredSubcategories(
        subcategories.filter(
          (sub: any) => sub.category_id === selectedCategoryId
        )
      );
    } else {
      setFilteredSubcategories([]);
    }
  }, [selectedCategoryId, subcategories]);

  const handleCategoryClick = (categoryId: string) => {
    if (selectedCategoryId === categoryId) {
      setSelectedCategoryId(null);
    } else {
      setSelectedCategoryId(categoryId);
    }
  };

  if (isLoading) return <Typography>Loading...</Typography>;
  if (isError) return <Typography>Error fetching categories</Typography>;

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
            <Grid size={{ lg: 3, md: 3, sm: 12, xs: 12 }}>
              <Stack spacing={2}>
                {categories.map((category: any) => (
                  <Stack key={category.id} direction={"row"} spacing={1}>
                    {category.imageUrl ? (
                      <img
                        src={category.imageUrl}
                        alt={category.title_tm}
                        style={{ width: "40px", height: "30px" }}
                      />
                    ) : (
                      <span className="text-sm text-gray-500">No Image</span>
                    )}
                    <Typography
                      onMouseEnter={() => handleCategoryClick(category.id)}
                      sx={{
                        cursor: "pointer",
                        fontWeight:
                          selectedCategoryId === category.id
                            ? "bold"
                            : "normal",
                        color:
                          selectedCategoryId === category.id ? "red" : "black",
                      }}
                    >
                      {category.title_tm}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>

            {/* Subcategories */}
            <Grid size={{ lg: 9, md: 9 }}>
              <Grid container spacing={2}>
                {filteredSubcategories.length > 0 ? (
                  filteredSubcategories.map((sub: any) => {
                    const filteredSegments = allSegments
                      ? allSegments.filter(
                          (seg: any) => seg.subcategory_id === sub.id
                        )
                      : [];
                    return (
                      <Grid key={sub.id} size={{ lg: 3, md: 3, sm: 6, xs: 12 }}>
                        <Stack mb={2} direction={"row"} spacing={1}>
                          {sub.imageUrl ? (
                            <img
                              src={sub.imageUrl}
                              alt={sub.title_tm}
                              style={{ width: "40px", height: "30px" }}
                            />
                          ) : (
                            <span className="text-sm text-gray-500">
                              No Image
                            </span>
                          )}
                          <Typography
                            sx={{
                              cursor: "pointer",
                              fontWeight: "bold",
                            }}
                          >
                            {sub.title_tm}
                          </Typography>
                        </Stack>

                        {filteredSegments.length > 0
                          ? filteredSegments.map((seg: any) => (
                              <Typography
                                key={seg.id}
                                sx={{
                                  cursor: "pointer",
                                  mb: 1,
                                  paddingLeft: "5px",
                                }}
                              >
                                {seg.title_tm}
                              </Typography>
                            ))
                          : null}
                      </Grid>
                    );
                  })
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
