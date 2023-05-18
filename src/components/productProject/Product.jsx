import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../features/productSlice";
import { Card, Button } from "react-bootstrap";
import { addToCart } from "../../features/cartSlice";

const Product = () => {
  const dispatch = useDispatch();

  const { product, loading, error } = useSelector((state) => state.products);

  const addToCartProduct = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const cards = product.map((product) => (
    <div key={product.id} className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card className="h-100">
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
          <Button variant="primary" onClick={() => addToCartProduct(product)}>
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return <div className="row">{cards}</div>;
};

export default Product;
