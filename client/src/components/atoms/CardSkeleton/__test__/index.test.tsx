import { screen, render } from "@testing-library/react";
import CardSkeleton from "..";

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

test("Render Card skeleton correctly", () => {
  render(<CardSkeleton />);

  expect(screen.getByTestId("skeleton")).toBeInTheDocument();
  expect(screen.getByTestId("skeleton-image")).toBeInTheDocument();
  expect(screen.getByTestId("skeleton-text")).toBeInTheDocument();
});
