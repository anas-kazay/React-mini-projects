import React from "react";
import Contact from "./Contact";

export default function ContactList({ contacts }) {
  const generateRandomImg = () => {
    const types = ["Scooter", "Lucky", "Mia", "Tiger", "Coco"];
    return types[Math.floor(Math.random() * types.length)];
  };

  return (
    <ul>
      {contacts.map((contact, id) => {
        return (
          <Contact
            key={id}
            icon={`https://api.dicebear.com/8.x/personas/svg?seed=${generateRandomImg()}`}
            firstName={contact.first_name}
            lastName={contact.last_name}
            phoneNr={contact.phone}
          />
        );
      })}
    </ul>
  );
}
