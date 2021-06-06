import * as Yup from "yup";

export const productValidation = Yup.object({
  name: Yup.string().required("name is required"),
  quantity: Yup.number()
    .min(1, "quantity must not be less than 1")
    .required("quantity is required"),
  images: Yup.mixed().required("images is required"),
  price: Yup.number()
    .min(0, "price must not be less than 0")
    .required("price is required"),
  description: Yup.string()
    .min(150, "description must be at least 150 characters")
    .max(5000, "description must not be greater than 5000 characters")
    .required("description is required"),
  isSecond: Yup.boolean().required("isSecond is required"),
  categories: Yup.mixed().required("categories is required"),
});
