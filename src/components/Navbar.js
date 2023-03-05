// import React from "react";
const Navbarc=()=> {
  return (
    <>
      <nav class=" py-2 container d-flex w-100 justify-content-between ">
        <div class="r">
          <a href="/" class="navbar-brand heading">
            EVENT.WEBSITE
          </a>
        </div>
        <div class="justify-content-end d-flex gap-5">
          <a href="/" className="d-flex text-dark">
            <span class=" c-head c-s-2 my-auto ">Preview</span>
          </a>
          <a href="/" className="d-flex text-dark">
            <span class=" c-head c-s-2 my-auto ">Events</span>
          </a>
          <a href="/" className="d-flex text-dark">
            <span class=" c-head c-s-2 my-auto ">Support</span>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbarc;
