import React, { useRef, useState } from "react";
import "./DappConnector.css";
import ReactPlayer from "react-player/youtube";
import images from "../../utils/images";
import { useNavigate } from "react-router-dom";

export default function DappConnector() {
  const listInnerRef = useRef();
  const [secondScreen, setSecondScreen] = useState(false);
  let navigate = useNavigate();

  function onScroll() {
    if (listInnerRef.current) {
      const { scrollTop } = listInnerRef.current;
      if (scrollTop > 200) setSecondScreen(true);
      if (scrollTop < 600) setSecondScreen(false);
    }
  }

  return (
    <div
      ref={listInnerRef}
      className="DappConnector-wrapper"
      onScroll={onScroll}
    >
      <div className="first-section-project">
        <div className="first-section-column">
          <div
            className="go-back"
            style={
              secondScreen
                ? { transform: "translateX(calc(90vw - 28%))" }
                : null
            }
            onClick={() => navigate("/")}
          >
            Go back home<img src={images.backArrow}></img>
          </div>
          <h1>Ergo App Connector Showcase</h1>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=_Rn3p634_bw"
            controls={true}
            width={1280}
            height={720}
          />
        </div>
      </div>
      <div className="second-section-project">
        <h1>About</h1>
        <div>
          Ergo App Connector is a library that contains a component that handles
          connecting your website to the user's Ergo Wallet. It connects to
          either Nautilus or Safew which are 2 known browser extension wallets
          for the Ergo blockchain
        </div>
        <div className="MyRole-container">
          <div className="MyRole-text-container">
            <h1>My Role</h1>
            <div style={{ fontSize: "0.8em" }}>
              What I did for this library was:
              <ul>
                <li>
                  Researching about Storybook and Rollup.js before creating the initial structure of the library, and making sure they are both properly set up
                </li>
                <li>
                  Implemented the wallet removal logic for both wallets, which had me having long conversations and meetings with both wallet's creators.
                </li>
                <li>Creating a modal pop-up that taught the user how to disconnect</li>
                <li>Whole re-styling of it as it had a poor one before made by a friend</li>
                <li>Package bundling using Rollup.js and listing it on npmjs.org</li>
              </ul>
            </div>
          </div>
          <img id="MyRole-image" src={images.scrumBoard} />
        </div>
        <div className="MyRole-container">
          <div className="MyRole-text-container">
            <h1>Technologies</h1>
            <div className="ul-wrapper" style={{ fontSize: "0.8em" }}>
              <ul>
                <li>React</li>
                <li>JavaScript</li>
              </ul>
              <ul>
                <li>CSS/HTML</li>
                <li>Storybook</li>
              </ul>
              <ul>
                <li>Rollup.js</li>
              </ul>
            </div>
          </div>
          <img id="Technologies-image" src={images.webDesignIllustration} />
        </div>
        <h1>Relevant Links</h1>
        <div className="ul-wrapper">
          <ul>
            <li>
              <a href="https://github.com/nightowlcasino/NightOwl-Frontend/tree/Daniumy_latestUpdates">
                Github
              </a>
            </li>
            <li>
              <a href="https://twitter.com/NightOwlCasino">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
