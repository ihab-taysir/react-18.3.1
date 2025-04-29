import React, { Fragment, useState } from "react";
import { useAuthContext } from "../../contexts/authContext";
import { LOGIN_INPUTS } from "../../Constants/INPUTS";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoading } = useAuthContext();

  const handleSubmit = async (event) => {
    event.preventDefault();
    login(formData);
  };

  const handleChangeInput = ({ target: { value, name } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {LOGIN_INPUTS.map((input) => (
        <Fragment key={input.id}>
          <label htmlFor={input.id}>{input.label}</label>
          <input
            type={input.type}
            id={input.id}
            name={input.id}
            onChange={handleChangeInput}
            value={formData[input.id]}
            required
          />
        </Fragment>
      ))}

      <button type="submit">{isLoading ? "Loading..." : "Log in"}</button>
    </form>
  );
};

export default LoginPage;

// https://image-project.onrender.com
// /auth/signup
// /auth/login
