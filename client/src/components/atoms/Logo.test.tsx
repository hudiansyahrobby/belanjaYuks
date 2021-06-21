import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Logo from "./Logo";

test("Render paragraph correctly", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Logo title="lorem" />
    </BrowserRouter>
  );

  expect(screen.getByRole("title")).toBeInTheDocument();
  expect(getByText(/lorem/i)).toBeInTheDocument();
});
