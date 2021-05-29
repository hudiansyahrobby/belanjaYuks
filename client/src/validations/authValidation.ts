import * as Yup from "yup";

export const registrationValidation = Yup.object({
  firstName: Yup.string()
    .matches(/^[a-zA-Z ]*$/, {
      message: "First Name should only contain alphapet or space",
    })
    .required("First Name is required"),
  lastName: Yup.string()
    .matches(/^[a-zA-Z ]*$/, {
      message: "Last Name should only contain alphapet or space",
    })
    .required("Last Name is required"),
  email: Yup.string().email("Email is not valid").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/,
      {
        message:
          "Password must be at least one uppercase letter, one lowercase letter, one number and one special character",
      }
    )
    .required("Password is required"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password does not match")
    .required("Password confirmation is required"),
});
