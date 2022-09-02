import React, { useRef, useState } from "react";
import "./AireLocal.css";
import ReactPlayer from "react-player/youtube";
import images from "../../utils/images";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AireLocal() {
  const listInnerRef = useRef();
  const [secondScreen, setSecondScreen] = useState(false);
  const [mobioleVersionDetected, setMobileVersionDetected] = useState(false);
  
  let navigate = useNavigate();

  function handleResize() {
    if (window.innerWidth < 670) {
      setMobileVersionDetected(true);
    } else {
      setMobileVersionDetected(false);
    }
  }
  window.addEventListener("resize", handleResize);


  const [t, i18n] = useTranslation("translation");

  function onScroll() {
    if (listInnerRef.current) {
      const { scrollTop } = listInnerRef.current;
      if (scrollTop > 200) setSecondScreen(true);
      if (scrollTop < 600) setSecondScreen(false);
    }
  }
  if (mobioleVersionDetected)
  return (
    <div className="DappConnector-wrapper-mobile">
      <h1>Mobile version not supported yet</h1>
    </div>
  );
else
  return (
    <div ref={listInnerRef} className="AireLocal-wrapper" onScroll={onScroll}>
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
            {t("gobackhome")}<img src={images.backArrow}></img>
          </div>
          <h1>{t("airelocalshowcase")}</h1>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=6wNdK7eh5Ag"
            controls={true}
            muted={true}
            width={1280}
            height={720}
          />
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
          {/* <img id="MyRole-image-AireLocal" src={images.reactNpm} /> */}
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
            id="Technologies-image-airelocal"
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
