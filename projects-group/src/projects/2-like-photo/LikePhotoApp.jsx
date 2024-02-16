import React, { useState } from "react";
import Title from "../components/Title";
import {
  AiFillSmile,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineComment,
} from "react-icons/ai";
import Dog from "./img/dog.jpg";

export default function LikePhotoApp() {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
  const toggleLike = () => {
    setLike(!like);
    setCount(count === 0 ? 1 : 0);
  };

  let text = "likes " + count;
  return (
    <div className="container ">
      <Title text={"Like Photo App"} />

      <Title classes={"h3 my-4"} text={text} />
      <div
        className="card text-bg-dark m-auto  "
        onDoubleClick={toggleLike}
        style={{ width: 300, curosr: "pointer" }}
      >
        {/* The Card Header */}
        <div className="card-header fs-xl">
          <AiFillSmile className="me-2" />
          <small>Dog</small>
        </div>

        {/* The Image */}
        <img src={Dog} alt="img" style={{ height: "fit-content" }} />

        {/* The Card Footer */}
        <div
          className="card-footer fs-xl d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <AiOutlineComment />
          {like ? (
            <AiFillHeart className="text-danger" onClick={toggleLike} />
          ) : (
            <AiOutlineHeart onClick={toggleLike} />
          )}
        </div>
      </div>
    </div>
  );
}
