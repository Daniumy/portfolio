import React, { useRef, useState } from "react";
import "./AireLocal.css";
import "../../App.css";

import ReactPlayer from "react-player/youtube";
import images from "../../utils/images";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AireLocal() {
  const listInnerRef = useRef();
  const [secondScreen, setSecondScreen] = useState(false);
  // const [mobioleVersionDetected, setMobileVersionDetected] = useState(false);
  const NUMERO_PAGINAS = 2;
  let navigate = useNavigate();

  // function handleResize() {
  //   if (window.innerWidth < 670) {
  //     setMobileVersionDetected(true);
  //   } else {
  //     setMobileVersionDetected(false);
  //   }
  // }
  // window.addEventListener("resize", handleResize);

  const [t, i18n] = useTranslation("translation");

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
      <div ref={listInnerRef} className="AireLocal-wrapper" onScroll={onScroll}>
        <div className="first-section-project">
          <div className="first-section-column">
            <div
              className={secondScreen ? "go-back second" : "go-back"}
              onClick={() => navigate("/")}
            >
              {t("gobackhome")}
              <img src={images.backArrow}></img>
            </div>
            <h1>{t("airelocalshowcase")}</h1>
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
        <div className="second-section-project-airelocal">
          <h1>{t("about")}</h1>
          <div>
            {t("abouttextairelocal.uno")}
            <br />
            {t("abouttextairelocal.dos")}
            <br />
            {t("abouttextairelocal.tres")}
            <br />
            <br />
            {t("abouttextairelocal.cuatro")}
          </div>
          <div className="MyRole-container">
            <div className="MyRole-text-container">
              <h1>{t("myrole")}</h1>
              <div style={{ fontSize: "0.8em" }}>
                {t("myroletextairelocal.uno")}
                <ul>
                  <li>{t("myroletextairelocal.dos")}</li>
                  <li>{t("myroletextairelocal.tres")}</li>
                  <li>{t("myroletextairelocal.cuatro")}</li>
                  <li>{t("myroletextairelocal.cinco")}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="MyRole-container">
            <div className="MyRole-text-container">
              <h1>{t("technologies")}</h1>
              <div className="ul-wrapper" style={{ fontSize: "0.8em" }}>
                <ul>
                  <li>React Native</li>
                  <li>JavaScript</li>
                </ul>
                <ul>
                  <li>Redux</li>
                  <li>Expo</li>
                </ul>
                <ul>
                  <li>Firebase</li>
                  <li>{t("mobilebased")}</li>
                </ul>
              </div>
            </div>
            <img
              id="Technologies-image"
              src={images.mobileDevelopment}
            />
          </div>
          <h1>{t("relevant-links")}</h1>
          <div className="ul-wrapper">
            <ul>
              <li>
                <a href="https://github.com/Daniumy/AirQualityMobile">Github</a>{" "}
                &#8594; {t("here-you-can")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}
