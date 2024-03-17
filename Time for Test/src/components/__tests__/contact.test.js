import { render } from "@testing-library/react";
import contacts from "../contacts";
test("Should load contact us component", () => {
  render(<contacts />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
