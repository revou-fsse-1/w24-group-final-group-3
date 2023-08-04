import Navbar2 from "./components/Navbar2";
import IconChevronDownBlue from "../assets/icon-chevron-down-blue.svg";
import { SyntheticEvent, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import { useState } from "react";
interface UserData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  username: string;
}

interface RequestOption {
  method: "PUT";
  headers: HeadersInit;
  body: string;
  redirect: "follow";
}

export default function EditProfilePage(props: {
  userDetail: UserData;
  setUserDetailList: React.Dispatch<React.SetStateAction<UserData[]>>;
}) {
  const { userID } = useParams();
  const [firstNameInput, setFirstNameInput] = useState<string>(
    props.userDetail.firstName
  );
  const [lastNameInput, setLastNameInput] = useState<string>(
    props.userDetail.lastName
  );
  const [emailInput, setEmailInput] = useState<string>(props.userDetail.email);
  const [passwordInput, setPasswordInput] = useState<string>(
    props.userDetail.password
  );
  const [usernameInput, setUsernameInput] = useState<string>(
    props.userDetail.username
  );

  useEffect(() => {
    setFirstNameInput(props.userDetail.firstName);
    setLastNameInput(props.userDetail.lastName);
    setEmailInput(props.userDetail.email);
    setPasswordInput(props.userDetail.password);
    setUsernameInput(props.userDetail.username);
  }, [props.userDetail, userID]);

  const handleFirstNameInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFirstNameInput(event.target.value);
    },
    []
  );
  const handleLastNameInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setLastNameInput(event.target.value);
    },
    []
  );
  const handleEmailInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmailInput(event.target.value);
    },
    []
  );
  const handlePasswordInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPasswordInput(event.target.value);
    },
    []
  );
  const handleUsernameInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsernameInput(event.target.value);
    },
    []
  );

  const access_token = localStorage.getItem("access_token");
  const BACKEND_URL =
    "https://w24-group-final-group-3-production.up.railway.app/";

  const updateUser = (e: SyntheticEvent) => {
    e.preventDefault();
    if (
      !firstNameInput ||
      !lastNameInput ||
      !passwordInput ||
      !usernameInput ||
      !emailInput
    ) {
      return;
    }
    const myHeaders = {
      "Content-Type": "application/json",
      authorization: `Bearer ${access_token}`,
    };
    const raw = JSON.stringify({
      email: emailInput,
      firstName: firstNameInput,
      lastName: lastNameInput,
      password: passwordInput,
      username: usernameInput,
    });

    const requestOptions: RequestOption = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(BACKEND_URL + `user/${userID}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        props.setUserDetailList(result);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    // PAGE
    <div className="flex flex-col items-center bg-medium-grey w-full h-full fixed top-0 left-0 overflow-scroll scrollbar-hide">
      <Navbar2 />
      <section className="flex flex-col justify-center items-center w-full h-auto md:px-4 py-8">
        <div className="flex flex-col items-start w-full max-w-[768px]">
          <button
            onClick={() => history.back()}
            type="button"
            className="flex items-center gap-2 text-blue text-body-medium mr-auto ml-4 md:ml-0 mb-4"
          >
            <img
              className="rotate-90 w-[15px] h-[15px]"
              src={IconChevronDownBlue}
              alt="icon-chevron-down"
            />
            Back
          </button>

          <form className="flex flex-col items-start p-4 md:p-10 bg-medium-grey rounded-2xl md:border border-text-grey w-full max-w-[768px] gap-6">
            <div className="flex flex-col items-start">
              <h2 className="text-body-regular text-white text-[24px] mb-2">
                Change Info
              </h2>
              <h3 className="text-text-grey text-left text-input-medium leading-tight">
                Changes will be reflected to every services
              </h3>
            </div>

            {/* FIRST NAME */}
            <div className="w-full flex flex-col items-start">
              <label htmlFor="firstName" className="text-text-grey">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter your first name..."
                onChange={handleFirstNameInputChange}
                value={firstNameInput && firstNameInput}
                className="bg-medium-grey w-full outline-none border border-text-grey rounded-lg text-white p-3 px-4 text-input-medium"
              />
            </div>

            {/* LAST NAME */}
            <div className="w-full flex flex-col items-start">
              <label htmlFor="lastName" className="text-text-grey">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter your last name..."
                onChange={handleLastNameInputChange}
                value={lastNameInput && lastNameInput}
                className="bg-medium-grey w-full outline-none border border-text-grey rounded-lg text-white p-3 px-4 text-input-medium"
              />
            </div>

            {/* USERNAME */}
            <div className="w-full flex flex-col items-start">
              <label htmlFor="username" className="text-text-grey">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username..."
                onChange={handleUsernameInputChange}
                value={usernameInput && usernameInput}
                className="bg-medium-grey w-full outline-none border border-text-grey rounded-lg text-white p-3 px-4 text-input-medium"
              />
            </div>

            {/* EMAIL */}
            <div className="w-full flex flex-col items-start">
              <label htmlFor="email" className="text-text-grey">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email..."
                onChange={handleEmailInputChange}
                value={emailInput && emailInput}
                className="bg-medium-grey w-full outline-none border border-text-grey rounded-lg text-white p-3 px-4 text-input-medium"
              />
            </div>

            {/* PASSWORD */}
            <div className="w-full flex flex-col items-start">
              <label htmlFor="password" className="text-text-grey">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your new password..."
                onChange={handlePasswordInputChange}
                value={passwordInput && passwordInput}
                className="bg-medium-grey w-full outline-none border border-text-grey rounded-lg text-white p-3 px-4 text-input-medium"
              />
            </div>
            <button
              type="submit"
              onClick={updateUser}
              className="bg-blue mt-4 py-2 px-6 rounded-lg text-white text-body-medium mr-auto active:bg-blue-hover outline-none w-full md:max-w-[100px]"
            >
              Save
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
