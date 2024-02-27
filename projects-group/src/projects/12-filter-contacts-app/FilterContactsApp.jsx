import React, { useRef, useEffect, useState } from "react";
import Title from "../components/Title";
import contactsData from "./Data.json";
import Contact from "./Contact";

export default function FilterContactsApp() {
  let inputSearch = useRef(null);

  useEffect(() => {
    inputSearch.current.focus();
  });

  const [searchContact, setSearchContact] = useState("");
  return (
    <div className="text-center">
      <Title text={"FilterContactsApp"} classes={"my-4"} />
      <input
        type="text"
        placeholder="Search by first name"
        className="my-3"
        style={{ padding: ".3rem .5rem" }}
        ref={inputSearch}
        onChange={(e) => setSearchContact(e.target.value)}
      />
      <section
        className="d-flex flex-wrap justify-content-center"
        style={{ gap: 15, maxWidth: 1600, margin: "auto" }}
      >
        {contactsData
          .filter((contact) => {
            if (
              contact.first_name
                .toLocaleLowerCase()
                .includes(searchContact.toLocaleLowerCase())
            )
              return contact;
          })
          .map((contact) => (
            <Contact contact={contact} textColor={"text-danger"} />
          ))}
      </section>
    </div>
  );
}
