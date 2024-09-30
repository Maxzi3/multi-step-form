import React from "react";
import Navbg from "../assets/bg-sidebar-desktop.svg";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const linkclass = (isActive) => {
    return isActive
      ? "border-2 p-4 rounded-full text-lg w-10 h-10 flex items-center justify-center bg-primary text-white bg-cool2 "
      : "border-2 p-4 rounded-full text-lg w-10 h-10 flex items-center justify-center bg-primary text-white ";
  }

  return (
    <div>
      {/* Desktop view */}
      <nav className="hidden md:block bg-nav w-72 h-screen bg-cover fixed overflow-hidden p-10">
        <main className="flex flex-col items-start space-y-8">
          {/* Step 1 */}
          <div className="flex items-center gap-4">
            <NavLink to="/" className={linkclass}>
              1
            </NavLink>
            <div>
              <h1 className="text-primary2 text-sm">STEP 1</h1>
              <p className="text-sm text-white">YOUR INFO</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-4">
            <NavLink to="/step2" className={linkclass}>
              2
            </NavLink>
            <div>
              <h1 className="text-sm text-primary2">STEP 2</h1>
              <p className="text-sm text-white">SELECT PLAN</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-4">
            <NavLink to="/step3" className={linkclass}>
              3
            </NavLink>
            <div>
              <h1 className="text-primary2 text-sm">STEP 3</h1>
              <p className="text-sm text-white">ADD-ONS</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-center gap-4">
            <NavLink to="/step4" className={linkclass}>
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
            className="border-2 p-4 rounded-full text-lg w-10 h-10 flex items-center justify-center bg-primary text-white"
          >
            1
          </Link>
          <Link
            to="/step2"
            className="border-2 p-4 rounded-full text-lg w-10 h-10 flex items-center justify-center bg-primary text-white"
          >
            2
          </Link>
          <Link
            to="/step3"
            className="border-2 p-4 rounded-full text-lg w-10 h-10 flex items-center justify-center bg-primary text-white"
          >
            3
          </Link>
          <Link
            to="/step4"
            className="border-2 p-4 rounded-full text-lg w-10 h-10 flex items-center justify-center bg-primary text-white"
          >
            4
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
