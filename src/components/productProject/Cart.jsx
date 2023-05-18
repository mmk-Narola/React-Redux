import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { removeToCart } from "../../features/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);
  console.log(cartItem);

  const removeToCartProduct = (id) => {
    console.log(id);
    dispatch(removeToCart(id));
  };

  const cards = cartItem.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card key={product.id} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
            className="mt-2"
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR:{product.price}</Card.Text>
          <Button
            variant="danger"
            onClick={() => removeToCartProduct(product.id)}
          >
            Remove
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <div>
      <h2>CartPage</h2>
      <Link to="/">Back</Link>
      <div className="row">{cards}</div>
    </div>
  );
};

export default Cart;
