import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Card from "../index";

test("It renders card component correctly", () => {
  render(
    <BrowserRouter>
      <Card
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
        isLoading={false}
        title="Product"
        buttonText="Buy"
        subtitle="lorem ipsum"
        to="/"
      />
    </BrowserRouter>
  );

  expect(screen.getByAltText("Product")).toBeInTheDocument();
  expect(screen.getByAltText("Product")).toHaveAttribute("src");
  expect(screen.getByTestId("link")).toBeInTheDocument();
  expect(screen.getByTestId("link")).toHaveTextContent(/Product/i);
  expect(screen.getByTestId("subtitle")).toHaveTextContent("lorem ipsum");
  expect(screen.getByTestId("button")).toHaveTextContent("Buy");
});
