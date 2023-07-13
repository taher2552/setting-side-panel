import React from 'react';
import './styles/LPSetting.css';
import arrowLeft from "../assets/image/arrow-left.svg";

const LPSettingSidebar = () => {
  return (
      <section className="setting-side-panel">
    <div className="go-back-btn ">
      <button className="setting-font-style"><img src={arrowLeft} alt="" /><span>Go Back</span></button>
    </div>
    <div>
      <p className="setting-heading setting-font-style">Settings</p>
    </div>
    <div className="setting-font-style">
      <p className="prefrence">Your Prefrences</p>
      <p className="prefrence-options">General</p>
      <p className="prefrence-options">Notification</p>
      <p className="prefrence-options">Security</p>
    </div>

    <div className="setting-font-style">
      <p className="prefrence">Account Setup</p>
      <p className="prefrence-options">account defaults</p>
      <p className="prefrence-options">users & teams</p>
      <p className="prefrence-options">privacy & consent</p>
    </div>
  </section>
  )
}

export default LPSettingSidebar