import React from 'react'
import { Link } from 'react-router-dom';

const Step1 = () => {
  return (
    <>
      <div className="md:w-1/2 w-11/12 mx-auto bg-white z-10 md:mt-0 -mt-14 relative flex flex-col rounded-md md:p-4">
        <h1 className="md:text-4xl text-xl px-10 md:pt-4 pt-10 pb-2 text-primary1 font-bold">
          Personal Info
        </h1>
        <p className="text-sm px-10">
          Please provide your name, email address and phone number
        </p>
        <form action="" className="flex flex-col">
          <label htmlFor="Name" className="px-10 pt-6 mb-2 text-primary1">
            Name
          </label>
          <input
            className="border-2 md:w-10/12 p-2 mx-10 rounded"
            type="text"
            id="Name"
            name="Name"
            placeholder="e.g Maxwell Codes"
          />
          <label htmlFor="Email" className="px-10 pt-6 mb-2 text-primary1">
            Email
          </label>
          <input
            className="border-2 md:w-10/12 p-2 mx-10 rounded"
            type="email"
            id="Email"
            name="Email"
            placeholder="e.g maxwellcodes@gmail.com"
          />
          <label htmlFor="phonenumber" className="px-10 pt-6 mb-2 text-primary1">
            Phone Number
          </label>
          <input
            className="border-2 md:w-10/12 p-2 mx-10 rounded"
            type="tel"
            id="phonenumber"
            name="phonenumber"
            placeholder="e.g +1 234 567 890"
          />
        </form>
        <Link
          to="/step2"
          className="flex justify-center items-center relative -right-48 md:left-96 md:mt-20 mt-10 mb-4 bg-primary1 w-32 p-2 rounded text-white"
        >
          Next Step
        </Link>
      </div>
    </>
  );
}

export default Step1
