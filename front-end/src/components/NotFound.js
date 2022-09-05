import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {

    const logo = require("../assets/img/GYS_logo.jpg")
    const history = useNavigate();
  return (
    <div className="not-found">
    <div className="row error-block m-3">
      <div className="col-4">
        <img src={logo} alt="GYS logo" width={"50%"} 
            onClick={()=>{
                history("/")
            }}
        />
      </div>
      <div className="col-7">
        <h2>ERROR 404: Page not found</h2>
        <p>Click on logo or any links in header or footer to navigate from this page</p>
      </div>
    </div>
  </div>
  );
}