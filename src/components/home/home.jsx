import "./home.css";
import myPhoto from "../../images/myPhoto.png";
import arrowDown from "../../images/arrow-down.png";

export default function Home() {
  return (
    <>
      <div className="home" id="home">
        <div className="imgContainer">
          <img src={myPhoto} alt="" />
        </div>

        <div className="aboutTextContainer">
          <h1>
            Hi! <br />
            I'm Alexandr <br />a WEB developer <br />
          </h1>
          <p>This is my self-presentation page</p>
          <p>Scroll down to know more about me</p>
        </div>

        <a href="#portfolio" className="left">
          <img src={arrowDown} alt="" />
        </a>
        <a href="#portfolio" className="right">
          <img src={arrowDown} alt="" />
        </a>
      </div>
    </>
  );
}
