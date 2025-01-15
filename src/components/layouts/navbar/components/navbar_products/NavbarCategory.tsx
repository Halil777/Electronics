import { FC, useEffect, useState, useRef } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useCategories } from "../../../../../hooks/category/useCategory";
import { useSegment } from "../../../../../hooks/segment/useSegment";
import { useSubcategories } from "../../../../../hooks/subcategry/useSubcategory";
import { navLinks } from "../../styles/navLinks";
import { useNavigate } from "react-router-dom";

const NavbarCategory: FC = () => {
  const { categories, isLoading, isError } = useCategories();
  const { segment: allSegments } = useSegment();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );
  const navigate = useNavigate();
  const {
    subcategories,
    isLoading: loadingSubcategories,
    isError: subcategoriesError,
  } = useSubcategories(selectedCategoryId);

  const [openCategories, setOpenCategories] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleCategories = () => setOpenCategories(!openCategories);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategoryId((prevCategoryId) =>
      prevCategoryId === categoryId ? null : categoryId
    );
  };

  const handleSegmentClick = (
    categoryId: string,
    subcategoryId: string,
    segmentId: string
  ) => {
    navigate(
      `/categories?categoryId=${categoryId}&subcategoryId=${subcategoryId}&segmentId=${segmentId}`
    );
    setOpenCategories(false); // Close the drawer
  };

  const handleBrandClick = (categoryId: string, brandId: string) => {
    navigate(`/categories?categoryId=${categoryId}&brandId=${brandId}`);
    setOpenCategories(false); // Close the drawer
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenCategories(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (isLoading || loadingSubcategories)
    return <Typography>Loading...</Typography>;
  if (isError || subcategoriesError)
    return <Typography>Error fetching categories</Typography>;

  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ cursor: "pointer" }}
        onClick={toggleCategories}
      >
        <Typography sx={navLinks}>Kategoriýa</Typography>
        <img
          src="/icons/category header icon.svg"
          alt="navbar icon"
          style={{ transform: openCategories ? "rotate(180deg)" : "rotate(0)" }}
        />
      </Stack>

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
            mt: 2,
          }}
          ref={dropdownRef}
        >
          <Grid container spacing={3}>
            <Grid size={{ lg: 3, md: 3, sm: 12, xs: 12 }}>
              <Stack spacing={2}>
                {categories.map((category: any) => (
                  <Stack key={category?.id} direction={"row"} spacing={1}>
                    {category?.imageUrl ? (
                      <img
                        src={category?.imageUrl}
                        alt={category?.title_tm}
                        style={{ width: "40px", height: "30px" }}
                      />
                    ) : (
                      <span>No Image</span>
                    )}
                    <Typography
                      onClick={() =>
                        handleBrandClick(category?.id, category?.brand_id)
                      }
                      onMouseEnter={() => handleCategoryClick(category?.id)}
                      sx={{
                        cursor: "pointer",
                        fontWeight:
                          selectedCategoryId === category?.id
                            ? "bold"
                            : "normal",
                        color:
                          selectedCategoryId === category.id ? "red" : "black",
                      }}
                    >
                      {category?.title_tm}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>

            <Grid size={{ lg: 9, md: 9 }}>
              <Grid container spacing={2}>
                {subcategories.length > 0 ? (
                  subcategories.map((sub: any) => {
                    const filteredSegments = allSegments
                      ? allSegments.filter(
                          (seg: any) => seg?.subcategory_id === sub?.id
                        )
                      : [];
                    return (
                      <Grid key={sub.id} size={{ lg: 3, md: 3, sm: 6, xs: 12 }}>
                        <Stack mb={2} direction={"row"} spacing={1}>
                          <Typography
                            sx={{
                              cursor: "pointer",
                              fontSize: "14px",
                              fontWeight: "600",
                            }}
                          >
                            {sub?.title_tm}
                          </Typography>
                        </Stack>

                        {filteredSegments.length > 0
                          ? filteredSegments.map((seg: any) => (
                              <Typography
                                onClick={() =>
                                  handleSegmentClick(
                                    selectedCategoryId as string,
                                    sub?.id,
                                    seg?.id
                                  )
                                }
                                key={seg?.id}
                                sx={{
                                  cursor: "pointer",
                                  mb: 1,
                                  paddingLeft: "5px",
                                  fontSize: "14px",
                                }}
                              >
                                {seg?.title_tm}
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
// :when opening paper background don't scroll
