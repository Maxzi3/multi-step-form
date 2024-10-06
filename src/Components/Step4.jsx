import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Step4 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const billingCycle =
    location.state?.billingCycle || localStorage.getItem("billingCycle");
  const selectedPlan =
    location.state?.selectedPlan || localStorage.getItem("selectedPlan");
  const selectedAddons =
    location.state?.selectedAddons ||
    JSON.parse(localStorage.getItem("selectedAddons"));
  const handleBack = () => {
    navigate("/step3");
  };

  const handleNext = () => {
    navigate("/step5");
  };

  const Change = () => {
    navigate("/step2");
  };

  // Plan prices based on billing cycle
  const planPrices = {
    arcade: billingCycle === "monthly" ? "$9/mo" : "$90/yr",
    advanced: billingCycle === "monthly" ? "$12/mo" : "$120/yr",
    pro: billingCycle === "monthly" ? "$15/mo" : "$150/yr",
  };

  // Add-on prices based on billing cycle
  const addonPrices = {
    onlineService: billingCycle === "monthly" ? "+$1/mo" : "+$10/yr",
    LargerStorage: billingCycle === "monthly" ? "+$2/mo" : "+$20/yr",
    CustomizableProfile: billingCycle === "monthly" ? "+$2/mo" : "+$20/yr",
  };


  // Get the price for the selected plan
  const selectedPlanPrice = planPrices[selectedPlan];

  // Function to clean and convert price strings into numbers
  const parsePrice = (price) => {
    if (!price) return 0; // Add a check for undefined price
    return parseFloat(price.replace(/[$/a-z]/gi, "")) || 0;
  };

  // Calculate total add-on price
  const totalAddonPrice = selectedAddons.reduce((acc, addon) => {
    const addonPrice = addonPrices[addon] ? parsePrice(addonPrices[addon]) : 0;
    return acc + addonPrice;
  }, 0);

  // Calculate total plan price
  const totalPlanPrice = selectedPlanPrice ? parsePrice(selectedPlanPrice) : 0;

  // Calculate the final total
  const totalPrice = totalPlanPrice + totalAddonPrice;

  return (
    <>
      <div className="md:w-1/2 w-11/12 mx-auto bg-white flex flex-col rounded-md py-6 px-8 relative md:top-0 bottom-16 md:mb-5 mb-20 shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-primary1">Finishing up</h1>
        <p className="text-lg text-gray-600 mb-6">
          Double check everything looks good before confirming
        </p>
        <main>
          {/* Selected Plan */}
          <div className="flex flex-row justify-between md:pb-6 border-b-2">
            <h1 className="capitalize flex flex-col text-primary1 font-bold">
              {selectedPlan} ({billingCycle}){" "}
              <span
                className="cursor-pointer text-primary2 font-normal underline"
                onClick={Change}
              >
                change
              </span>
            </h1>
            <p className="text-lg text-primary1 font-bold mb-6">
              {selectedPlanPrice}
            </p>
          </div>

          {/* Selected Add-ons */}
          <div className="flex flex-col">
            {selectedAddons.map((addon) => (
              <h1
                key={addon}
                className="flex flex-row justify-between md:py-4 py-2 capitalize text-primary2"
              >
                {addon}
                <span className="text-primary1">{addonPrices[addon]}</span>
              </h1>
            ))}
          </div>

          {/* Display total price */}
          <div className="flex flex-row justify-between mt-6  text-lg text-primary2">
            <h1>Total (per {billingCycle}):</h1>
            <span className="text-secondary2">${totalPrice.toFixed(2)}</span>
          </div>
        </main>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center md:w-1/2 w-full my-2 mx-auto mb-0 md:relative fixed md:top-0 bottom-0 bg-white p-4 md:bg-transparent">
        <button
          onClick={handleBack}
          className="text-primary2 hover:text-primary1"
        >
          Go Back
        </button>
        <button
          onClick={handleNext}
          className="bg-secondary2 w-24 p-2 rounded text-white"
        >
          Confirm
        </button>
      </div>
    </>
  );
};

export default Step4;
