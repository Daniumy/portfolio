import { useEffect, useState, useRef } from "react";
import "./App.css";
import images from "./utils/images";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
function App() {
  const [airplaneHovered, setAirplaneHovered] = useState(false);

  const form = useRef();
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

  function handleAirplanedHovered(e) {
    console.log(e);
    setAirplaneHovered(true);
  }
  useEffect(() => {
    if (airplaneHovered) {
      setTimeout(() => {
        setAirplaneHovered(false);
      }, 900);
    }
  }, [airplaneHovered]);

  return (
    <div className="App">
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
          <div className="first-section-right-wrapper">
          </div>
          <img id="image-of-myself" src={images.myself} alt="Myself" />
        </div>
        <div id="white-blank-space"></div>
      </div>
      <div className="second-section">
        <img
          id={"airplane-image"}
          onMouseEnter={(e) => {
            handleAirplanedHovered(e);
          }}
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
      <div className="third-section">
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
      <div className="fourth-section">
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
