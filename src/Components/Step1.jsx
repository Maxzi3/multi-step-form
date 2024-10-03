import React, { useState } from "react";
import { Link } from "react-router-dom";

const Step1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phoneNumber: "",
  });

  // Email regex to match @gmail.com
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  // Phone number regex to start with + and contain exactly 16 digits
  const phoneRegex = /^\+\d{15}$/;

  // Handle input changes and perform validation
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    // Validation for email
    if (name === "email") {
      if (!emailRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "This field is Required",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
      }
    }

    // Validation for phone number
    if (name === "phoneNumber") {
      if (!phoneRegex.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phoneNumber: "This field is required",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: "" }));
      }
    }
  };

  // Check if all fields are filled and no errors are present
  const isFormValid =
    formData.name &&
    formData.email &&
    formData.phoneNumber &&
    !errors.email &&
    !errors.phoneNumber;

  return (
    <>
      <div className="md:w-1/2 w-11/12 mx-auto bg-white z-10 md:mt-0 -mt-14 relative flex flex-col rounded-md md:p-4">
        <h1 className="md:text-4xl text-xl px-10 md:pt-4 pt-10 pb-2 text-primary1 font-bold">
          Personal Info
        </h1>
        <p className="text-sm px-10">
          Please provide your name, email address, and phone number
        </p>
        <form action="" className="flex flex-col">
          {/* Name Field */}
          <label htmlFor="name" className="px-10 pt-6 mb-2 text-primary1">
            Name
          </label>
          <input
            className="border-2 md:w-10/12 p-2 mx-10 rounded"
            type="text"
            id="name"
            name="name"
            placeholder="e.g Maxwell Codes"
            value={formData.name}
            onChange={handleChange}
          />

          {/* Email Field */}
          <div className="flex items-center justify-between md:mx-10 md:mt-4 md:mb-2 ">
            <label htmlFor="email" className=" text-primary1">
              Email
            </label>
            {errors.email && (
              <p className="text-red-500 text-xs mr-6 ">{errors.email}</p>
            )}
          </div>
          <input
            className={` ${
              !errors.email ? "border" : "border-red-100"
            } border-2 outline-none md:w-10/12 p-2 mx-10 rounded`}
            type="email"
            id="email"
            name="email"
            placeholder="e.g maxwellcodes@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />

          {/* Phone Number Field */}
          <div className="flex items-center justify-between md:mx-10 md:mt-4 md:mb-2 ">
            <label htmlFor="phoneNumber" className=" text-primary1">
              Phone Number
            </label>
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mr-6 ">{errors.phoneNumber}</p>
            )}
          </div>
          <input
            className={` ${
              !errors.phoneNumber ? "border" : "border-red-100"
            } border-2 outline-none md:w-10/12 p-2 mx-10 rounded`}
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="e.g +1234567890123456"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </form>

        {/* Next Step Button */}
        <Link
          to="/step2"
          className={`flex justify-center items-center relative -right-48 md:left-96 md:mt-20 mt-10 mb-4 w-32 p-2 rounded text-white ${
            isFormValid ? "bg-primary1" : "bg-gray-400 cursor-not-allowed"
          }`}
          onClick={(e) => !isFormValid && e.preventDefault()} // Prevent navigation if form isn't valid
        >
          Next Step
        </Link>
      </div>
    </>
  );
};

export default Step1;
