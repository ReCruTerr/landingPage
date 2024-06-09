import React, { useRef, useState } from "react";
import "./Cards.css";
import clsx from "clsx";
import Slider from "../Slider/Slider";
export default function Cards() {
  const cards = [
    "BUYER'S AGENTS",
    "Buyers",
    "Listing agents",
    "sellers",
    "Loan officers",
  ];
  const pros = [
    {
      img: "/dollar.svg",
      text: "Keep Your Commission",
    },

    { img: "/pen.svg", text: "Write More Winning Offers" },

    { img: "/house.svg", text: "Guaranteed to Close" },
  ];
  const nums = [
    {
      num: "7000+",
      text: "Homes Purchased",
    },
    {
      num: "30,000+",
      text: "Agents",
    },
    {
      num: "$5 B+",
      text: "Buying Power",
    },
  ];
  const solutionItems = [
    "Turn an offer to all cash",
    "Buy before you sell",
    "Save an existing deal",
  ];
  //  "Turn an offer to all cash",
  //  "Buy before you sell",
  //  "Save an existing deal",

  //   const solution = document.querySelectorAll(".solution--item");
  //   function isActive() {
  //     solution.classList.add("solutions--item__active");
  //     solution.classList.remove("solutions--item");
  //   }
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <div className="Container">
        <div className="mainContainer">
          <h2>Who we empower</h2>
          <div className="empower">
            {cards.map((card) => (
              <a href="">
                <button className="empowerButons">{card}</button>
              </a>
            ))}
          </div>
          <div className="Buyers">
            <div className="Buyers-item__1">
              <img src="/Family.svg" alt="" />
              <div className="Buyers-item__1-second">
                <div className="line"></div>
                <h4>BuyER's agents</h4>
                <div id="Buyers-item__1--destruction">
                  <h2>Give your buyers the certainty of cash</h2>
                  <p>
                    Waive common contingencies, including the home-sale
                    contingency, to allow your buyers to make their strongest
                    offer in any market.
                  </p>
                  <a href="" className="SignUp">
                    Get Certified Today
                  </a>
                </div>
              </div>
            </div>
            <div>
              <hr id="hR" />
            </div>
            <div className="Buyers-item__2">
              {pros.map((event) => (
                <div className="Buyers-item__2--pros">
                  <div className="Buyers-item__2--pros__item">
                    <img src={event.img} alt="" />
                  </div>
                  <p>{event.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="companyCont">
            <h2>You’re in good company</h2>
            <div className="person">
              <div className="person--item__1">
                <div className="person--item__1--cont">
                  <h5>
                    “Ribbon is a huge advantage for you as the buyer's agent -
                    and definitely gives you the extra edge needed to have your
                    buyer's offer accepted."
                  </h5>
                  <div>
                    <img src="/eben.svg" alt="" />
                    <p>
                      Edgar Gonzalez <br />
                      <p id="realty">eXp Realty</p>
                    </p>
                  </div>
                  <p id="agents">
                    Agents love us because we empower their buyers with cash and
                    don't compete for their commissions.
                  </p>
                  <a href="" className="Learn">
                    Learn more
                  </a>
                </div>
                <img src="/dog.svg" alt="" />
              </div>
            </div>
            <div className="blueHR">
              <div className="blueHR--item"></div>
            </div>
            <div className="nums">
              {nums.map((e) => (
                <div className="nums--item">
                  <span> {e.num}</span>
                  <p>{e.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="blueCont">
            <h2>Our solutions</h2>
            <div className="solutions-items">
              {solutionItems.map((text, idx) => {
                return (
                  <div
                    className={
                      activeIndex == idx
                        ? "solutions--item__active"
                        : "solutions--item"
                    }
                    onClick={() => setActiveIndex(idx)}
                  >
                    {text}
                  </div>
                );
              })}
            </div>
            <div className="main--blue--cont">
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
