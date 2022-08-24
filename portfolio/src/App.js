import "./App.css";
import images from "./utils/images";

function App() {
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
      <div className="second-section">2 page</div>
      <div className="third-section">3 page</div>
    </div>
  );
}

export default App;
