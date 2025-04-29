import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

// const mobileRegex = "";
// const StrongPasswordRegex = "";
// .matches(mobileRegex, "error message")

const formScema = Yup.object({
  username: Yup.string().required("User name is required"),

  email: Yup.string().email().required("Email is required"),

  password: Yup.string().required("Password is required"),

  terms: Yup.boolean().equals([true], "Terms is required"),
});

const FormsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
    watch,
  } = useForm({ resolver: yupResolver(formScema) });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  console.log(watch("password"));
  console.log(isDirty);

  useEffect(() => {
    reset({
      username: "username",
      email: "user@user.gmail.com",
      password: "**********",
      terms: true,
    });
  }, []);

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        maxWidth: "400px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
      // HOC(callBack)
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        errors={errors}
        register={register}
        name="username"
        type="username"
        label="User Name"
      />

      <Input
        errors={errors}
        register={register}
        name="email"
        type="email"
        label="Email"
      />

      <Input
        errors={errors}
        register={register}
        name="password"
        type="password"
        label="Password"
      />

      <Input
        errors={errors}
        register={register}
        name="terms"
        type="checkbox"
        label="Terms"
      />

      <button
        type="submit"
        style={{
          alignSelf: "center",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default FormsPage;

const Input = ({ errors, register, name, type, label }) => {
  return (
    <div>
      <label
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {label}{" "}
        <input
          type={type}
          id={name}
          style={{ flex: "1", marginLeft: "10px" }}
          {...register(name)}
        />
      </label>
      {errors[name] && (
        <span style={{ color: "red", fontSize: "12px", marginTop: "-10px" }}>
          {errors[name].message}
        </span>
      )}
    </div>
  );
};
