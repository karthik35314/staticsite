import React from "react";
import "./container.css";

const Container = () => {
  return (
    <div className="box">
      <div className="head">
        {" "}
        <h2 style={{ color: "darkblue" }}>Remainder</h2>{" "}
        <span style={{ color: "skyblue" }}> + Add New</span>{" "}
      </div>

      <hr />

      <div className="content">
        <div style={{ padding: "3px 21px" }}>
          <div style={{ display: "flex" }}>
            {" "}
            <p style={{ border: "1px solid lightgrey", width: "13%" }}>
              {" "}
              <i
                style={{ padding: "6px" }}
                class="fa fa-calendar-o"
                aria-hidden="true"
              ></i>{" "}
              03/02
            </p>
            <p
              style={{ color: "grey", fontSize: "13px", padding: "10px 46px" }}
            >
              {" "}
              last updated on09/09/2021 1.24pm est{" "}
            </p>
          
          </div>
          <div className="red">   <p>8 days overdue</p>    </div>
       
         
          <div className="tail">
            {" "}
            <p>call and ask about quote on tuesday 11-2 est</p>{" "}
            <button>complete</button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
