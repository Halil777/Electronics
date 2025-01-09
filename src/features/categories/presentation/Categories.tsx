import { FC } from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
  size1_4,
  size4_1,
} from "../../../components/layouts/header/utils/gridSize";
import CategoryFilters from "../components/categoryFilters/CategoryFilters";
import CategoryHeader from "../components/CategoryHeader";
import CategoryProductsBox from "../components/categoryProducts/CategoryProductsBox";
import { useLocation } from "react-router-dom";

const Categories: FC = () => {
  const location = useLocation();
  const { category } = location.state || {};

  return (
    <>
      <Container>
        <CategoryHeader category={category} />
        <Grid container width="100%" my={5} spacing={3}>
          <Grid size={size1_4}>
            <CategoryFilters category={category} />
          </Grid>
          <Grid size={size4_1}>
            <CategoryProductsBox category={category} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Categories;
