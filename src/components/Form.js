import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import "./Form.css";
function Form() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleFormSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:3005/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(data);
      const newUser = await response.json();

      if (newUser.ok) {
        navigate("/Store");
      } else {
        throw new Error("Error adding user");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <input
        {...register("userName", { required: true })}
        placeholder="User Name"
      />
      <input {...register("email", { required: true })} placeholder="Email" />
      <input
        {...register("password", { required: true })}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
export default Form;
