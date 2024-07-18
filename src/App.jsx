import { products } from "./mocks/products.json";
import { Products } from "./components/Products";


export const App = () => {
  return (
  <Products products={products} />
)
};
