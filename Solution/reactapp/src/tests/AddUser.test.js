import React from "react";
import { render } from "@testing-library/react";
import AddUser from '../../src/UserCRUD/AddUser';

describe("Add User Component", () => {
  const mockFormSubmit = jest.fn();
  const stubbedUserData = {
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
    mobileNo: "",
    address: "",
    pinCode: "",
  };

  test("Add_EmptyField_FEreact", () => {
    const { getByTestId } = render(
      <AddUser onFormSubmit={mockFormSubmit} user={stubbedUserData} />
    );

    expect(getByTestId("firstname").value).toBe("");
    expect(getByTestId("lastname").value).toBe("");
    expect(getByTestId("emailid").value).toBe("");
    expect(getByTestId("mobile").value).toBe("");
    expect(getByTestId("address").value).toBe("");
    expect(getByTestId("pincode").value).toBe("");
  });
});
