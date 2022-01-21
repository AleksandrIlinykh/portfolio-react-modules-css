import headerStyles from "./header.module.css";
import "./header.css";
import logo from "../../images/logo.png";
export default function Header({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className={headerStyles.header}>
      <a href="#intro" className={headerStyles.logo}>
        <img src={logo} alt="Logo" className={headerStyles.img} />
      </a>

      <ul
        className={
          headerStyles.headerNav +
          " " +
          (isMenuOpen && headerStyles.headerNavActive)
        }
      >
        <li className={headerStyles.headerNavElem}>home</li>
        <li className={headerStyles.headerNavElem}>about</li>
        <li className={headerStyles.headerNavElem}>skills</li>
        <li className={headerStyles.headerNavElem}>portfolio</li>
        <li className={headerStyles.headerNavElem}>contact</li>
      </ul>

      <div
        className={
          headerStyles.hamburger +
          " " +
          (isMenuOpen && headerStyles.hamburgerActive)
        }
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
          console.log(isMenuOpen);
        }}
      >
        <span className={headerStyles.hamburgerLine}></span>
        <span className={headerStyles.hamburgerLine}></span>
        <span className={headerStyles.hamburgerLine}></span>
      </div>
    </nav>
  );
}
