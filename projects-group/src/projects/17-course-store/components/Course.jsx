import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { CurrencyContext } from "../context/currencies-context";

export default function Course({ course }) {
  const currency = React.useContext(CurrencyContext);
  const { title, img, price } = course;

  const contextPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.code,
  }).format(price * currency.conversionRate);

  const [courseBG, setCourseBG] = useState("text-white bg-dark");

  useEffect(() => {
    if (currency.code == "USD") {
      setCourseBG("text-dark bg-light");
    }
    if (currency.code == "EUR") {
      setCourseBG("text-dark bg-primary");
    }
    if (currency.code == "MAD") {
      setCourseBG("text-dark bg-danger");
    }
  });

  return (
    <li className={`card ${courseBG} mb-3`} style={{ width: 250 }}>
      <div className="card-header">{title}</div>
      <img
        src={img}
        alt="course img"
        style={{
          height: "150px",
          objectFit: "cover",
          width: "100%",
        }}
      />

      <p className="card-body">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa minima
        quibusdam alias corporis, illo quos.
      </p>
      <div className="card-footer d-flex justify-content-between">
        <h6>{contextPrice}</h6>
        <Button btnClass={"btn-success"} text={"BUY"} />
      </div>
    </li>
  );
}
