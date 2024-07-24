import { products as initialProducts } from "./mocks/products.json";
import { Products, Header, Footer, Cart } from "./components";
import { useFilters } from "./hooks";
import { IS_DEVELOPMENT } from "./config";
import { useState } from "react";

export const App = () => {
  const [products] = useState(initialProducts);

  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </>
  );
};
