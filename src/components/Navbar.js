/* eslint-disable no-unused-vars */
import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function NavbarComponent() {
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleclose = () => setShow(false);
  const handleshow = () => setShow(true);

  const Checkout = async () => {
    await fetch("http://localhost:4000/checkout", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart.items }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (response.url) {
          window.location.assign(response.url);
        }
      });
  };

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Eccomerce store</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleshow}>Cart {productsCount} Items</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleclose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Items in your Cart</p>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct
                  key={idx}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}></CartProduct>
              ))}
              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

              <PayPalScriptProvider
                options={{
                  clientId:
                    "AVVjqnKeHQSUwXkKUcFSlpDI1o6NVFCMv9z0ophWxXLv2ATyTnU6IjiAHZrPTiZ7fR8010AJoiqrYOHC",
                  currency: "USD",
                }}>
                <PayPalButtons style={{ layout: "horizontal" }} />
              </PayPalScriptProvider>
            </>
          ) : (
            <h1>There are no items in your Cart </h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
export default NavbarComponent;
