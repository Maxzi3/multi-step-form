import React, { useState } from "react";
import Arcade from "../assets/icon-arcade.svg";
import Advanced from "../assets/icon-advanced.svg";
import Pro from "../assets/icon-pro.svg";
import { Navigate, useNavigate } from "react-router-dom";

import Switch from "./Switch";

const Step2 = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [billingCycle, setBillingCycle] = useState("monthly"); // Add state for billing cycle

  // Handle button click and set the selected plan
  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
  };

  // Handle toggle for billing cycle
  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly");
  };

  // Calculate the prices based on the billing cycle
  const planPrices = {
    arcade: billingCycle === "monthly" ? "$9/month" : "$90/year",
    advanced: billingCycle === "monthly" ? "$12/month" : "$120/year",
    pro: billingCycle === "monthly" ? "$15/month" : "$150/year",
  };
  const handleBack = () => {
    navigate("/");
  };
  const handleNext = () => {
    navigate("/step3");
  };

  return (
    <>
      <div className="md:w-1/2 w-11/12 mx-auto bg-white flex flex-col rounded-md py-6 px-8 relative md:top-0 bottom-16 md:mb-5 mb-20">
        <h1 className="text-3xl font-bold mb-4 text-primary1">
          Select your Plan
        </h1>
        <p className="text-lg text-gray-600">
          You have the option of monthly or yearly billing
        </p>

        <main className="flex flex-col gap-2 md:flex-row justify-between py-10 md:py-2 ">
          {/* Arcade Plan */}
          <button
            onClick={() => handlePlanClick("arcade")}
            className={`flex md:flex-col flex-row md:w-44 border p-5 rounded-lg ${
              selectedPlan === "arcade" ? "border-blue-900" : "border-gray-300"
            }`}
          >
            <img src={Arcade} alt="icon" className="w-10 h-10 mr-4 md:mb-14" />
            <div className="flex flex-col items-start">
              <h2 className="font-bold text-lg text-primary1">Arcade</h2>
              <p className="text-primary2">{planPrices.arcade}</p>
              {billingCycle === "yearly" && (
                <p className="text-primary1 font-bold text-xs">2 months free</p>
              )}
            </div>
          </button>

          {/* Advanced Plan */}
          <button
            onClick={() => handlePlanClick("advanced")}
            className={`flex md:flex-col flex-row md:w-44 border p-5 rounded-lg ${
              selectedPlan === "advanced"
                ? "border-blue-900"
                : "border-gray-300"
            }`}
          >
            <img
              src={Advanced}
              alt="icon"
              className="w-10 h-10 mr-4 md:mb-14"
            />
            <div className="flex flex-col items-start">
              <h2 className="font-bold text-primary1 text-lg">Advanced</h2>
              <p className="text-primary2">{planPrices.advanced}</p>
              {billingCycle === "yearly" && (
                <p className="text-primary1 font-bold text-xs">2 months free</p>
              )}
            </div>
          </button>

          {/* Pro Plan */}
          <button
            onClick={() => handlePlanClick("pro")}
            className={`flex flex-row md:flex-col md:w-44 border p-5 rounded-lg ${
              selectedPlan === "pro" ? "border-blue-900" : "border-gray-300"
            }`}
          >
            <img src={Pro} alt="icon" className="w-10 h-10 mr-4 md:mb-14" />
            <div className="flex flex-col items-start">
              <h2 className="font-bold text-primary1 text-lg">Pro</h2>
              <p className="text-primary2">{planPrices.pro}</p>
              {billingCycle === "yearly" && (
                <p className="text-primary1 font-bold text-xs">2 months free</p>
              )}
            </div>
          </button>
        </main>

        {/* Billing Cycle Toggle */}
        <div className="flex mx-auto md:mt-5 gap-2 bg-gray-200 md:px-40 px-14 py-2 rounded-xl">
          <h1
            className={`${
              billingCycle === "yearly"
                ? "text-primary2"
                : "text-primary1 font-bold "
            }`}
          >
            Monthly
          </h1>
          <Switch
            isToggled={billingCycle === "yearly"}
            onToggle={toggleBillingCycle}
          />
          <h1
            className={`${
              billingCycle === "monthly"
                ? "text-primary2"
                : "text-primary1 font-bold"
            }`}
          >
            Yearly
          </h1>
        </div>
      </div>
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center md:w-1/2 w-full my-2 mx-auto mb-0 md:relative fixed  bg-white p-4 md:bg-transparent">
        <button
          onClick={handleBack}
          // className="md:mt-10"
        >
          Go Back
        </button>
        <button
          onClick={handleNext}
          className=" bg-primary1 w-24 p-2 rounded text-white"
        >
          Next Step
        </button>
      </div>
    </>
  );
};

export default Step2;
