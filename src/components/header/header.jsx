import "./header.css";
import logo from "../../images/logo.png";
export default function Header({ isMenuOpen, serIsMenuOpen }) {
  return (
    <nav className={"header " + (isMenuOpen && "active")}>
      <a href="#intro" className="logo">
        <img src={logo} alt="Logo" />
      </a>

      <ul>
        <li>home</li>
        <li>about</li>
        <li>skills</li>
        <li>portfolio</li>
        <li>contact</li>
      </ul>

      <div
        className="hamburger"
        onClick={() => {
          serIsMenuOpen(!isMenuOpen);
        }}
      >
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
      </div>
    </nav>
  );
}
