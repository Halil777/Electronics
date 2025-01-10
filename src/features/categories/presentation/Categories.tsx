import { FC } from "react";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  size1_4,
  size4_1,
} from "../../../components/layouts/header/utils/gridSize";
import CategoryFilters from "../components/categoryFilters/CategoryFilters";
import CategoryHeader from "../components/CategoryHeader";
import CategoryProductsBox from "../components/categoryProducts/CategoryProductsBox";

interface CategoriesProps {
  products: any[] | null;
  totalProducts: number | null;
}

const Categories: FC<CategoriesProps> = ({ products, totalProducts }) => {
  return (
    <Container>
      <CategoryHeader />
      <Grid container width="100%" my={5} spacing={3}>
        <Grid size={size1_4}>
          <CategoryFilters />
        </Grid>
        <Grid size={size4_1}>
          {products && totalProducts !== null ? (
            <CategoryProductsBox
              products={products}
              totalProducts={totalProducts} // Pass the totalProducts prop
            />
          ) : (
            <Typography>No products found</Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Categories;
