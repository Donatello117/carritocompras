import { useCart, useFilters } from "../hooks";
import "./Footer.css";

export function Footer() {
  const { filters } = useFilters();
  const { cart } = useCart();

  return (
    <footer className="footer">
      {JSON.stringify(filters, null, 2)}

      {/*<h4>
        Prueba tecnica de Reaact + -<span>@Doni</span>
      </h4>
      <h5>Shopping Cart con useContext & useReducer</h5>*/}
    </footer>
  );
}
