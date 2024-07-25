import { products as initialProducts } from "./mocks/products.json";
import { Products, Header, Footer, Cart } from "./components";
import { useFilters } from "./hooks";
import { IS_DEVELOPMENT } from "./config";
import { CartProvider } from "./context";

export const App = () => {
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  );
};
