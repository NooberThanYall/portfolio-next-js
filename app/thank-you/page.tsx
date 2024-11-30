import React from "react";

const page = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent  bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Thank You</h1>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-[480px]" />
      <h5 className="text-2xl text-gray-200">Your Message was Sent to Me!</h5>
    </div>
  );
};

export default page;
