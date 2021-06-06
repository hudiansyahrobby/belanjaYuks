import * as Yup from "yup";

export const shopValidation = Yup.object({
  name: Yup.string()
    .required("name is required")
    .matches(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/, {
      message: "name should only contain alphapet or space or number",
    }),
  location: Yup.string()
    .matches(/^[a-zA-Z ]*$/, {
      message: "location should only contain alphapet or space",
    })
    .required("location is required"),
  description: Yup.string()
    .min(50, "Should be at least 50 characters long")
    .required("description is required"),
  images: Yup.mixed().required("images is required"),
});
