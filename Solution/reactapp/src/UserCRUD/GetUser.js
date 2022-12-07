import React from "react";
import { Table, Button } from "react-bootstrap";
//import axios from "axios";
import axios from "axios/dist/axios";

const apiUrl = "https://8080-effddfdaeebcfacbdcbaeafbffbbccacdb.examlyiopb.examly.io/Api/User";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      users: [],
      response: {},
    };
  }

  componentDidMount() {
    axios
      .get(apiUrl + "/GetUserDetails")
      .then((response) => response.data)
      .then(
        (result) => {
          this.setState({
            users: result,
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }

  deleteUser(userId) {
    const { users } = this.state;
    axios.delete(apiUrl + "/DeleteUserDetails/" + userId).then((result) => {
      alert(result.data);
      this.setState({
        response: result,
        users: users.filter((user) => user.userId !== userId),
      });
    });
  }

  render() {
    const { error, users } = this.state;
    if (error) {
      return <div>Error:{error.message}</div>;
    } else {
      return (
        <div>
          <Table>
            <thead className="btn-primary">
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>EmailId</th>
                <th>MobileNo</th>
                <th>Address</th>
                <th>PinCode</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.userId} data-testid="userrow">
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.emailId}</td>
                  <td>{user.mobileNo}</td>
                  <td>{user.address}</td>
                  <td>{user.pinCode}</td>
                  <td>
                    <Button
                      variant="info"
                      onClick={() => this.props.editUser(user.userId)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => this.deleteUser(user.userId)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }
  }
}

export default UserList;
