import { useForm } from "react-hook-form"
import { DevTool } from '@hookform/devtools';
function Form() {
  const { register, handleSubmit, control, formState } = useForm({
    defaultValues: {
      name: "Anil Kumar",
      email: "",
      age: 18,
      social: {
        facebook: "",
        twitter: ""
      },
      phonenumber: ["", ""],
      dob: new Date(),
    }
  });
  // const { register, handleSubmit, control, formState } = useForm({
  //   defaultValues: async () => {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  //     const data = await response.json();
  //     return {
  //       name: data.name,
  //       email: data.email,
  //       age: 18
  //     }
  //   }
  // });
  const { errors } = formState;

  console.log(useForm());

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input type="text" id='name'
          {...register("name",
            {
              required: 'Name is required'
            }
          )} />
        {errors.name && <p className="error">{errors.name?.message}</p>}
        <br /><br />
        <label htmlFor="email">Email</label>
        <input type="email" id='email'
          {...register("email",
            {
              required: 'Email is required',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Invalid email address'
              },
              validate: {
                notAddminEmail: (value) => {
                  return (
                    value !== "admin@example.com" || "Enter different email address"
                  )
                },
                notBlacklistedEmail: (value) => {
                  return (
                    !value.endsWith("@blacklisted.com") || "This domain is not allowed."
                  )
                }
              }
            }
          )} />
        {errors.email && <p className="error">{errors.email?.message}</p>}
        <br /><br />
        <label htmlFor="age">Age</label>
        <input type="number" id='age'
          {...register("age",
            {
              valueAsNumber: true,
              required: 'Age is required',
              min: {
                value: 18,
                message: 'Age must be at least 18'
              },
              max: {
                value: 25,
                message: 'Age must be at most 25'
              }
            }
          )} />
        {errors.age && <p className="error">{errors.age?.message}</p>}
        <br /><br />
        <label htmlFor="dob">DOB</label>
        <input type="date" id='dob'
          {...register("dob", {
            valueAsDate: true
          }
          )} />
        <br /><br />
        <label htmlFor="facebook">Facebook</label>
        <input type="text" id='facebook'
          {...register("social.facebook"
          )} />
        <br /><br />
        <label htmlFor="twitter">Twitter</label>
        <input type="text" id='twitter'
          {...register("social.twitter"
          )} />
        <br /><br />
        <label htmlFor="primary-phonenumber">Primary Phone Number</label>
        <input type="text" id='primary-phonenumber'
          {...register("phonenumber.0"
          )} />
        <br /><br />
        <label htmlFor="secondary-phonenumber">Secondary Phone Number</label>
        <input type="text" id='secondary-phonenumber'
          {...register("phonenumber.1"
          )} />
        <br /><br />
        <button type='submit'>Submit</button>
        <DevTool control={control} placement="top-left" />
      </form>
    </>
  )
}

export default Form
