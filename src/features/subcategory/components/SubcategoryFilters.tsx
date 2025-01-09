import { FC } from "react";

interface SubcategoryFiltersProps {
  subcategory: any;
}

const SubcategoryFilters: FC<SubcategoryFiltersProps> = ({ subcategory }) => {
  return <div>Filters for {subcategory.title_en}</div>;
};

export default SubcategoryFilters;
