import React from "react";
import "./MainContainer.css";
import Banner from "../img/1.jpg";
import CardMain from "./MainCard";
import Card1 from "../img/card1.jpg";
import Card2 from "../img/card2.jpg";
import Card3 from "../img/card3.jpg";
import Card4 from "../img/card4.jpg";
import Card5 from "../img/card5.jpg";
import Card6 from "../img/card6.jpg";
import MainRightTopCard from "./MainRightTopCard";
import MainRightBottonCard from "./MainRightBottonCard";

function MainContainer() {
  return (
    <div className="maincontainer">
      <div className="left">
        <div
          className="banner"
          style={{
            background: `url(${Banner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="textContainer">
            <h1>Lorem Ipsum</h1>
            <h2>V1.0</h2>
            <p>Created by Durgesh Chaudhari</p>
            <div className="bid">
              <a href="#" className="button">
                Buy
              </a>
              
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="filters">
            <div className="popular">
              <h2>Feed</h2>
              <a href="#" className="button1">
                Popular
              </a>
            </div>
            <div className="filter_buttons">
              <a href="#" className="button">
                All
              </a>
              <a href="#" className="button1">
                Science
              </a>
              <a href="#" className="button1">
                Art
              </a>
              <a href="#" className="button1">
                Space
              </a>
            </div>
          </div>

          <main>
            <CardMain imgSrc={Card1} title={"Salvation"} hearts={"65"} />
            <CardMain imgSrc={Card2} title={"Pokemon Ball"} hearts={"65"} />
            <CardMain imgSrc={Card3} title={"Pyramid God"} hearts={"65"} />
            <CardMain imgSrc={Card4} title={"Stunning Cube"} hearts={"65"} />
            <CardMain imgSrc={Card5} title={"Start Crystal"} hearts={"65"} />
            <CardMain imgSrc={Card6} title={"Crystal Bird"} hearts={"65"} />
          </main>
        </div>
      </div>
      <div className="right">
        <MainRightTopCard />
        <MainRightBottonCard/>
      </div>
    </div>
  );
}

export default MainContainer;
