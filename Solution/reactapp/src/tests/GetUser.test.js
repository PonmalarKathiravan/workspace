import React from "react";
import { render, screen } from "@testing-library/react";
import UserList from '../../src/UserCRUD/GetUser';
//import axios from "axios";
import axios from "axios/dist/axios";

const BASE_URL = "https://8080-effddfdaeebcfacbdcbaeafbffbbccacdb.examlyiopb.examly.io/Api/User";

jest.mock("axios");

describe("Add User Component", () => {
  const mockEditUser = jest.fn();

  test("AddUser_FEreact", () => {
    render(<UserList editUser={mockEditUser} />);
    expect(screen.getByText("First Name")).toBeInTheDocument();
    expect(screen.getByText("Last Name")).toBeInTheDocument();
    expect(screen.getByText("EmailId")).toBeInTheDocument();
    expect(screen.getByText("MobileNo")).toBeInTheDocument();
    expect(screen.getByText("Address")).toBeInTheDocument();
    expect(screen.getByText("PinCode")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
  });
  test("GetAllUsers_FEreact", async () => {
    const users = [
      {
        id: 1,
        firstName: "testfname1",
        lastName: "testlname2",
        emailId: "testemail1",
        mobileNo: "testmob1",
        address: "testAddress1",
        pinCode: "111111",
      },
      {
        id: 2,
        firstName: "testfname2",
        lastName: "testlname2",
        emailId: "testemail2",
        mobileNo: "testmob2",
        address: "testAddress2",
        pinCode: "222222",
      },
      {
        id: 4,
        firstName: "testtest",
        lastName: "test",
        emailId: "test",
        mobileNo: "9823947827364",
        address: "",
        pinCode: "234234",
        address: "23424",
      },
    ];
    // Mocking the Axios.get to return the Users value
    axios.get = jest.fn();
    axios.get.mockResolvedValueOnce(users);

    // when
    render(<UserList editUser={mockEditUser} />);

    // then - verify that the get endpoint has been called
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/GetUserDetails`);
  });
});
