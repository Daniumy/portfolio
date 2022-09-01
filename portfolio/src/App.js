import { useEffect, useState, useRef } from "react";
import "./App.css";
import images from "./utils/images";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

function App() {
  const [airplaneHovered, setAirplaneHovered] = useState(false);
  const [secondScreen, setSecondScreen] = useState(false);
  const [hamburgerColor, setHamburgerColor] = useState("#00203fff");
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const [socialsColor, setSocialsColor] = useState("#00203fff");

  const NUMERO_PAGINAS = 4;

  const form = useRef();
  const listInnerRef = useRef();

  function onScroll() {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight } = listInnerRef.current;
      const pixelesCadaPagina = scrollHeight / NUMERO_PAGINAS;
      const umbralDosPaginas = scrollHeight - pixelesCadaPagina * 2;
      console.log(pixelesCadaPagina);
      if (scrollTop > 200) {
        setSecondScreen(true);
      }
      if (scrollTop < 200 || scrollTop > 1100) setSecondScreen(false);
      if (scrollTop > umbralDosPaginas - 50) setHamburgerColor("#adefd1ff");
      else setHamburgerColor("#00203fff");
      if (scrollTop > pixelesCadaPagina + 50) setSocialsColor("#adefd1ff");
      else setSocialsColor("#00203fff");
    }
  }
  let navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2cqqe2b",
        "template_zg7hi43",
        form.current,
        "8RbTIydG3KwPP205m"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    if (secondScreen) {
      setTimeout(() => {
        setAirplaneHovered(!airplaneHovered);
      }, 1300);
    }
  }, [secondScreen, airplaneHovered]);

  return (
    <div className="App" ref={listInnerRef} onScroll={onScroll}>
      <div
        className="hamburguer-container"
        onClick={() => setHamburgerClicked(!hamburgerClicked)}
      >
        {!hamburgerClicked && (
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
        )}
      </div>
      {!hamburgerClicked && (
        <div className="social-icons-container">
          <a href="https://github.com/Daniumy" target="_blank"><svg
            aria-label="GitHub"
            role="img"
            viewBox="0 0 512 512"
            width="30px"
            height="30px"
          >
            <rect width="512" height="512" rx="15%" fill={socialsColor} />
            <path
              fill={socialsColor == "#00203fff" ? "#fff" : "#00203fff"}
              d="M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z"
            />
          </svg></a>
          <a href="https://www.linkedin.com/in/daniu" target="_blank">
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
          </svg></a>
        </div>
      )}
      <div className={hamburgerClicked ? "nav-menu active" : "nav-menu"}>
        <div className="social-icons-container">
          <a href="https://github.com/Daniumy" target="_blank">
          <svg
            aria-label="GitHub"
            role="img"
            viewBox="0 0 512 512"
            width="30px"
            height="30px"
            // onClick={window.open("https://github.com/Daniumy","_blank")}
          >
            <rect width="512" height="512" rx="15%" fill="#00203fff"/>
            <path
              fill="#fff"
              d="M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-50c-71 16-86-28-86-28-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z"
            />
          </svg></a>
          <a href="https://www.linkedin.com/in/daniu" target="_blank">
          <svg
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 382 382"
            width="30px"
            height="30px"
          >
            <path
              fill="#00203fff"
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
          </svg></a>
        </div>
        <div
          className="close-hamburger-container"
          onClick={() => setHamburgerClicked(!hamburgerClicked)}
        >
          <svg
            width="45"
            height="45"
            viewBox="0 0 24 24"
            fill="#00203fff"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <h1>
          <a className="nav-titles" href="/#aboutme">
            About Me
          </a>
        </h1>
        <div className="line-under"></div>
        <h1>
          <a className="nav-titles" href="/#projects">
            Projects
          </a>
        </h1>
        <div className="line-under"></div>
        <h1>
          <a className="nav-titles" href="/#contact">
            Contact
          </a>
        </h1>
      </div>
      <div className="first-section">
        <div className="first-section-row">
          <div className="first-section-left-wrapper">
            <div className="first-section-left-content">
              <h1 id="title">Software Engineer</h1>
              <div id="about-me-text">
                I graduated as a Software Engineer at 'Universidad de Murcia', I
                am passionate about Frontend Development and I aim to become a
                great Full-Stack developer in the future.
                <br />
                <br />I consider myself an insatiable learner that likes to
                produce high-quality, scalable, responsive and with great user
                experience software.
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
          id={"airplane-image"}
          src={images.airplane}
          style={airplaneHovered ? { left: 445 } : null}
        />
        <img
          src={images.stairs}
          style={{
            position: "absolute",
            width: 100,
            height: 100,
            bottom: 20,
            left: 200,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 50,
            height: 50,
            top: 70,
            left: "30%",
            backgroundColor: "#6c63ff",
          }}
        ></div>
        <img
          alt="coding illustration"
          id="coding-guy-image"
          src={images.codingGuy}
        />
        <div className="about-me-text-wrapper">
          <h1>About me</h1>
          <div className="about-me-text">
            Hello, I'm Daniel, I love coding, I started my journey as a
            developer when I was 15 after having the need of creating a mod for
            the game "Minecraft", I didn't understand anything I just followed
            some random tutorial's guidance, and guess what, I liked it.
            <br />
            <br />
            Then I joined the Software Engineering career at Universidad de
            Murcia, where I discovered how complex coding actually is and that
            the process of learning how to code is endless, I haven't stopped
            learning since then and I won't stop now.
            <br />
            <br />
            In my third year of university, I started spending some of my free
            time learning more by myself which lead me to take a few Frontend
            Development courses on Youtube and{" "}
            <a href="https://scrimba.com/certificate/uNWQ2qsK/gfrontend">
              this one
            </a>
            , this self-learning made me fall in love with web development and
            join a team of developers all over the world to build our dream
            casino together! I can easily communicate in English with them as I
            have got a Cambridge C1 Certificate.
            <br />
            <br />I am now looking for a junior developer position to start my
            career as a web developer and enhance my skills!
            <br />
            <br />
            Here are a few technologies I have used ordered from more to less
            experienced:
            <ul className="tech-stack">
              <li>React, JavaScript, HTML, CSS, Git, VSCode</li>
              <li>Java, React Native, Eclipse, Jira, Firebase</li>
              <li>C, C++/C#, SQL, Python, Redux, Maven, .NET, jQuery</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="third-section" id="projects">
        <div className="third-section-wrapper">
          <h1>Some of my projects!</h1>
          <div className="projects-wrapper">
            <ProjectCard
              image={images.roulette}
              title="Night Owl Casino"
              text="The first decentralized casino built on the Ergo blockchain. Night Owl
        aims to bring the long overdue qualities of transparency, voice, and
        true privacy to casino gaming to provide the ideal platform on which
        users can build and play their favorite games."
              onClick={() => navigate("/NightOwl")}
            />
            <ProjectCard
              image={images.dAppConnector}
              title="App Wallet Connector"
              text="Ergo App Connector is a library that contains a component that handles connecting your website to the user's Ergo Wallet. It connects to either Nautilus or Safew which are 2 known browser extension wallets for the Ergo blockchain"
              onClick={() => navigate("/DappConnector")}
            />
            <ProjectCard
              image={images.aireLocal}
              title="AireLocal app"
              text="Android & iOS App that allows the user to check air pollution given a location in the map or given his location detected via the device GPS, it also warns the user about dangerous situations, and allows him to upload his symptoms and a doctor could check them anytime"
              onClick={() => navigate("/AireLocal")}
            />
          </div>
        </div>
      </div>
      <div className="fourth-section" id="contact">
        <div className="fourth-section-wrapper">
          <h1>Contact</h1>
          <div
            style={{
              width: 200,
              height: 2,
              backgroundColor: "#adefd1ff",
              marginBottom: 30,
            }}
          ></div>
          <h2 id="contact-subtitle">
            Have a question, want to work together, or simply want to say hi? Go
            ahead!
          </h2>
          <form id="contact-form" ref={form} action="" onSubmit={sendEmail}>
            <div className="first-input-row">
              <div className="first-input-row-container">
                <h2>Name</h2>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="first-input-row-container">
                <h2>Email Address</h2>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>
            <div className="second-input-row-container">
              <h2>Write a message</h2>
              <textarea
                name="message"
                placeholder="Write your message"
                required
              />
            </div>
          </form>
          <button type="submit" form="contact-form" className="send-button">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ image, title, text, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <img
        alt="Project image"
        src={image}
        style={{
          height: "55%",
          width: "90%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
      <h2>{title}</h2>
      <div className="project-card-text">{text}</div>
    </div>
  );
}
export default App;
