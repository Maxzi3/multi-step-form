import { useState } from "react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  // Manage disabled state
  const [disabled, setDisabled] = useState(true);

  // Define the class for NavLinks
  const linkClass = ({ isActive }) =>
    isActive
      ? "border-2 p-4 rounded-full text-lg w-10 h-10 flex items-center justify-center bg-primary text-white bg-cool2"
      : "border-2 p-4 rounded-full text-lg w-10 h-10 flex items-center justify-center bg-primary text-white";

  // Prevent navigation when the link is disabled
  const handleDisabledClick = (e) => {
    if (disabled) {
      e.preventDefault(); // Stop the navigation
    }
  };

  return (
    <div>
      {/* Desktop view */}
      <nav className="hidden md:block bg-nav w-72 h-screen bg-cover fixed overflow-hidden p-10">
        <main className="flex flex-col items-start space-y-8">
          {/* Step 1 */}
          <div className="flex items-center gap-4">
            <NavLink
              to="/"
              className={linkClass}
              onClick={handleDisabledClick} // Prevent click when disabled
            >
              1
            </NavLink>
            <div>
              <h1 className="text-primary2 text-sm">STEP 1</h1>
              <p className="text-sm text-white">YOUR INFO</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-4">
            <NavLink
              to="/step2"
              className={linkClass}
              onClick={disabled ? handleDisabledClick : null} // Disable if set to true
            >
              2
            </NavLink>
            <div>
              <h1 className="text-sm text-primary2">STEP 2</h1>
              <p className="text-sm text-white">SELECT PLAN</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-4">
            <NavLink
              to="/step3"
              className={linkClass}
              onClick={disabled ? handleDisabledClick : null}
            >
              3
            </NavLink>
            <div>
              <h1 className="text-primary2 text-sm">STEP 3</h1>
              <p className="text-sm text-white">ADD-ONS</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-center gap-4">
            <NavLink
              to="/step4"
              className={linkClass}
              onClick={disabled ? handleDisabledClick : null}
            >
              4
            </NavLink>
            <div>
              <h1 className="text-primary2 text-sm">STEP 4</h1>
              <p className="text-sm text-white">SUMMARY</p>
            </div>
          </div>
        </main>
      </nav>

      {/* Mobile View */}
      <nav className="md:hidden block bg-navMobile bg-cover w-full h-40 bg-right-bottom sticky">
        <ul className="flex flex-row justify-center gap-4 py-4">
          <Link
            to="/"
            className={`border-2 p-4 rounded-full text-lg w-10 h-10 flex items-center justify-center bg-primary text-white ${
              disabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleDisabledClick}
          >
            1
          </Link>
          <Link
            to="/step2"
            className={`border-2 p-4 rounded-full text-lg w-10 h-10 flex items-center justify-center bg-primary text-white ${
              disabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleDisabledClick}
          >
            2
          </Link>
          <Link
            to="/step3"
            className={`border-2 p-4 rounded-full text-lg w-10 h-10 flex items-center justify-center bg-primary text-white ${
              disabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleDisabledClick}
          >
            3
          </Link>
          <Link
            to="/step4"
            className={`border-2 p-4 rounded-full text-lg w-10 h-10 flex items-center justify-center bg-primary text-white ${
              disabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleDisabledClick}
          >
            4
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
