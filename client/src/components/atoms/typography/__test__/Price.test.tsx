import { render, screen } from "@testing-library/react";
import Price from "../Price";

test("Render Price correctly", () => {
  const { getByText } = render(<Price price={500} />);

  expect(screen.getByRole("price", { hidden: true })).toBeInTheDocument();
  expect(getByText(/500/i)).toBeInTheDocument();
});
