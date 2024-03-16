import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const MovieForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div>
      <h1>MovieForm {id}</h1>
      <button className="btn btn-primary" onClick={() => navigate("/movies")}>
        Save
      </button>
    </div>
  );
};

export default MovieForm;
