import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import React, { InputHTMLAttributes } from "react";
import {
  UseFormGetValues,
  UseFormRegisterReturn,
  UseFormSetValue,
} from "react-hook-form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type TextEditorProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  placeholder: string;
  error: string | undefined;
  register: UseFormRegisterReturn;
  setValue: UseFormSetValue<any>;
  getValue: UseFormGetValues<any>;
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

  const { name, label, placeholder, error, setValue, getValue } = props;

  const defaultValue = getValue("description") || "";
  return (
    <FormControl isInvalid={!!error} my="10px">
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <ReactQuill
        theme="snow"
        onChange={(value) => {
          setValue("description", value);
        }}
        defaultValue={defaultValue}
        value={defaultValue || ""}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        style={{ height: "150px" }}
      />

      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export default TextEditor;
