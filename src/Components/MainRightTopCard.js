import React from "react";

function MainRightTopCard() {
  return (
    <div className="topCard">
      <div className="topCard_name">
        <h2>Statistics</h2>
        <a href="#">View More</a>
      </div>

      <div className="earning">
        <p>
          Sold <span>187</span>
        </p>

        <p>
          Delivered <span>5</span>
        </p>

        <p>
          Pending <span>25</span>
        </p>

        <p>
          Cancelled <span>200</span>
        </p>

        <p>
          Total <span>300</span>
        </p>
      </div>
    </div>
  );
}

export default MainRightTopCard;
