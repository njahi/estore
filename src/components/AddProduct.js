import React, { useState } from "react";

function AddProduct() {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      name: name,
      imageUrl,
      price: price,
    };

    fetch("https://localhost:3005/api/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Product added:", data);
        // Reset the form fields after successful product addition
        setName("");
        setImageUrl("");
        setPrice("");
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Product Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;
