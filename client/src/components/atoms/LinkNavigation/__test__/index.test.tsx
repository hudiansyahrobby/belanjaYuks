import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import LinkNavigation from "..";

test("Render Link Navigation correctly", () => {
  render(
    <BrowserRouter>
      <LinkNavigation to="/">Hello</LinkNavigation>
    </BrowserRouter>
  );
  expect(screen.getByRole("navigation", { hidden: true })).toBeInTheDocument();
});
