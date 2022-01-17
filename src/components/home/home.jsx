import "./home.css";

export default function Home() {
  return (
    <div className="home" id="home">
      <div className="imgContainer">
        <img src="../assets/myPhoto.png" alt="" />
      </div>

      <div className="aboutTextContainer">
        <h2>
          Hi! <br />
          I'm Alexandr <br />a WEB developer <br />
        </h2>
        <p>Scroll down to know more about me</p>
      </div>

      <a href="#portfolio" className="left">
        <img src="../../assets/down.png" alt="" />
      </a>
      <a href="#portfolio" className="right">
        <img src="../../assets/down.png" alt="" />
      </a>
    </div>
  );
}
