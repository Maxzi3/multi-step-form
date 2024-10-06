import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Step3 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve billingCycle and selectedPlan from Step 2
  const { billingCycle, selectedPlan } = location.state || {};

  // Load selected add-ons from localStorage if available
  const savedAddons = JSON.parse(localStorage.getItem("selectedAddons")) || [];

  // Store selected add-ons in an array to allow multiple selections
  const [selectedAddons, setSelectedAddons] = useState(savedAddons);

  // Toggle the addon selection and update localStorage
  const handleAddonClick = (addon) => {
    let updatedAddons;
    if (selectedAddons.includes(addon)) {
      // If addon is already selected, remove it from the array
      updatedAddons = selectedAddons.filter((item) => item !== addon);
    } else {
      // Otherwise, add it to the array
      updatedAddons = [...selectedAddons, addon];
    }
    setSelectedAddons(updatedAddons);
    localStorage.setItem("selectedAddons", JSON.stringify(updatedAddons)); // Save to localStorage
  };

  // Check if an addon is selected
  const isAddonSelected = (addon) => selectedAddons.includes(addon);

  // Add-on pricing based on billing cycle
  const addonPrices = {
    onlineService: billingCycle === "monthly" ? "+$1/mo" : "+$10/yr",
    LargerStorage: billingCycle === "monthly" ? "+$2/mo" : "+$20/yr",
    CustomizableProfile: billingCycle === "monthly" ? "+$2/mo" : "+$20/yr",
  };

  const handleBack = () => {
    navigate("/step2");
  };

  const handleNext = () => {
    navigate("/step4", {
      state: {
        billingCycle,
        selectedPlan,
        selectedAddons,
      },
    });
  };

  return (
    <>
      <div className="md:w-1/2 w-11/12 mx-auto bg-white flex flex-col rounded-md py-6 px-8 relative md:top-0 bottom-16 md:mb-5 mb-20 shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-primary1">Pick add-ons</h1>
        <p className="text-lg text-gray-600 mb-6">
          Add-ons help enhance your gaming experience.
        </p>
        <main className="flex flex-col md:gap-2 gap-4">
          <div
            className={`flex flex-row md:gap-10 gap-2 justify-around items-center md:w-10/1 p-3 border rounded-md text-sm ${
              isAddonSelected("onlineService")
                ? "border-secondary2 bg-cool"
                : "border-gray-300"
            }`}
          >
            <input
              onClick={() => handleAddonClick("onlineService")}
              type="checkbox"
              name="onlineService"
              checked={isAddonSelected("onlineService")}
              className="md:ml-2 accent-secondary2" // Purple checkbox styling
            />
            <div className="md:mr-2">
              <label
                className="md:p-2 text-primary1 font-bold md:text-xl"
                htmlFor="onlineService"
              >
                Online service
              </label>
              <p className="md:p-2 md:text-sm text-xs text-primary2">
                Access to Multiplayer games
              </p>
            </div>
            <p className="md:ml-20 text-secondary2">
              {addonPrices.onlineService}
            </p>
          </div>

          <div
            className={`flex flex-row md:gap-10 gap-2 justify-around items-center md:w-10/1 p-3 border rounded-md text-sm ${
              isAddonSelected("LargerStorage")
                ? "border-secondary2 bg-cool"
                : "border-gray-300"
            }`}
          >
            <input
              onClick={() => handleAddonClick("LargerStorage")}
              type="checkbox"
              name="LargerStorage"
              checked={isAddonSelected("LargerStorage")}
              className="md:ml-2 accent-secondary2"
            />
            <div className="md:mr-10 mr-6">
              <label
                className="md:p-2 text-primary1 font-bold md:text-xl"
                htmlFor="LargerStorage"
              >
                Larger storage
              </label>
              <p className="md:p-2 md:text-sm text-xs text-primary2">
                Extra 1TB of cloud save
              </p>
            </div>
            <p className="md:ml-20 text-secondary2">
              {addonPrices.LargerStorage}
            </p>
          </div>

          <div
            className={`flex flex-row md:gap-10 gap-2 justify-around items-center md:w-10/1 p-3 border rounded-md text-sm cursor-pointer ${
              isAddonSelected("CustomizableProfile")
                ? "border-secondary2 bg-cool"
                : "border-gray-300"
            }`}
          >
            <input
              onClick={() => handleAddonClick("CustomizableProfile")}
              type="checkbox"
              name="CustomizableProfile"
              checked={isAddonSelected("CustomizableProfile")}
              className="md:ml-2 accent-secondary2"
            />
            <div className="ml-">
              <label
                className="md:p-2 text-primary1 font-bold md:text-xl"
                htmlFor="CustomizableProfile"
              >
                Customizable profile
              </label>
              <p className="md:p-2 md:text-sm text-xs text-primary2 tracking-tighter">
                Custom theme on your profile
              </p>
            </div>
            <p className="md:ml-20 text-secondary2">
              {addonPrices.CustomizableProfile}
            </p>
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
          className={`bg-primary1 w-24 p-2 rounded text-white ${
            selectedAddons.length === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={selectedAddons.length === 0} // Disable if no add-ons are selected
        >
          Next Step
        </button>
      </div>
    </>
  );
};

export default Step3;
