import React from "react";
import Button from "../components/Button";
import { FaAddressBook, FaArrowsAltV } from "react-icons/fa";

export default function SearchFilter({
  handleToggleContacts,
  handleToggleSortAZ,
  handleSearchContacts,
}) {
  return (
    <section className="text-center">
      <Button icon={<FaAddressBook />} text="" onClick={handleToggleContacts} />
      <input
        type="text"
        placeholder="Seach by first name"
        className="mb-2 mx-1"
        style={{ padding: ".3rem .5rem" }}
        onChange={(e) => handleSearchContacts(e.target.value)}
      />
      <Button icon={<FaArrowsAltV />} text="" onClick={handleToggleSortAZ} />
    </section>
  );
}
