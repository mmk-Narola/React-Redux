import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { createUser, updateUser } from "../../features/crudSlice";
import { Link, useNavigate, useParams } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  age: "",
  gender: "",
};

const CrudOps = () => {
  const [user, setUser] = useState(initialState);
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { users } = useSelector((state) => state.crud);

  const userDetails = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(user));
    navigate("/crud-home");
    setUser(initialState);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    dispatch(updateUser({ id, user, navigate }));
  };

  const loadUserData = () => {
    users.map((item) => {
      if (item.id === id) {
        setUser({
          name: item.name,
          email: item.email,
          age: item.age,
          gender: item.gender,
        });
      }
    });
    setFlag(true);
  };

  useEffect(() => {
    if (id) {
      loadUserData();
    }
  }, [id]);

  return (
    <div className="d-flex justify-content-center">
      <Card className="mt-4 col-md-6">
        <Card.Header as="h5">{flag ? "Update" : "Create"} </Card.Header>
        <Card.Body>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={user.name}
                  onChange={userDetails}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={user.email}
                  onChange={userDetails}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Age
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Age"
                  name="age"
                  value={user.age}
                  onChange={userDetails}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                Gender
              </Form.Label>
              <Col sm={2}>
                <Form.Check
                  type="radio"
                  label="Male"
                  id="formHorizontalRadios1"
                  name="gender"
                  value="male"
                  checked={user && user.gender === "male"}
                  onChange={userDetails}
                />
              </Col>
              <Col sm={2}>
                <Form.Check
                  type="radio"
                  label="Female"
                  id="formHorizontalRadios1"
                  name="gender"
                  value="female"
                  checked={user && user.gender === "female"}
                  onChange={userDetails}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  label="Other"
                  id="formHorizontalRadios1"
                  name="gender"
                  value="other"
                  checked={user && user.gender === "other"}
                  onChange={userDetails}
                />
              </Col>
            </Form.Group>

            <Button
              variant="primary"
              type="Submit"
              onClick={flag ? handleUpdate : handleSubmit}
            >
              {flag ? "Update" : "Create User"}
            </Button>

            <Button variant="dark">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/crud-home"
              >
                Cancel
              </Link>
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CrudOps;
