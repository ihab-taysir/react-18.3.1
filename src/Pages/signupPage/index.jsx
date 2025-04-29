import { Fragment, useState } from "react";
import { useAuthContext } from "../../contexts/authContext";
import { SIGNUP_INPUTS } from "../../Constants/INPUTS";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const { signup, isLoading } = useAuthContext();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.password === formData.rePassword) {
      signup({
        name: formData.userName,
        email: formData.email,
        password: formData.password,
      });
    } else {
      alert("Password And Repeat Rassword Are Not The Same");
    }
  };

  const handleChangeInput = ({ target: { value, name } }) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {SIGNUP_INPUTS.map((input) => (
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

      <button type="submit">{isLoading ? "Loading ..." : "Sign Up"}</button>
    </form>
  );
};

export default SignupPage;

// https://image-project.onrender.com
// /auth/signup
// /auth/login
