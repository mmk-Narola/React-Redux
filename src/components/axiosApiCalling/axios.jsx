import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../features/axiosSlice";
import { Card, Button } from "react-bootstrap";

const Axios = () => {
  const dispatch = useDispatch();

  const { users, loading, error } = useSelector((state) => state.axiosApiCall);

  useEffect(() => {
    dispatch(getData());
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const cards = users.map((data) => (
    <div key={data.id} className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card className="h-100">
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>{data.email}</Card.Text>
          <Card.Text>{data.gender}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <div>
      <div className="row">{error ? <h2>Data Not Found</h2> : cards}</div>
    </div>
  );
};

export default Axios;
