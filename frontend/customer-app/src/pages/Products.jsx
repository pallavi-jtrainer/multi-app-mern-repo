import { useEffect, useState } from "react";
import api from "../api/api";
import CustomerNavbar from "../components/CustomerNavbar";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <CustomerNavbar/>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p._id}>{p.name} - ₹{p.price}</div>
      ))}
    </div>
  );
}
