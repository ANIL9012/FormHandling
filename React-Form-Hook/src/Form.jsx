import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";
function Form() {
  const {
    register,
    handleSubmit,
    control,
    formState,
    watch,
    setValue,
    getValues,
    reset,
    trigger,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      age: 18,
      social: {
        facebook: "",
        twitter: "",
      },
      phonenumber: ["", ""],
      dob: new Date(),
    },
    // mode: "onBlur",
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
  const {
    errors,
    dirtyFields,
    touchedFields,
    isDirty,
    isValid,
    isSubmitting,
    isSubmitted,
    isSubmitSuccessful,
    submitCount,
  } = formState;

  // console.log(useForm());

  // console.log({ dirtyFields, touchedFields, isDirty });

  console.log({ isSubmitting, isSubmitted, isSubmitSuccessful, submitCount });

  const onSubmit = (data) => {
    console.log(data);
  };

  // const watchForm = watch();

  // useEffect(() => {
  //   console.log(watchForm);
  // }, [watchForm]);

  const getFormValues = () => {
    const values = getValues();
    console.log(values);
  };

  const setFormValues = () => {
    setValue("name", "Testing", {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onError = (errors) => {
    console.log("Errors:", errors);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  return (
    <>
      {/* <p>{JSON.stringify(watchForm)}</p> */}
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: "Name is required",
          })}
        />
        {errors.name && <p className="error">{errors.name?.message}</p>}
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            disabled: watch("name") === "",
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: "Invalid email address",
            },
            validate: {
              notAddminEmail: (value) => {
                return (
                  value !== "admin@example.com" ||
                  "Enter different email address"
                );
              },
              notBlacklistedEmail: (value) => {
                return (
                  !value.endsWith("@blacklisted.com") ||
                  "This domain is not allowed."
                );
              },
              availableEmail: async (value) => {
                const response = await fetch(
                  `https://jsonplaceholder.typicode.com/users?email=${value}`,
                );
                const data = await response.json();
                return data.length === 0 || "Email allready exists.";
              },
            },
          })}
        />
        {errors.email && <p className="error">{errors.email?.message}</p>}
        <br />
        <br />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          {...register("age", {
            disabled: watch("email") === "",
            valueAsNumber: true,
            required: "Age is required",
            min: {
              value: 18,
              message: "Age must be at least 18",
            },
            max: {
              value: 25,
              message: "Age must be at most 25",
            },
          })}
        />
        {errors.age && <p className="error">{errors.age?.message}</p>}
        <br />
        <br />
        <label htmlFor="country">Country</label>
        <br />
        <select id="country" {...register("country")}>
          <option value="">Select Country</option>
          <option value="india">India</option>
          <option value="pakistan">Pakistan</option>
          <option value="bangladesh">Bangladesh</option>
        </select>
        <br />
        <br />
        <label htmlFor="gender">Gender</label>
        <label htmlFor="gender">
          <input
            type="radio"
            value="male"
            {...register("gender", { required: true })}
          />
          Male
        </label>
        <label htmlFor="gender">
          <input
            type="radio"
            value="female"
            {...register("gender", { required: true })}
          />
          Female
        </label>
        {errors.gender && <p className="error">Gender is required</p>}
        <br />
        <label htmlFor="skills">Skills</label>
        <label htmlFor="skills">
          <input
            type="checkbox"
            value="react"
            {...register("skills", { required: true })}
          />
          React
        </label>
        <label htmlFor="skills">
          <input
            type="checkbox"
            value="nodejs"
            {...register("skills", { required: true })}
          />
          Node.js
        </label>
        <label htmlFor="skills">
          <input
            type="checkbox"
            value="mongodb"
            {...register("skills", { required: true })}
          />
          MongoDB
        </label>
        <br />
        <br />
        <label htmlFor="dob">DOB</label>
        <input
          type="date"
          id="dob"
          {...register("dob", {
            valueAsDate: true,
          })}
        />
        <br />
        <br />
        <label htmlFor="facebook">Facebook</label>
        <input type="text" id="facebook" {...register("social.facebook")} />
        <br />
        <br />
        <label htmlFor="twitter">Twitter</label>
        <input type="text" id="twitter" {...register("social.twitter")} />
        <br />
        <br />
        <label htmlFor="primary-phonenumber">Primary Phone Number</label>
        <input
          type="text"
          id="primary-phonenumber"
          {...register("phonenumber.0")}
        />
        <br />
        <br />
        <label htmlFor="secondary-phonenumber">Secondary Phone Number</label>
        <input
          type="text"
          id="secondary-phonenumber"
          {...register("phonenumber.1")}
        />
        <br />
        <br />
        {/* <button type="submit" disabled={!isValid}>
          Submit
        </button> */}

        <button type="submit">Submit</button>
        <button type="button" onClick={getFormValues}>
          Get Form Values
        </button>
        <button type="button" onClick={setFormValues}>
          Set Values
        </button>
        <button type="button" onClick={() => reset()}>
          Reset Form
        </button>
        <button type="button" onClick={() => trigger()}>
          Validate
        </button>
        <DevTool control={control} placement="top-left" />
      </form>
    </>
  );
}

export default Form;
