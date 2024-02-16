import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { BsFillFilePostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";

export default function TestimonialsApp() {
  //   const handleClick = () => {
  //     console.log("click");[]
  //   };

  const [testimonials, setTestimonials] = useState();
  const [items, setItems] = useState();
  useEffect(() => {
    if (testimonials)
      fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
        .then((response) => response.json())
        .then((json) => setItems(json));
  }, [testimonials]);

  return (
    <div className="container m-auto">
      <Title text={"TestimonialsApp"} classes={"mb-4"} />
      <Button
        text={"Posts"}
        btnClass="btn-info text-white me-2"
        icon={<BsFillFilePostFill />}
        onClick={() => setTestimonials("Posts")}
      />
      <Button
        text={"Users"}
        btnClass="btn-info text-white me-2"
        icon={<FaUserAlt />}
        onClick={() => setTestimonials("Users")}
      />
      <Button
        text={"Comments"}
        btnClass="btn-info text-white "
        icon={<BiCommentDetail />}
        onClick={() => setTestimonials("Comments")}
      />
      <Title
        text={!testimonials ? "Select form above!" : testimonials}
        classes={"h4 my-4 text-primary"}
      />
      {!items
        ? null
        : items.map((item) => {
            return (
              <div className="card card-primary mb-4" key={item.id}>
                {item.name && <h2 className="card-header">{item.name}</h2>}
                <div className="card-body">
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
                {item.email && (
                  <small className="card-footer">{item.email}</small>
                )}
              </div>
            );
          })}
    </div>
  );
}
