import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import "./ProductCard.css";

function ProductCard(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);
  return (
    <Card className="product-card">
      <div className="product-img-container">
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
          className="product-img"
        />
      </div>
      <Card.Body className="product-details">
        <Card.Title className="product-title">{product.name}</Card.Title>
        <Card.Text className="product-price">${product.price}</Card.Text>
        {productQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sn="6">
                In Cart: {productQuantity}
              </Form.Label>
              <Col sn="6">
                <Button
                  sn="6"
                  onClick={() => cart.addOneToCart(product.id)}
                  className="mx-2">
                  Add
                </Button>
                <hr></hr>
                <Button
                  sn="5"
                  onClick={() => cart.removeOneFromCart(product.id)}
                  className="mx-2">
                  Remove
                </Button>
              </Col>
            </Form>
            <Button
              variant="danger"
              onClick={() => cart.deleteFromCart(product.id)}>
              Remove from Cart
            </Button>
          </>
        ) : (
          <Button
            variant="primary"
            onClick={() => cart.addOneToCart(product.id)}>
            Add To Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProductCard;
