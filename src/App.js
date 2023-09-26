import React from "react";
import Testimonials from "./components/Testimonials";



const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <h1 className="text-4xl font-bold mx-auto border-b-[6px] rounded-md border-violet-400">Our Testimonials</h1>
      <Testimonials />
    </div>
  );
};

export default App;
