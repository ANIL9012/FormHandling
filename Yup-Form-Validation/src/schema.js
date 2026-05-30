import * as yup from "yup";
export const registerSchema = yup.object({
  name: yup
    .string()
    .required("Name ise required")
    .trim()
    .lowercase()
    .test("no-admin", "Admin is not allowed", (value) => value !== "admin"),
  // email: yup
  //   .string()
  //   .email("Invalid Email")
  //   .required("Email Is required")
  //   .test("check-gmail", "Gmail is  allready exists", async (value) => {
  //     const res = await fetch(
  //       `https://jsonplaceholder.typicode.com/users?email=${value}`,
  //     );
  //     const data = await res.json();
  //     return data.length === 0;
  //   }),
  password: yup
    .string()
    .min(6, "Password must be 6 characters")
    .required("Password is required"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match")
    .required("Confirm Password is required"),
  age: yup
    .number()
    .min(18, "You must be at least 18 years old")
    .typeError("Age must be a number")
    .positive("Age must be a positive number")
    .integer("Age must be an integer")
    .required("Age is required"),
});
