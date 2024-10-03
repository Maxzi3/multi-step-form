import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Step4 = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/step3");
  };

  const handleNext = () => {
    navigate("/step5");
  };
  return (
    <>
      <div className="md:w-1/2 w-11/12 mx-auto bg-white flex flex-col rounded-md py-6 px-8 relative md:top-0 bottom-16 md:mb-5 mb-20">
        <h1 className="text-3xl font-bold mb-4 text-primary1">Finising up</h1>
        <p className="text-lg text-gray-600 mb-6">
          Double check everthing looks good before confirming
        </p>
        <main>
          <div>
            <h1>
              Arcade(Yearly) <span>change</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              $99/Yr
            </p>
          </div>
          <div>
            <h1>Online service <span>+10/Yr</span></h1>
            <h1>Online service <span>+10/Yr</span></h1>
          </div>
        </main>
      </div>
      {/* Navigation Buttons */}
      <div className="flex justify-between items-center md:w-1/2 w-full my-2 mx-auto mb-0 md:relative fixed md:top-0 bottom-0 bg-white p-4 md:bg-transparent">
        <button onClick={handleBack} className="text-primary1">
          Go Back
        </button>
        <button
          onClick={handleNext}
          className="bg-primary1 w-24 p-2 rounded text-white"
        >
          Next Step
        </button>
      </div>
    </>
  );
};

export default Step4;
