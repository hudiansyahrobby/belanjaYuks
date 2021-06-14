import * as Yup from "yup";

export const commentValidation = Yup.object({
  content: Yup.string().required("Content is required"),
  rating: Yup.number()
    .min(1, "Rating must be between 1-5")
    .max(5, "Rating must be between 1-5")
    .required("Rating is required"),
});
