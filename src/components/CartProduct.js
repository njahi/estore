import Button from "react-bootstrap/Button";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getproductData } from "../productsStore";

function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getproductData(id);

  return (
    <>
      <h3>{productData.name}</h3>
      <p>{quantity} total</p>
      <p>${(quantity * productData.price).toFixed(2)}</p>
      <Button size="sn" onClick={() => cart.deleteFromCart(id)}>
        <hr></hr>
        Remove
      </Button>
    </>
  );
}
export default CartProduct;
