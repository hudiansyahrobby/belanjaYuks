import { render, screen } from "@testing-library/react";
import Subtitle from "../Subtitle";

test("Render Subtitle correctly", () => {
  const { getByText } = render(<Subtitle>lorem ipsum</Subtitle>);

  expect(screen.getByRole("subtitle")).toBeInTheDocument();
  expect(getByText(/lorem ipsum/i)).toBeInTheDocument();
});
