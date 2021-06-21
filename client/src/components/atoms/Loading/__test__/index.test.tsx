import { render, screen } from "@testing-library/react";
import Loading from "..";

test("Render Loading correctly", () => {
  render(<Loading />);
  expect(screen.getByRole("loading", { hidden: true })).toBeInTheDocument();
});
