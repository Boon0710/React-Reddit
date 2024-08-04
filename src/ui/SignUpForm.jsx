/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Button from "./Button";
import Form from "./Form";
import FormRow from "./FormRow";
import Input from "./Input";
import { useContext } from "react";

import { ModalContext } from "./Modal";
import { signUp } from "../services/apiAuthen";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

function SignUpForm({ onCloseModal }) {
  const { register, handleSubmit, reset } = useForm();
  const {mutate} = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      toast.success("Sign up succesfully");
      reset()
      onCloseModal?.()
    },
    onError: (err) => toast.error(err.response?.data?.message || "An error occurred during sign up")
  })

  const { open } = useContext(ModalContext);
  const handleLoginClick = () => {
    onCloseModal?.();
    open("login");
  };

  
    function onSubmit(data){
      const { firstName, lastName, gender, email, password } = data;
    
    
      // Prepare the user data object
      const userData = {
        firstName,
        lastName,
        email,
        password,
        gender,
      };

      console.log(userData);
    
      // Call the mutate function to execute the signup process
      mutate(userData);
    }
  



  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-800 text-center uppercase">
        Sign up
      </h2>
      <Form type={onCloseModal ? "modal" : "regular"} onSubmit={handleSubmit(onSubmit)} >
        <FormRow label="First Name">
          <Input
            type="text"
            id="firstName"
            {...register("firstName", { required: "This field is required" })}
          />
        </FormRow>
        <FormRow label="Last Name">
          <Input
            type="text"
            id="lastName"
            {...register("lastName", { required: "This field is required" })}
          />
        </FormRow>
        <FormRow label="Gender">
        <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <input
                id="male"
                type="radio"
                value="male"
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                {...register("gender")}
              />
              <label htmlFor="male" className="ml-2 text-base text-gray-700">
                Male
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="female"
                type="radio"
                value="female"
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                {...register("gender")}
              />
              <label htmlFor="female" className="ml-2 text-base text-gray-700">
                Female
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="other"
                type="radio"
                value="other"
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                {...register("gender")}
              />
              <label htmlFor="other" className="ml-2 text-base text-gray-700">
                Other
              </label>
            </div>
          </div>
        </FormRow>
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
        <div className="flex text-xs justify-center">
          <p className="mr-1 text-2xl">Already got an account?</p>

          <p
            className="text-blue-500 font-bold cursor-pointer text-2xl"
            onClick={handleLoginClick}
          >
            MOVE TO LOGIN
          </p>
        </div>
        <FormRow>
          <Button type="primary">Sign Up</Button>
        </FormRow>
      </Form>
    </>
  );
}

export default SignUpForm;
