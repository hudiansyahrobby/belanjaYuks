import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import React, { InputHTMLAttributes } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type TextEditorProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  placeholder: string;
  value: any;
  error: string | undefined;
  onChange: (...event: any[]) => void;
};

const TextEditor: React.FC<TextEditorProps> = (props) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const { name, label, placeholder, error, value } = props;

  return (
    <FormControl role="form-control" isInvalid={!!error} my="10px">
      <FormLabel role="form-label" htmlFor={name}>
        {label}
      </FormLabel>
      <ReactQuill
        onChange={props.onChange}
        modules={modules}
        value={value || ""}
        formats={formats}
        placeholder={placeholder}
        style={{ height: "150px" }}
      />

      <FormErrorMessage role="form-error-message">{error}</FormErrorMessage>
    </FormControl>
  );
};

export default TextEditor;
