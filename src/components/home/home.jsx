import homeStyles from "./home.module.css";
import myPhoto from "../../images/myPhoto.png";
import arrowDown from "../../images/arrow-down.png";
import cv from "../../files/cv-alexander-ilinykh.pdf";
export default function Home() {
  return (
    <>
      <div className={homeStyles.home} id="home">
        <div className={homeStyles.imgContainer}>
          <img src={myPhoto} alt="" />
        </div>

        <div className={homeStyles.aboutTextContainer}>
          <h1>
            Hi! <br />
            I'm Alexandr <br />a WEB developer <br />
          </h1>
          <p>This is my self-presentation page</p>
          <p>Scroll down to know more about me</p>
          <p>
            <a href={cv} download target="_blank">
              Or just download my CV
            </a>
          </p>
        </div>

        <a href="#portfolio" className={homeStyles.left}>
          <p>Scroll!</p>
          <img src={arrowDown} alt="" />
        </a>
        <a href="#portfolio" className={homeStyles.right}>
          <p>Scroll!</p>
          <img src={arrowDown} alt="" />
        </a>
      </div>
    </>
  );
}
