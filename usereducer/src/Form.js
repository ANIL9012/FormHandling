import React, { useReducer } from "react";

function Form() {
  const reducer = (state, action) => {
    return {
      ...state,
      [action.name]: action.value,
    };
  };

  const [formData, dispatch] = useReducer(reducer, {
    username: "",
    email: "",
    password: "",
  });

  const handleChage = (e) => {
    dispatch({
      name: e.target.name,
      value: e.target.value,
    });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={formData.username}
          onChange={handleChage}
        />
        <input
          type="email"
          name="email"
          placeholder="useremail"
          value={formData.email}
          onChange={handleChage}
        />
        <input
          type="password"
          name="password"
          placeholder="userpassword"
          value={formData.password}
          onChange={handleChage}
        />
        <p>
         Username: {formData.username}- Useremail:{formData.email}-Userpassword:{formData.password}
        </p>
      </form>
    </div>
  );
}

export default Form;
