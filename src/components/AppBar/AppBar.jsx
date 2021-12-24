import React from "react";
import logo from "../../images/logo.png";
import "./AppBar.css";

const AppBar = () => {
  return (
    <div className='appbar'>
      <div className="img-container"><img src={logo} alt='appbar'></img></div>
      <div className="title-container"><span>Leeruniek Test</span></div>
    </div>
  );
};

export default AppBar;
