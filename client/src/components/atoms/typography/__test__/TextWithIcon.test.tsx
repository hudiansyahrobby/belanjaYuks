import { render, screen } from "@testing-library/react";
import TextWithIcon from "../TextWithIcon";
import { AiFillAccountBook } from "react-icons/ai";

test("Render text with icon correctly", () => {
  const { getByText } = render(
    <TextWithIcon text="test" icon={AiFillAccountBook}>
      lorem ipsum
    </TextWithIcon>
  );

  expect(screen.getByRole("text-icon")).toBeInTheDocument();
  expect(getByText(/lorem ipsum/i)).toBeInTheDocument();
  expect(getByText(/test/i)).toBeInTheDocument();
});
