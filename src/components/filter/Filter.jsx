import React from "react";
import "./filter.css";
function Filter() {
  return (
    <div className="mx-20 flex flex-row  justify-center py-5  filter-wrapper">
      {" "}
      <div className="basis-1  px-5 	">
        <button className="btn btn-primary rounded-full 	">Button</button>
      </div>
      <div className="basis-1 px-5 ">
        <button className="btn btn-primary rounded-full ">Button</button>
      </div>
      <div className="basis-1 px-5">
        <button className="btn btn-primary rounded-full ">Button</button>
      </div>
      <div className="basis-1 px-5">
        <button className="btn btn-primary rounded-full">Button</button>
      </div>
      <div className="basis-1 px-5">
        <button className="btn btn-primary rounded-full">Button</button>
      </div>
      <div className="basis-1 px-5">
        <button className="btn btn-primary rounded-full">Button</button>
      </div>
    </div>
  );
}

export default Filter;
