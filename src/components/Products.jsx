import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./icon";
import { useCart } from "../hooks";

export function Products({ products }) {
  const { addToCart, removeFromCart, cart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => {
          //funcion para traer las imagenes
          const productoImagenUrl = `/src/assets/Productos/${product.title.replace(
            / /g,
            "-"
          )}.jpg`;

          const isProductInCart = checkProductInCart(product);

          return (
            <li key={product.id}>
              <img src={productoImagenUrl} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  style={{ backgroundColor: isProductInCart ? "red" : "#09f" }}
                  onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product);
                  }}
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
