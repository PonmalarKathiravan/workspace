import { render, screen } from "@testing-library/react";
import UserActionApp from '../../src/UserCRUD/UserActions';

test("HomePage_FEreact", () => {
  render(<UserActionApp />);
  const linkElement = screen.getByText(/User Management System/i);
  expect(linkElement).toBeInTheDocument();
});
