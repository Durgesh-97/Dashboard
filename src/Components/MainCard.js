import React from "react";
import { BsFillHeartFill } from "react-icons/bs";

function mainCard({ imgSrc, title, hearts }) {
  return (
    <div className="main_card">
      <img src={imgSrc} alt="" className="main_card_img" />
      <div className="main_card_name">
        <h2>{title}</h2>
        <div className="main_card_icon">
          <i>
            <BsFillHeartFill /> <span>{hearts}</span>
          </i>
        </div>
      </div>

      <div className="stat">
        <div>
          <p>
            Purchase<span>Rs. 100</span>
          </p>
        </div>
        <div>
          <p>
            Lasts<span>3 hr</span>
          </p>
        </div>
      </div>

      <div className="main_card_button">
        <a href="#" className="button btn">
          Purchase
        </a>
        <a href="#" className="button1 btn">
          History
        </a>
      </div>
    </div>
  );
}

export default mainCard;
