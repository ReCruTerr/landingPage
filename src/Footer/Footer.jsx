import React from "react";
import "./Footer.css";
export default function Footer() {
  const agents = ["Buying", "Listing", "iOS App", "Get Certified"];
  const Homebuyers = [
    "Buyers",
    "Buy Before You Sell",
    "New Construction",
    "Rescue Your Closing",
    "Sellers",
  ];
  const Partners = ["Lenders", "Builders", "Brokerages"];
  const Resources = [
    "Pricing",
    "FAQs",
    "How it works",
    "Blog",
    "Guides",
    "Webinars",
  ];
  const ABOUT = ["Mission", "Culture", "Careers", "Press"];
  return (
    <div className="footer">
      <div className="footer--item__1">
        <div className="ribbonImg">
          <img src="/ribbon.svg" alt="" />
        </div>
        <div className="footer--item__1--cont">
          <div className="footer--item__1--cont--item">
            <h5>Agents</h5> <br />
            {agents.map((e) => (
              <p>
                {" "}
                <a href="">{e}</a>
              </p>
            ))}
          </div>
          <div className="footer--item__1--cont--item">
            {" "}
            <h5>Homebuyers</h5> <br />
            {Homebuyers.map((e) => (
              <p>
                {" "}
                <a href="">{e}</a>
              </p>
            ))}
          </div>
          <div className="footer--item__1--cont--item">
            {" "}
            <h5>Partners</h5> <br />
            {Partners.map((e) => (
              <p>
                {" "}
                <a href="">{e}</a>
              </p>
            ))}
          </div>
          <div className="footer--item__1--cont--item">
            {" "}
            <h5>Resources</h5> <br />
            {Resources.map((e) => (
              <p>
                {" "}
                <a href="">{e}</a>
              </p>
            ))}
          </div>
          <div className="footer--item__1--cont--item">
            {" "}
            <h5>ABOUT</h5> <br />
            {ABOUT.map((e) => (
              <p>
                {" "}
                <a href="">{e}</a>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="footer--item__2">
        <div className="bussiness">
          <img src="/bussiness.svg" alt="" />
          <a href="">Click for Review</a>
        </div>
        <div>
          <p>
            Terms Privacy <br /> <br />
            Copyright 2022 Ribbon Home Inc, All Rights Reserved.
          </p>
        </div>
        <div className="socMedia">
          <a href="">
            {" "}
            <img src="/facebook.svg" alt="" />
          </a>
          <a href="">
            <img src="/inst.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
