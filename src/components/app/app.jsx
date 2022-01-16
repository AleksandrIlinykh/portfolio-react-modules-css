import appStyles from "./app.module.css";
import Contacts from "../contacts/contacts";

function App() {
  return (
    <>
      <div className={appStyles.app}>
        <div className={appStyles.section}>
          <Contacts />
        </div>
      </div>
    </>
  );
}

export default App;
