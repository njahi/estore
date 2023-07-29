import { Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3005/api/product/:id");
      if (!response.ok) {
        throw new Error("Error fetching products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 align="center" className="p-3">
        Welcome to the store
      </h1>
      <Row xs={1} md={3} className="g-4">
        {products.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCard key={product.id} product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ProductList;
