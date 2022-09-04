import React, { useRef, useState } from "react";
import "./DappConnector.css";
import "../../App.css";

import ReactPlayer from "react-player/youtube";
import images from "../../utils/images";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function DappConnector() {
  const listInnerRef = useRef();
  const [secondScreen, setSecondScreen] = useState(false);

  const NUMERO_PAGINAS = 2;
  let navigate = useNavigate();

 

  const [t, i18n] = useTranslation("translation");

  function onScroll() {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight } = listInnerRef.current;
      const pixelesCadaPagina = scrollHeight / NUMERO_PAGINAS;
      if (scrollTop > pixelesCadaPagina - 300) setSecondScreen(true);
      if (scrollTop < pixelesCadaPagina - 300) setSecondScreen(false);
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
              className={secondScreen ? "go-back second" : "go-back"}
              onClick={() => navigate("/")}
            >
              {t("gobackhome")}
              <img src={images.backArrow}></img>
            </div>
            <h1>{t("appwalletshowcase")}</h1>
            <div className="player-wrapper">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=_Rn3p634_bw"
                controls={true}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
        <div className="second-section-project">
          <h1>{t("about")}</h1>
          <div>{t("abouttextappconnector")}</div>
          <div className="MyRole-container">
            <div className="MyRole-text-container">
              <h1>{t("myrole")}</h1>
              <div style={{ fontSize: "0.8em" }}>
                {t("myroletextappconnector.uno")}
                <ul>
                  <li>{t("myroletextappconnector.dos")}</li>
                  <li>{t("myroletextappconnector.tres")}</li>
                  <li>{t("myroletextappconnector.cuatro")}</li>
                  <li>{t("myroletextappconnector.cinco")}</li>
                  <li>{t("myroletextappconnector.seis")}</li>
                </ul>
              </div>
            </div>
            <img id="MyRole-image-dapp" src={images.reactNpm} />
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
                  <li>Storybook</li>
                </ul>
                <ul>
                  <li>Rollup.js</li>
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
                <a href="https://github.com/nightowlcasino/dApp-connector-react-package/tree/safewImplementation">
                  Github
                </a>
              </li>
              <li>
                <a href="https://www.npmjs.com/package/ergo-dapp-connector">
                  NPM
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}
