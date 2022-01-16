import React from "react";
import Map from "../map/map";
import contactsStyles from "./contacts.module.css";

export default function Contacts() {
  return (
    <section className={contactsStyles.contacts}>
      <form className={contactsStyles.form}></form>
      <div className={contactsStyles.map}>
        <Map />
      </div>
    </section>
  );
}
