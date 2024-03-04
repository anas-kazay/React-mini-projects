import React, { useState } from "react";
import NewNote from "./NewNote";
import Button from "../components/Button";
import { v4 as uuidv4 } from "uuid";

export default function NotesApp() {
  const [notes, setNotes] = useState([]);

  const addNetNote = (newNote) => {
    const newNotes = [...notes, newNote];
    newNotes.filter((note) => !note.id && (note.id = uuidv4()));
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  const cards = [
    "bg-info",
    "bg-danger",
    "bg-primary",
    "bg-success",
    "bg-warning",
  ];

  const randomizeBg = () => {
    const random = Math.floor(Math.random() * cards.length);
    return cards[random];
  };
  return (
    <div className="container mx-auto">
      <Button
        btnClass={"btn-info"}
        text="+ New note"
        onClick={addNetNote}
      ></Button>
      <div
        className="container container-sm d-flex justify-content-center"
        style={{ gap: 25, flexWrap: "wrap" }}
      >
        {notes.map((note) => (
          <NewNote
            key={note.id}
            note={note}
            onClick={deleteNote}
            cardBg={randomizeBg}
          />
        ))}
      </div>
    </div>
  );
}
