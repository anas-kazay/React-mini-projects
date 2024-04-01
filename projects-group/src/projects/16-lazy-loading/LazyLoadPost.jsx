import React from "react";
import Title from "../components/Title";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function LazyLoadPost({ title, img }) {
  return (
    <div className="card mb-4">
      <div className="card-header">
        {!title ? (
          <Title classes={"h3"} text={"Post title"} />
        ) : (
          <Title text={title} classes={"h3"} />
        )}
      </div>
      <div className="card-body d-flex" style={{ gap: 30 }}>
        <LazyLoadImage
          src={img}
          height={"fit-content"}
          width={300}
          effect="blur"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          veritatis laudantium doloribus vero dolore iste nulla illo eveniet
          molestias, labore, consectetur, repellat facilis?
        </p>
      </div>
    </div>
  );
}
