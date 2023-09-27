import React from "react";

const Pending: React.FC = () => {
  return (
    <div className="flex w-full  justify-center items-center my-14">
      <i className="fa fa-spinner fa-spin fa-3x fa-fw" color={"green"}></i>
      <h3>Paradise Loading ...</h3>
    </div>
  );
};

export default Pending;
