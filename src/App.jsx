import React, { useState } from "react";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Mainlayout from "./Layouts/Mainlayouts";
import Step1page from "./Pages/Step1page";
import Step2page from "./Pages/Step2page";
import Step3page from "./Pages/Step3page";
import Step4page from "./Pages/Step4page";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    plan: "",
    addOns: "",
  });
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Mainlayout />}>
        <Route formData={formData} path="/" element={<Step1page />} />
        <Route formData={formData} path="/step2" element={<Step2page />} />
        <Route formData={formData} path="/step3" element={<Step3page />} />
        <Route formData={formData} path="/step4" element={<Step4page />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
};

export default App;
