import { fireEvent, render, screen } from "@testing-library/react";
import TextEditor from "..";

test("Render text editor correctly", () => {
  render(
    <TextEditor
      name="description"
      label="Description"
      placeholder="Add description"
      error=""
      onChange={() => {}}
      value="external"
    />
  );

  const editor = document.querySelector(".quill");
  expect(
    screen.getByRole("form-control", { hidden: true })
  ).toBeInTheDocument();
  expect(screen.getByRole("form-label", { hidden: true })).toBeInTheDocument();
  expect(editor).toBeInTheDocument();
});

test("Text Editor show error message", () => {
  render(
    <TextEditor
      name="description"
      label="Description"
      placeholder="Add description"
      error="error"
      onChange={() => {}}
      value="external"
    />
  );

  const editor = document.querySelector(".quill");

  expect(
    screen.getByRole("form-control", { hidden: true })
  ).toBeInTheDocument();
  expect(screen.getByRole("form-label", { hidden: true })).toBeInTheDocument();
  expect(editor).toBeInTheDocument();
  expect(
    screen.getByRole("form-error-message", { hidden: true })
  ).toBeInTheDocument();
});
