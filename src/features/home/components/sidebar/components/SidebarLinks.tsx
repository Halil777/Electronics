import { Box, Paper, Stack, Typography, Collapse } from "@mui/material";
import { FC, useState } from "react";
import { sideLinkBox, sidelinkImageBox } from "./sidelinksStyle";
import { useCategories } from "../../../../../hooks/category/useCategory";
import { useSubcategories } from "../../../../../hooks/subcategry/useSubcategory";
import { useNavigate } from "react-router-dom";

const SidebarLinks: FC = () => {
  const { categories, isLoading: isCategoriesLoading } = useCategories();
  const { subcategories, isLoading: isSubcategoriesLoading } =
    useSubcategories();

  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleCategoryMouseEnter = (categoryId: number) => {
    setExpandedCategory(categoryId);
  };

  // const handleCategoryMouseLeave = () => {
  //   setExpandedCategory(null);
  // };

  const handleCategoryClick = (category: any) => {
    navigate(`/categories`, { state: { category } });
  };

  if (isCategoriesLoading)
    return <Typography>Loading categories...</Typography>;
  if (!categories) return <Typography>No categories found</Typography>;

  return (
    <>
      <Paper elevation={2} sx={sideLinkBox}>
        <Typography sx={{ fontWeight: 700 }}>Kategoriýa</Typography>
      </Paper>
      <Box
        sx={{
          height: "50vh",
          overflowY: "auto",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {categories.map((category: any) => (
          <div key={category.id}>
            <Stack
              direction="row"
              justifyContent={"space-between"}
              alignItems={"center"}
              width="100%"
              sx={{
                cursor: "pointer",
                mb: 2,
                padding: "8px",
                backgroundColor:
                  expandedCategory === category.id ? "#f5f5f5" : "transparent",
                borderRadius: "4px",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={() => handleCategoryMouseEnter(category.id)}
              // onMouseLeave={handleCategoryMouseLeave}
              onClick={() => handleCategoryClick(category)}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box sx={sidelinkImageBox}>
                  <img
                    src={category.imageUrl || "./images/banner1.png"}
                    alt={category.title_en}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Typography>{category.title_en}</Typography>
              </Stack>
              <img
                src="./icons/arrow.svg"
                alt="arrow"
                style={{
                  transform:
                    expandedCategory === category.id
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </Stack>
            <Collapse
              in={expandedCategory === category.id}
              timeout="auto"
              unmountOnExit
            >
              <Stack spacing={1} mt={1} pl={2}>
                {isSubcategoriesLoading ? (
                  <Typography>Loading subcategories...</Typography>
                ) : (
                  subcategories
                    ?.filter((sub: any) => sub.category_id === category.id)
                    .map((sub: any) => (
                      <Stack
                        key={sub.id}
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        sx={{
                          padding: "6px",
                          borderRadius: "4px",
                          backgroundColor: "#e0f7fa",
                          transition: "background-color 0.3s ease",
                          "&:hover": {
                            backgroundColor: "#b2ebf2",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            ...sidelinkImageBox,
                            width: 30,
                            height: 30,
                          }}
                        >
                          <img
                            src={sub.imageUrl || "./images/banner1.png"}
                            alt={sub.title_en}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                          />
                        </Box>
                        <Typography>{sub.title_en}</Typography>
                      </Stack>
                    ))
                )}
              </Stack>
            </Collapse>
          </div>
        ))}
      </Box>
    </>
  );
};

export default SidebarLinks;
