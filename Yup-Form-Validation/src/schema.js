import * as yup from "yup";
export const registerSchema = yup.object({
  name: yup.string().required("Name ise required"),
  email: yup.string().email("Invalid Email").required("Email Is required"),
  password: yup
    .string()
    .min(6, "Password must be 6 characters")
    .required("Password is required"),
});
