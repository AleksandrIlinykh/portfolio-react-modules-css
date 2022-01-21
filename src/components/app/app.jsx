import { useState } from "react";
import appStyles from "./app.module.css";
import Contacts from "../contacts/contacts";
import Header from "../header/header";
import Home from "../home/home";
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className={appStyles.app}>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className={appStyles.sections}>
          <div className={appStyles.section}>
            <Home />
          </div>
          <div className={appStyles.section}>
            <Contacts />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
