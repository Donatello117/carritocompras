import { products as initialProducts } from "./mocks/products.json";
import { Products, Header } from "./components";
import { useState } from "react";

export const App = () => {
  const [products] = useState(initialProducts);

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

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header changeFilters={setFilters}/>
      <Products products={filteredProducts} />;
    </>
  );
};
