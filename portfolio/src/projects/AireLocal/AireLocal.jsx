import React, { useRef, useState } from "react";
import "./AireLocal.css";
import ReactPlayer from "react-player/youtube";
import images from "../../utils/images";
import { useNavigate } from "react-router-dom";

export default function AireLocal() {
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
            Go back home<img src={images.backArrow}></img>
          </div>
          <h1>AireLocal Showcase</h1>
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
        <h1>About</h1>
        <div>
          It is an Android & iOS App that allows the user to check air pollution
          (API call) given a map location or his location using the
          device's GPS, it also warns the user about dangerous situations,
          allows him to upload his symptoms to a database and a doctor could
          check them anytime, there is a login feature which allows registering
          users in a Firebase database and keeps its role (Doctor or patient)
          stored, and gives them functionality depending on such role.
          <br />
          The app also allows the user to save locations as favorite so that the
          user doesn't have to look up everytime for the same location.
          <br />
          Doctor can check anytime the symptoms that a patient uploaded given a
          day and the user's mail.
          <br />
          <br />
          This was my final degree project at University, I got a 9/10.
        </div>
        <div className="MyRole-container">
          <div className="MyRole-text-container">
            <h1>My Role</h1>
            <div style={{ fontSize: "0.8em" }}>
              This time I did the whole project by myself so I will just say the
              most relevant stuff that I did:
              <ul>
                <li>
                  Learning new tech such as React Native, Redux, Firebase and
                  Expo.
                </li>
                <li>Having regular meetings with the App's stakeholders.</li>
                <li>Regularly deal with API calls and its efficiency</li>
                <li>
                  Treat some libraries and/or functionalities differently
                  depending on wether the mobile running the app is iOS or
                  Android.
                </li>
              </ul>
            </div>
          </div>
          {/* <img id="MyRole-image-AireLocal" src={images.reactNpm} /> */}
        </div>
        <div className="MyRole-container">
          <div className="MyRole-text-container">
            <h1>Technologies</h1>
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
                <li>Mobile-based Components/CSS</li>
              </ul>
            </div>
          </div>
          <img id="Technologies-image-airelocal" src={images.mobileDevelopment} />
        </div>
        <h1>Relevant Links</h1>
        <div className="ul-wrapper">
          <ul>
            <li>
              <a href="https://github.com/Daniumy/AirQualityMobile">Github</a>{" "}
              &#8594; Here you can find the .apk to use the app yourself
              alongside with the project codebase itself.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
