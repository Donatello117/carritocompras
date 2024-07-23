import { products as initialProducts } from "./mocks/products.json";
import { Products, Header, Footer } from "./components";
import { useState } from "react";

function useFilters() {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return { filters, filterProducts, setFilters };
}

export const App = () => {

  const [products] = useState(initialProducts);

  const { filters, filterProducts, setFilters } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />;
      <Footer filters= {filters}/>
    </>
  );
};
