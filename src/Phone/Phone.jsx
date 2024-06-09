import React from "react";
import "./Phone.css";
export default function Phone() {
  return (
    <div className="mainCont">
      <div className="mainCont--item__1">
        <h2>Everything you need is only a tap away</h2>
        <p>
          Ribbon let’s you write an offer anytime, anywhere — right from your
          mobile device.
        </p>
        <div className="apple-link">
          <a href="">
            <img src="/apple.svg" alt="" />
          </a>
        </div>
      </div>
      <div>
        <img src="/Telephone.svg" alt="" />
      </div>
    </div>
  );
}
