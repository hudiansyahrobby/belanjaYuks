import { render, screen } from "@testing-library/react";
import SocialButton from "..";

test("Render Social button correctly", () => {
  render(<SocialButton />);
  expect(screen.getByRole("social-button")).toBeInTheDocument();
  expect(screen.getByRole("google-button")).toBeInTheDocument();
  expect(screen.getByRole("facebook-button")).toBeInTheDocument();
});
