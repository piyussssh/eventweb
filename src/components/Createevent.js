import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import {RiAddCircleLine} from "react-icons/ri"
const Createevent = ({ placeholder }) => {
  const joditRef = useRef(null);

  return (
    <>
      <div className="container">
        <div className="col-12 d-flex">
          <div className="col-8 pe-3 ">
            <div className="d-flex flex-column  my-3">
              <label className="c-s-2">Poster</label>
              <input
                type="file"
                className="border w-100 my-2 p-2"
                placeholder="Add poster"
                id="fileinput"
              />
            </div>
            <div className="d-flex flex-column my-3">
              <label className="c-s-2">Title</label>
              <input
                type="text"
                className="border w-100 my-2 p-2"
                placeholder="Add Title"
                id="titleinput"
              />
            </div>
            <div className="d-flex flex-column my-3">
              <label className="c-s-2">Description</label>
              <JoditEditor ref={joditRef} className="border w-100 my-2 p-2" />
            </div>
          </div>
          <div className="col-4 px-3">
            <div className="d-flex justify-content-end gap-4  my-3">
              <button className="btn btn-dark">Preview</button>
              <button className="btn btn-dark">Publish</button>
            </div>
            <div className="d-flex flex-column  my-3">
              <label className="c-s-2">Venue</label>
              <input
                type="text"
                className="border w-100 my-2 p-2"
                placeholder="Add Venue"
                id="locationinput"
              />
            </div>
            <div className="d-flex flex-column  my-3">
              <label className="c-s-2">Start From</label>
              <div className="d-flex gap-3">
                <input
                  type="date"
                  className="border w-100 my-2 p-2"
                  placeholder="Add Venue"
                  id="startdateinput"
                />
                <input
                  type="time"
                  className="border w-100 my-2 p-2"
                  placeholder="Add Venue"
                  id="starttimeinput"
                />
              </div>
            </div>
            <div className="d-flex flex-column  my-3">
              <label className="c-s-2">End</label>
              <div className="d-flex gap-3">
                <input
                  type="date"
                  className="border w-100 my-2 p-2"
                  placeholder="Add Venue"
                  id="ateinpendut"
                />
                <input
                  type="time"
                  className="border w-100 my-2 p-2"
                  placeholder="Add Venue"
                  id="endtimeinput"
                />
              </div>
            </div>
            <div className="d-flex flex-column  my-3">
              <div className="d-flex justify-content-between align-items-center">
              <label className="c-s-2">Pricing</label>
              <RiAddCircleLine className="c-s-2 me-3"/>
                </div>
              <div className="d-flex gap-3">
                <input
                  type="text"
                  className="border w-100 my-2 p-2"
                  placeholder="Add Catagery"
                  id="catinput"
                />
                <input
                  type="number"
                  className="border w-100 my-2 p-2"
                  placeholder="Add Price"
                  id="priceinput"
                />
              </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default Createevent;
