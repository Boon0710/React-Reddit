/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Button from "./Button";
import Form from "./Form";
import FormRow from "./FormRow";
import Input from "./Input";

import { useContext } from "react";
import { login } from "../services/apiAuthen";

import { ModalContext } from "./Modal";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
function LoginForm({ onCloseModal }) {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const {mutate} = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log("Received token:", data.token); 
      toast.success("Log in succesfully")
      localStorage.setItem('token', data.token);
      reset()
      onCloseModal?.()
    },
    onError: (err) => toast.error(err.response?.data?.message || "An error occurred during sign up")
  })

  const { open } = useContext(ModalContext);

  const handleSignUpClick = () => {
    onCloseModal(); // Close the login modal
    open("register"); // Open the sign-up modal
  };

  function onSubmit(data) {
    console.log("Login data:", data); // Log the form data
    mutate(data);
  }
  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-800 text-center uppercase" >
        Login
      </h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow label="Email">
          <Input
            type="text"
            id="email"
            {...register("email", { required: "This field is required" })}
          />
        </FormRow>
        <FormRow label="Password">
          <Input
            type="password"
            id="password"
            {...register("password", { required: "This field is required" })}
          />
        </FormRow>
        <div className="flex justify-center mb-2">
          <p className="text-2xl mr-1">Forgot your password?</p>
          <p className="text-2xl text-blue-500 cursor-pointer">Reset</p>
        </div>
        <div className="flex text-xs justify-center">
          <p className="mr-1 text-2xl">New here?</p>
          <p
            className="text-blue-500 font-bold cursor-pointer text-2xl"
            onClick={handleSignUpClick}
          >
            SIGN UP
          </p>
        </div>
        <FormRow>
          <Button type="primary">Login</Button>
        </FormRow>
      </Form>
    </>
  );
}

export default LoginForm;
