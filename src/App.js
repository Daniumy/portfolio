import { useEffect, useState, useRef } from "react";
import "./App.css";
import images from "./utils/images";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function App() {
  const [airplaneHovered, setAirplaneHovered] = useState(false);
  const [secondScreen, setSecondScreen] = useState(false);
  const [hamburgerColor, setHamburgerColor] = useState("#00203FFF");
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const [socialsColor, setSocialsColor] = useState("#00203FFF");
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem("language") || "es"
  );
  const [emailStatus, setEmailStatus] = useState("none");
  const [mobileView, setMobileView] = useState(
    window.matchMedia("(max-width: 950px)").matches
  );

  let navigate = useNavigate();

  const [t, i18n] = useTranslation("translation");
    
  function handleResize() {
    if (window.innerWidth < 950) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  }
  window.addEventListener("resize", handleResize);

  useEffect(() => {
    if (selectedLanguage === "en") 
    {
      localStorage.setItem("language", "en");
      i18n.changeLanguage("en");
    }
    else
    {
      localStorage.setItem("language", "es");
      i18n.changeLanguage("es");
    }
  }, [selectedLanguage]);

  const NUMERO_PAGINAS = 4;

  const inputElement = useRef(null);
  const form = useRef();

  useEffect(() => {
    inputElement.current.onfocus = () => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
    };
  });

  const listInnerRef = useRef();

  function onScroll() {
    const { scrollTop, scrollHeight } = listInnerRef?.current;

    if (scrollTop > 200 && scrollTop < 1100) {
      setSecondScreen(true);
    } else setSecondScreen(false);

    if (listInnerRef.current) {
      const pixelesCadaPagina = scrollHeight / NUMERO_PAGINAS;
      const umbralDosPaginas = scrollHeight - pixelesCadaPagina * 2;

      if (scrollTop > umbralDosPaginas - 50) setHamburgerColor("#ADEFD1FF");
      else setHamburgerColor("#00203FFF");
      if (scrollTop > pixelesCadaPagina + 50) setSocialsColor("#ADEFD1FF");
      else setSocialsColor("#00203FFF");
    }
  }

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2cqqe2b",
        "template_zg7hi43",
        form.current,
        "8RbTIydG3KwPP205m"
      )
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          setEmailStatus("succesful");
        } else setEmailStatus("failed");
      });
  };

  useEffect(() => {
    if (emailStatus !== "none")
      setTimeout(() => {
        setEmailStatus("none");
      }, 7000);
  }, [emailStatus]);

  useEffect(() => {
    if (secondScreen) {
      setTimeout(() => {
        setAirplaneHovered(!airplaneHovered);
      }, 1300);
    }
  }, [secondScreen, airplaneHovered]);

  return (
    <div className="App" ref={listInnerRef} onScroll={onScroll}>
      {!hamburgerClicked && !mobileView && (
        <div
          className="hamburguer-container"
          onClick={() => setHamburgerClicked(!hamburgerClicked)}
        >
          <svg
            width="45px"
            height="45px"
            viewBox="0 0 15 15"
            fill={hamburgerColor}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
              fill={hamburgerColor}
            />
          </svg>
        </div>
      )}
      {!hamburgerClicked && !mobileView && (
        <div className="social-icons-container">
          <a href="https://github.com/Daniumy" target="_blank" rel="noreferrer">
            <svg
              aria-label="GitHub"
              role="img"
              viewBox="0 0 512 512"
              width="30px"
              height="30px"
            >
              <rect width="512" height="512" rx="15%" fill={socialsColor} />
              <path
                fill={socialsColor === "#00203FFF" ? "#fff" : "#00203FFF"}
                d="M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/daniu"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 382 382"
              width="30px"
              height="30px"
            >
              <path
                fill={socialsColor}
                d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
	C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
	H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
	c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
	s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
	c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
	c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
	c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
	L341.91,330.654L341.91,330.654z"
              />
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </a>
        </div>
      )}
      <div
        className={
          emailStatus !== "none"
            ? "email-notification active"
            : "email-notification"
        }
        style={{
          backgroundColor: emailStatus === "succesful" ? "lightgreen" : "red",
        }}
      >
        {emailStatus == "succesful" ? t("email-succesful") : t("email-failed")}
      </div>
      <div className={hamburgerClicked ? "nav-menu active" : "nav-menu"}>
        <div
          className="close-hamburger-container"
          onClick={() => setHamburgerClicked(!hamburgerClicked)}
        >
          <svg
            width="45"
            height="45"
            viewBox="0 0 24 24"
            fill="#00203FFF"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <div className="navigation-titles-container">
          <h1>
            <a className="nav-titles" href="/#aboutme">
              {t("aboutme")}
            </a>
          </h1>
          <div className="line-under"></div>
          <h1>
            <a className="nav-titles" href="/#projects">
            {t("projects")}
            </a>
          </h1>
          <div className="line-under"></div>
          <h1>
            <a className="nav-titles" href="/#contact">
              {t("contact")}
            </a>
          </h1>
        </div>
        <div className="bottom-part-menu">
          <div className="language-choice-container">
            <img
              alt="Spanish"
              id="spanish-flag"
              src={images.spanishFlag}
              style={{ width: 40, height: 30 }}
              onClick={() => {
                setSelectedLanguage("es");
              }}
            />
            <div className="vertical-line-separator"></div>
            <div
              className="english-flags"
              onClick={() => {
                setSelectedLanguage("en");
              }}
            >
              <img
                alt="English"
                src={images.unitedKingdom}
                style={{ width: 40, height: 30 }}
              />
              <img
                alt="English"
                src={images.unitedStates}
                style={{ width: 40, height: 30 }}
              />
            </div>
          </div>
          <div className="social-icons-container-menu-bar">
            <a
              href="https://github.com/Daniumy"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                aria-label="GitHub"
                role="img"
                viewBox="0 0 512 512"
                width="30px"
                height="30px"
              >
                <rect width="512" height="512" rx="15%" fill="#00203FFF" />
                <path
                  fill="#fff"
                  d="M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/daniu"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 382 382"
                width="30px"
                height="30px"
              >
                <path
                  fill="#00203FFF"
                  d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
	C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
	H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
	c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
	s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
	c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
	c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
	c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
	L341.91,330.654L341.91,330.654z"
                />
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="first-section">
        {!hamburgerClicked && mobileView && (
          <div
            className="hamburguer-container"
            onClick={() => setHamburgerClicked(!hamburgerClicked)}
          >
            <svg
              width="45px"
              height="45px"
              viewBox="0 0 15 15"
              fill="#adefd1ff"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                fill="#adefd1ff"
              />
            </svg>
          </div>
        )}
        <div className="first-section-row">
          <div className="first-section-left-wrapper">
            <div className="first-section-left-content">
              <h1 id="title">{t("title")}</h1>
              <div id="about-me-text">
                {t("subtitle.uno")}
                <br />
                <br />
                {t("subtitle.dos")}
              </div>
            </div>
          </div>
          <div className="first-section-right-wrapper"></div>
          <img id="image-of-myself" src={images.myself} alt="Myself" />
        </div>
        <div id="white-blank-space"></div>
      </div>
      <div className="second-section" id="aboutme">
        <img
          alt="Airplane-illustration"
          className={
            airplaneHovered ? "airplane-image active2" : "airplane-image"
          }
          src={images.airplane}
        />
        <img alt="stairs" src={images.stairs} id="stairs" />
        <div id="square"></div>
        <img
          alt="coding illustration"
          id="coding-guy-image"
          src={images.codingGuy}
        />
        <div className="about-me-text-wrapper">
          <h1>{t("aboutme")}</h1>
          <div className="about-me-text">
            {t("aboutmetext.uno")}
            <br />
            <br />
            {t("aboutmetext.dos")}
            <br />
            <br />
            {t("aboutmetext.tres")}
            <a href="https://scrimba.com/certificate/uNWQ2qsK/gfrontend">
              {t("aboutmetext.thisone")}
            </a>
            {t("aboutmetext.cuatro")}
            <br />
            <br />
            {t("aboutmetext.cinco")}
            <br />
            <br />
            {t("aboutmetext.seis")}
            <ul className="tech-stack">
              <li>{t("aboutmetext.siete")}</li>
              <li>{t("aboutmetext.ocho")}</li>
              <li>{t("aboutmetext.nueve")}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="third-section" id="projects">
        <div className="third-section-wrapper">
          <h1>{t("projectstitle")}</h1>
          <div className="projects-wrapper">
            <ProjectCard
              image={images.roulette}
              title={t("nightowlcasino")}
              text={t("nightowlbrief")}
              onClick={() => navigate("/NightOwl")}
            />
            <ProjectCard
              image={images.dAppConnector}
              title={t("appwalletconnector")}
              text={t("appwalletbrief")}
              onClick={() => navigate("/DappConnector")}
            />
            <ProjectCard
              image={images.aireLocal}
              title={t("airelocal")}
              text={t("airelocalbrief")}
              onClick={() => navigate("/AireLocal")}
            />
          </div>
        </div>
      </div>
      <div className="fourth-section" id="contact">
        {!hamburgerClicked && mobileView && (
          <div className="social-icons-container">
            <a
              href="https://github.com/Daniumy"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                aria-label="GitHub"
                role="img"
                viewBox="0 0 512 512"
                width="30px"
                height="30px"
              >
                <rect width="512" height="512" rx="15%" fill={"#adefd1ff"} />
                <path
                  fill="#00203fff"
                  d="M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/daniu"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 382 382"
                width="30px"
                height="30px"
              >
                <path
                  fill={"#adefd1ff"}
                  d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
	C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056
	H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
	c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1
	s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
	c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079
	c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426
	c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472
	L341.91,330.654L341.91,330.654z"
                />
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </a>
          </div>
        )}
        <div className="fourth-section-wrapper">
          <h1>{t("contact")}</h1>
          <div
            style={{
              width: 200,
              height: 2,
              backgroundColor: "#ADEFD1FF",
              marginBottom: 30,
            }}
          ></div>
          <h2 id="contact-subtitle">{t("contact-subtitle")}</h2>
          <form id="contact-form" ref={form} action="" onSubmit={sendEmail}>
            <div className="first-input-row">
              <div className="first-input-row-container">
                <h2>{t("name")}</h2>
                <input
                  type="text"
                  name="name"
                  ref={inputElement}
                  placeholder={t("enter-your-name")}
                  required
                />
              </div>
              <div className="first-input-row-container">
                <h2>{t("email-address")}</h2>
                <input
                  type="email"
                  ref={inputElement}
                  name="email"
                  placeholder={t("enter-email")}
                  required
                />
              </div>
            </div>
            <div className="second-input-row-container">
              <h2>{t("write-a-message")}</h2>
              <textarea
                ref={inputElement}
                name="message"
                placeholder={t("write-your-message")}
                required
              />
            </div>
          </form>
          <button type="submit" form="contact-form" className="send-button">
            {t("send")}
          </button>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ image, title, text, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <img alt="Project img" src={image} />
      <h2>{title}</h2>
      <div className="project-card-text">{text}</div>
    </div>
  );
}
export default App;
