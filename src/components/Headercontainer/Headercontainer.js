import React from "react";
import "./headercontainer.css";

const Headercontainer = () => {
  return (
    <div className="full">    
    <div className="container">
      <div className="box-one">
        {" "}
        <h1 style={{ marginBottom: "0px",color: "darkblue" ,fontSize:"49px",marginLeft: "-8px"}} >Victoria Garcia</h1>
        <p style={{ marginTop: "0px",color:"grey" }}>client | last updated 02/04/2021</p>
      </div>

      <div className="container-two">
        <div className="sm-box">
          <p className="grey">Name</p>

          <div>
            {" "}
            <p className="strong-one">karthik </p>{" "}
          </div>
        </div>

        <div className="sm-box">
          <p className="grey"> Email(primary) </p>

          <div>
            <p className="strong-one">victoria garcia@gmail.com</p>{" "}
          </div>
        </div>
        <div className="sm-box">
          <p className="grey">Phone</p>
          <div className="strong-one">
            {" "}
            <p className="strong-one">+81 46847 4874</p>{" "}
          </div>
        </div>

        <div className="sm-box">
          <p className="grey">Address</p>
          <div className="strong-one">
            {" "}
            <p className="strong-one">123,amazon street,chennai</p>{" "}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Headercontainer;
