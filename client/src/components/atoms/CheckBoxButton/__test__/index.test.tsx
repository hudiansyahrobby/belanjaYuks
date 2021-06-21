import { screen, render } from "@testing-library/react";
import CheckBoxButton from "..";

test("Render Chekbox button correctly", () => {
  render(<CheckBoxButton title="product" />);

  expect(screen.getByTestId("checkbox")).toBeInTheDocument();
});
