// import React from "react";

import { useLocation } from "react-router-dom";

// custom hook to get the current pathname in React

const Navbarc = () => {
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  };
  let createeve =["text-dark"]
  let previeweve = ["text-dark"]
  var path =usePathname();
  console.log(path,"paath");
  if(path === "/create-event"){
    createeve.push("d-none")
    previeweve.push("d-flex")
  }
  else{
    createeve.push("d-flex")
    previeweve.push("d-none")
  }
  console.log(createeve,"create-event")
  console.log(previeweve,"pre-event")
  return (
    <>
      <nav className=" py-2 container d-flex w-100 justify-content-between ">
        <div className="r">
          <a href="/" className="navbar-brand heading">
            EVENT.WEBSITE
          </a>
        </div>
        <div className="justify-content-end d-flex gap-5">
          <a href="/create-event" className={createeve.join(" ")}>
            <span className=" c-head c-s-2 my-auto ">Create</span>
          </a>
          <a href="/" className={previeweve.join(" ")}>
            <span className=" c-head c-s-2 my-auto ">Preview</span>
          </a>
          <a href="/" className="d-flex text-dark">
            <span className=" c-head c-s-2 my-auto ">Events</span>
          </a>
          <a href="/" className="d-flex text-dark">
            <span className=" c-head c-s-2 my-auto ">Support</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbarc;
