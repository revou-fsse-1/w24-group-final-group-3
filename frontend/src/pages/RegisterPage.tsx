import React, { useState, ChangeEvent, FormEvent } from "react";
import FormInput from "./components/FormInput";
import { RiUserFill, RiLockPasswordFill, RiMailFill } from "react-icons/ri";
import Logo from "../assets/logo.svg";

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here (e.g., sending data to a server)
    console.log(formData);
  };

  return (
    <div className="bg-medium-grey flex flex-col items-center justify-center fixed top-0 left-0 w-screen h-screen">
      <form
        className="flex flex-col items-center gap-4 w-full md:border rounded-xl border-very-light-grey p-8 max-w-[425px]"
        onSubmit={handleSubmit}
      >
        {" "}
        <div className="flex flex-col items-center">
          <img src={Logo} alt="logo" className="w-[70px] h-[70px]" />
          {/* <span className="text-white text-sm font-bold">ChatterBox</span> */}
        </div>
        <h1 className="text-white font-bold text-[24px]">Register</h1>
        {/* <p className="text-input-medium text-almost-white">
          Ready to join our vibrant community? Sign up now and become a part of
          our ever-growing family. Let's get started on creating meaningful
          connections together!
        </p> */}
        <FormInput
          icon={RiUserFill}
          placeholder="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <FormInput
          icon={RiMailFill}
          placeholder="Email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <FormInput
          icon={RiLockPasswordFill}
          placeholder="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button
          className="text-white bg-blue rounded-md outline-none h-[40px] font-semibold w-full active:bg-blue-hover"
          type="submit"
        >
          Join Community Now
        </button>
        <div className="py-4 text-center">
          <p className="text-very-light-grey text-input-medium w-full text-center">
            Already a member?{" "}
            <a href="./login" className="text-blue hover:underline">
              Login
            </a>
          </p>{" "}
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
