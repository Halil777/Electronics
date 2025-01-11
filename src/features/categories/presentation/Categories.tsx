import { FC, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import {
    size1_4,
    size4_1,
} from "../../../components/layouts/header/utils/gridSize";
import CategoryFilters from "../components/categoryFilters/CategoryFilters";
import CategoryHeader from "../components/CategoryHeader";
import CategoryProductsBox from "../components/categoryProducts/CategoryProductsBox";
import {observer} from "mobx-react-lite";
import { useSearchParams } from "react-router-dom";
import ProductViewModel from "../../products/presentation/ProductViewModel";

interface CategoriesProps {
}

const Categories: FC<CategoriesProps> = observer(() => {
    const [searchParams] = useSearchParams();



    useEffect(() => {
        const filters = {
            categoryId: searchParams.get("categoryId") ? Number(searchParams.get("categoryId")): undefined,
            subcategoryId: searchParams.get("subcategoryId") ? Number(searchParams.get("subcategoryId")) : undefined,
            segmentId: searchParams.get("segmentId") ? Number(searchParams.get("segmentId")) : undefined,
            brandId: searchParams.get("brandId") ? Number(searchParams.get("brandId")): undefined,

        };
        console.log(searchParams.get("categoryId") + "Category Click")
        ProductViewModel.setFilters(filters);
        ProductViewModel.fetchFilteredProducts();
    }, [searchParams]);

    const handleCategorySelect = (filters: any) => {
        ProductViewModel.setFilters(filters);
        ProductViewModel.fetchFilteredProducts();
    };

    return (
        <Container>
            <CategoryHeader
              categoryTitle= {
                 ProductViewModel.products[0]?.category?.title_en || 'Default Category Title'
              }
            />
            <Grid container width="100%" my={5} spacing={3}>
                <Grid size={size1_4}>
                    <CategoryFilters
                        selectedFilters={ProductViewModel.filters}
                        onCategorySelect={handleCategorySelect}
                    />
                </Grid>
                <Grid size={size4_1}>
                    {ProductViewModel.products && ProductViewModel.totalProducts !== null ? (
                        <CategoryProductsBox
                            products={ProductViewModel.products}
                            totalProducts={ProductViewModel.totalProducts}
                        />
                    ) : (
                        <Typography>No products found</Typography>
                    )}
                </Grid>
            </Grid>
        </Container>
    );
});

export default Categories;