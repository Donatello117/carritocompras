import React from "react";
import "./Products.css";
import { AddToCartIcon } from "./icon";

export function Products({ products }) {
  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map(product => {
          const productoImagenUrl = `/src/assets/Productos/${product.title.replace(/ /g, '-')}.jpg`;
          return (
            <li key={product.id}>
              <img src={productoImagenUrl} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button>
                  <AddToCartIcon />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
