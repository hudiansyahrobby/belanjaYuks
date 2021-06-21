import { render, screen } from "@testing-library/react";
import TextSmall from "../TextSmall";

test("Render text small correctly", () => {
  const { getByText } = render(<TextSmall>lorem ipsum</TextSmall>);

  expect(screen.getByRole("text-small")).toBeInTheDocument();
  expect(getByText(/lorem ipsum/i)).toBeInTheDocument();
});
