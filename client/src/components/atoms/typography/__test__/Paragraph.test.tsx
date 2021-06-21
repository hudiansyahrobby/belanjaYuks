import { render, screen } from "@testing-library/react";
import Paragraph from "../Paragraph";

test("Render paragraph correctly", () => {
  const { getByText } = render(<Paragraph>lorem ipsum</Paragraph>);

  expect(screen.getByRole("paragraph")).toBeInTheDocument();
  expect(getByText(/lorem ipsum/i)).toBeInTheDocument();
});
