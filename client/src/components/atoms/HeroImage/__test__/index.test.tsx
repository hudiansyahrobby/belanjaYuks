import { render, screen } from "@testing-library/react";
import HeroImage from "../../HeroImage";

test("Render Hero Image correctly", () => {
  render(
    <HeroImage
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
      title="product"
    />
  );

  expect(screen.getByAltText("product")).toBeInTheDocument();
  expect(screen.getByAltText("product")).toHaveProperty("src");
});
