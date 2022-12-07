import React from "react";
import { Row, Form, Col, Button } from "react-bootstrap";

class AddUser extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = {
      //userId: '',
      firstName: "",
      lastName: "",
      emailId: "",
      mobileNo: "",
      address: "",
      pinCode: "",
    };

    if (props.user.userId) {
      this.state = props.user;
    } else {
      this.state = this.initialState;
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.setState(this.initialState);
  }
  render() {
    let pageTitle;
    let actionStatus;
    if (this.state.userId) {
      pageTitle = <h2>Edit User</h2>;
      actionStatus = <b>Update</b>;
    } else {
      pageTitle = <h2>Add User</h2>;
      actionStatus = <b>Save</b>;
    }

    return (
      <div>
        <h2> {pageTitle}</h2>
        <Row>
          <Col sm={7}>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  data-testid="firstname"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  placeholder="First Name"
                />
              </Form.Group>
              <Form.Group controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  data-testid="lastname"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  placeholder="Last Name"
                />
              </Form.Group>
              <Form.Group controlId="emailId">
                <Form.Label>EmailId</Form.Label>
                <Form.Control
                  type="text"
                  name="emailId"
                  data-testid="emailid"
                  value={this.state.emailId}
                  onChange={this.handleChange}
                  placeholder="EmailId"
                />
              </Form.Group>
              <Form.Group controlId="mobileNo">
                <Form.Label>MobileNo</Form.Label>
                <Form.Control
                  type="text"
                  name="mobileNo"
                  data-testid="mobile"
                  value={this.state.mobileNo}
                  onChange={this.handleChange}
                  placeholder="MobileNo"
                />
              </Form.Group>
              <Form.Group controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  data-testid="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                  placeholder="Address"
                />
              </Form.Group>

              <Form.Group controlId="pinCode">
                <Form.Label>PinCode</Form.Label>
                <Form.Control
                  type="text"
                  name="pinCode"
                  data-testid="pincode"
                  value={this.state.pinCode}
                  onChange={this.handleChange}
                  placeholder="PinCode"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  type="hidden"
                  name="userId"
                  value={this.state.userId}
                />
                <Button variant="success" type="submit">
                  {actionStatus}
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AddUser;
