import React, { useState } from "react";
import Title from "./../components/Title";
import ContactList from "./ContactList";
import { getContacts } from "./db";
import SearchFilter from "./SearchFilter";

export default function PhoneBookApp() {
  let dbContacts = getContacts();

  const [showContacts, setShowContacts] = useState(true);
  const [sortAZ, setSortAZ] = useState(true);
  const [searchContact, setSearchContact] = useState("");

  const toggleContacts = () => {
    setShowContacts(!showContacts);
  };

  const toggleSortAZ = () => {
    setSortAZ(!sortAZ);
  };

  const toggleSearchContacts = (text) => {
    setSearchContact(text);
  };

  return (
    <>
      <Title text={"Phone book"}></Title>
      <main className="bg-dark text-light p-1">
        <SearchFilter
          handleToggleContacts={toggleContacts}
          handleToggleSortAZ={toggleSortAZ}
          handleSearchContacts={toggleSearchContacts}
        />
        <div style={{ height: "80vh", overflow: "auto" }}>
          <h4 className=" text-center">Display contacts</h4>
          {showContacts && (
            <ContactList
              contacts={(sortAZ
                ? dbContacts.sort((a, b) =>
                    a.first_name.localeCompare(b.first_name)
                  )
                : dbContacts.sort((a, b) =>
                    b.first_name.localeCompare(a.first_name)
                  )
              ).filter((contact) => {
                if (
                  contact.first_name
                    .toLowerCase()
                    .includes(searchContact.trim().toLowerCase())
                )
                  return contact;
              })}
            />
          )}
        </div>
      </main>
    </>
  );
}
