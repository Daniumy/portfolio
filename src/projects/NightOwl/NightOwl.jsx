import React, { useRef, useState } from "react";
import "./NightOwl.css";
import "../../App.css";

import ReactPlayer from "react-player/youtube";
import images from "../../utils/images";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function NightOwl() {
  const listInnerRef = useRef();
  const [secondScreen, setSecondScreen] = useState(false);
  // const [mobioleVersionDetected, setMobileVersionDetected] = useState(false);
  let navigate = useNavigate();

  const NUMERO_PAGINAS = 2;

  const [t, i18n] = useTranslation();

  function onScroll() {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight } = listInnerRef.current;
      const pixelesCadaPagina = scrollHeight / NUMERO_PAGINAS;
      if (scrollTop > pixelesCadaPagina - 300) setSecondScreen(true);
      if (scrollTop < pixelesCadaPagina - 300) setSecondScreen(false);
    }
  }
  // if (mobioleVersionDetected)
  //   return (
  //     <div className="DappConnector-wrapper-mobile">
  //       <h1>Mobile version not supported yet</h1>
  //     </div>
  //   );
  // else
    return (
      <div ref={listInnerRef} className="NightOwl-wrapper" onScroll={onScroll}>
        <div className="first-section-project">
          <div className="first-section-column">
            <div
              className={secondScreen ? "go-back second" : "go-back"}
              onClick={() => navigate("/")}
            >
              {t("gobackhome")}
              <img src={images.backArrow}></img>
            </div>
            <h1>{t("nightowlshowcase")}</h1>
            <div className="player-wrapper">
            <ReactPlayer
                url="https://www.youtube.com/watch?v=6wNdK7eh5Ag"
                controls={true}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
        <div className="second-section-project">
          <h1>{t("about")}</h1>
          <div>{t("abouttextnightowl")}</div>
          <div className="MyRole-container">
            <div className="MyRole-text-container">
              <h1>{t("myrole")}</h1>
              <div style={{ fontSize: "0.8em" }}>
                {t("myroletextnightowl.uno")}
                <ul>
                  <li>{t("myroletextnightowl.dos")}</li>
                  <li>{t("myroletextnightowl.tres")}</li>
                  <li>{t("myroletextnightowl.cuatro")}</li>
                  <li>{t("myroletextnightowl.cinco")}</li>
                </ul>
              </div>
            </div>
            <img id="MyRole-image-nightowl" src={images.scrumBoard} />
          </div>
          <div className="MyRole-container">
            <div className="MyRole-text-container">
              <h1>{t("technologies")}</h1>
              <div className="ul-wrapper" style={{ fontSize: "0.8em" }}>
                <ul>
                  <li>React</li>
                  <li>JavaScript</li>
                </ul>
                <ul>
                  <li>CSS/HTML</li>
                  <li>Matomo</li>
                </ul>
                <ul>
                  <li>Git</li>
                </ul>
              </div>
            </div>
            <img id="Technologies-image" src={images.webDesignIllustration} />
          </div>
          <h1>{t("relevant-links")}</h1>
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
