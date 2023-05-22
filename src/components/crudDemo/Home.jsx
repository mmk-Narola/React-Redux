import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showUser, deleteUser } from "../../features/crudSlice.js";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Home = () => {
  const dispatch = useDispatch();
  const { users, searchData } = useSelector((state) => state.crud);
  const [radioData, setRadioData] = useState("");

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    console.log("Delete user....");
  };

  useEffect(() => {
    dispatch(showUser());
  }, []);

  return (
    <div className="mt-4 col-md-8 ms-5">
      <button>
        <Link to="/addUser">AddUser </Link>
      </button>
      <Form.Group as={Row} className="mb-3">
        <Col sm={1}>
          <Form.Check
            type="radio"
            label="All"
            name="gender"
            value="all"
            checked={radioData === ""}
            onChange={(e) => setRadioData("")}
          />
        </Col>
        <Col sm={1}>
          <Form.Check
            type="radio"
            label="Male"
            name="gender"
            value="Male"
            checked={radioData === "Male"}
            onChange={(e) => setRadioData(e.target.value)}
          />
        </Col>
        <Col sm={1}>
          <Form.Check
            type="radio"
            label="Female"
            name="gender"
            value="Female"
            checked={radioData === "Female"}
            onChange={(e) => setRadioData(e.target.value)}
          />
        </Col>
        <Col>
          <Form.Check
            type="radio"
            label="Other"
            name="gender"
            value="Other"
            checked={radioData === "Other"}
            onChange={(e) => setRadioData(e.target.value)}
          />
        </Col>
      </Form.Group>
      <Table responsive="md">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {users && users.length > 0 ? (
            users
              .filter((ele) => {
                if (searchData.length === 0) {
                  return ele;
                } else {
                  return (
                    ele.name.toLowerCase().includes(searchData.toLowerCase()) ||
                    ele.email
                      .toLowerCase()
                      .includes(searchData.toLowerCase()) ||
                    ele.age.toLowerCase().includes(searchData.toLowerCase()) ||
                    ele.gender.toLowerCase().includes(searchData.toLowerCase())
                  );
                }
              })
              .filter((ele) => {
                if (radioData === "Male") {
                  return ele.gender === radioData;
                } else if (radioData === "Female") {
                  return ele.gender === radioData;
                } else if (radioData === "Other") {
                  return ele.gender === radioData;
                } else return ele;
              })
              .map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                  <td>{item.gender}</td>
                  <td className="d-flex justy-conten-space-between">
                    <Link
                      to={`/home/edtiUser/${item.id}`}
                      className="btn btn-primary my-1"
                    >
                      <i className="bi bi-pencil-square"></i>
                    </Link>
                    <button
                      className="btn btn-danger my-1"
                      onClick={() => handleDelete(item.id)}
                    >
                      <i className="bi bi-trash-fill"></i>
                    </button>
                  </td>
                </tr>
              ))
          ) : (
            <tr>
              <td>Loading....</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
