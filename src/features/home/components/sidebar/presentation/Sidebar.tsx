import { FC, useState } from "react";
import SidebarLinks from "../components/SidebarLinks";
import Categories from "../../../../categories/presentation/Categories";
import { BASE_URL } from "../../../../../api/instance";

interface Filters {
  categoryId?: number;
  subcategoryId?: number;
  segmentId?: number;
  brandId?: number;
}

interface Product {
  id: number;
  name: string;
  price: number;
  // Add other relevant fields
}

const Sidebar: FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<Filters>({});
  const [filteredProducts, setFilteredProducts] = useState<Product[] | null>(
    null
  );
  const [totalProducts, setTotalProducts] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleCategorySelect = async (filters: Filters) => {
    setSelectedFilters(filters);
    await fetchFilteredProducts(filters);
  };

  const fetchFilteredProducts = async (filters: Filters) => {
    setLoading(true);
    setError(null);
    try {
      const queryParams = new URLSearchParams({
        page: "1", // Default page
        limit: "20", // Default limit
      });

      // Add filters to query parameters
      Object.keys(filters).forEach((key) => {
        if (filters[key as keyof Filters]) {
          queryParams.append(key, String(filters[key as keyof Filters]));
        }
      });

      const url = `${BASE_URL}/products/client/products?${queryParams.toString()}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setFilteredProducts(data.data);
      setTotalProducts(data.total);
    } catch (error) {
      setError("Error fetching products.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SidebarLinks
        selectedFilters={selectedFilters}
        onCategorySelect={handleCategorySelect}
      />
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: "red" }}>{error}</div>}
      {filteredProducts && (
        <Categories products={filteredProducts} totalProducts={totalProducts} />
      )}
    </>
  );
};

export default Sidebar;
