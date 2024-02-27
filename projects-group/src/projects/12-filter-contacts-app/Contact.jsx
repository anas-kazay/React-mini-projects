import React from "react";

export default function Contact({
  contact,
  width = 400,
  cardColor = "danger",
  textColor,
}) {
  return (
    <div
      key={contact.id}
      className={`card  m-auto my-4`}
      style={{ width: width }}
    >
      <div className={`card-header text-bg-${cardColor}`}>
        {contact.first_name}
      </div>
      <div className="card-body text-left">
        <h4 className="card-text"></h4>
        <p className="card-text">
          <span className={`fw-bold ${textColor}`}>Last Name :</span>
          {contact.last_name}
        </p>
        <p className="card-text">
          <span className={`fw-bold ${textColor}`}>Email :</span>
          {contact.email}
        </p>
        <p className="card-text">
          <span className={`fw-bold ${textColor}`}>Phone :</span>
          {contact.phone}
        </p>
        <p className="card-text">
          <span className={`fw-bold ${textColor}`}>User Name :</span>
          {contact.user_name}
        </p>
      </div>
    </div>
  );
}
