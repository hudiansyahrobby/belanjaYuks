import { render, screen } from "@testing-library/react";
import { FaAddressBook } from "react-icons/fa";
import CircleButton from "..";

test("Render Circle Button correctly", () => {
  render(
    <CircleButton icon={<FaAddressBook data-testid="circle-button-icon" />} />
  );

  expect(screen.getByTestId("circle-button")).toBeInTheDocument();
  expect(screen.getByTestId("circle-button-icon")).toBeInTheDocument();
});
