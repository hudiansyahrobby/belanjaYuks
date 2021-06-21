import { render, screen } from "@testing-library/react";
import Title from "../Title";

test("Render title correctly", () => {
  const { getByText } = render(<Title>lorem ipsum</Title>);

  expect(screen.getByRole("title")).toBeInTheDocument();
  expect(getByText(/lorem ipsum/i)).toBeInTheDocument();
});
