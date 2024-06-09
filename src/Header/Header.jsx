import React from "react";
import "./Header.css";
export default function Header() {
  const brands = [
    "/IMAGE1.svg",
    "/IMAGE2.svg",
    "/IMAGE3.svg",
    "/IMAGE4.svg",
    "/IMAGE5.svg",
  ];
  return (
    <div className="mainCont">
      <div className="mainCont--items1">
        <h1>
          Providing certainty <br /> on the journey to <br /> homeownership.
        </h1>
        <p>
          Guarantee your home closes with cash-backed, contingency-free offers
          for buyers, sellers, their agents, and loan officers.
        </p>
        <div className="Buttons">
          <a href="" className="SignUp">
            Sign up now
          </a>
          <a href="" className="learnLink">
            Learn more
          </a>
        </div>
        <h6>FEATURED IN</h6>
        <div className="Brands">
          {brands.map((e) => {
            return (
              <a href="" className="Brands">
                <img src={e} alt="" />;
              </a>
            );
          })}
        </div>
      </div>
      <div className="mainCont--items2">
        <img src="/IMAGE.svg" alt="" />
      </div>
    </div>
  );
}
