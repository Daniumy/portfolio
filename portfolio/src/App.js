import { useEffect, useState } from "react";
import "./App.css";
import images from "./utils/images";

function App() {
  const [airplaneHovered, setAirplaneHovered] = useState(false);

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
          <div className="first-section-right-wrapper"></div>
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
      <div className="third-section">3 page</div>
    </div>
  );
}

export default App;
