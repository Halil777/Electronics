import { FC, useState, useEffect } from "react";
import SidebarLinks from "../components/SidebarLinks";
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
  // Add other relevant fields as needed
}

const Sidebar: FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<Filters>({});
  const [filteredProducts, setFilteredProducts] = useState<Product[] | null>(
    null
  );
  const [totalProducts, setTotalProducts] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch filtered products when filters change
    if (Object.keys(selectedFilters).length > 0) {
      fetchFilteredProducts(selectedFilters);
    }
  }, [selectedFilters]);

  const handleCategorySelect = async (filters: Filters) => {
    setSelectedFilters(filters); // This will trigger the effect to fetch products
  };

  const fetchFilteredProducts = async (filters: Filters) => {
    setLoading(true);
    setError(null);
    try {
      const queryParams = new URLSearchParams({
        page: "1", // Default page
        limit: "20", // Default limit
      });

      if (filters.categoryId)
        queryParams.append("categoryId", String(filters.categoryId));
      if (filters.subcategoryId)
        queryParams.append("subcategoryId", String(filters.subcategoryId));
      if (filters.segmentId)
        queryParams.append("segmentId", String(filters.segmentId));
      if (filters.brandId)
        queryParams.append("brandId", String(filters.brandId));

      const url = `${BASE_URL}/products/client/products?${queryParams.toString()}`;
      console.log("Request URL:", url); // Log URL to check if categoryId is passed
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Fetched data:", data); // Log the fetched data

      setFilteredProducts(data.data);
      setTotalProducts(data.total);
    } catch (err) {
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
      {loading && <div>Loading products...</div>}
      {error && <div style={{ color: "red" }}>{error}</div>}
    </>
  );
};

export default Sidebar;
