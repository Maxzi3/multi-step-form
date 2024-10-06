import React from "react";
import ThankYou from "../assets/icon-thank-you.svg";
const Step5 = () => {
  return (
    <div>
      <>
        <div className="md:w-1/2 w-11/12 mx-auto md:bg-transparent bg-white flex flex-col rounded-md py-6 px-5 relative md:top-0 bottom-10 md:mb-5 mb-20 shadow-md">
          <img
            src={ThankYou}
            alt="icon"
            className="md:w-36 w-20 mx-auto mt-10 pb-6"
          />
          <h1 className="text-3xl font-bold mb-4 text-primary1 text-center">
            Thank you!
          </h1>
          <p className="text-lg text-gray-600 text-center">
            Thnak you for confirming subscrition!
          </p>
          <p className="text-lg text-gray-600 mb-6 text-center">
            We hop you have fun using our platform. if you ever need support,
            please feel free to email us at support@Maxwellcodes.com
          </p>
        </div>
      </>
    </div>
  );
};

export default Step5;
