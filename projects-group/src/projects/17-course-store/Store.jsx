import React, { useState } from "react";
import Button from "./../components/Button";
import Courses from "./components/Courses";
import { coursesDB } from "./db/coursesDB";
import { currenciesDB } from "./db/currenciesDB";
import { CurrencyContext } from "./context/currencies-context";
document.body.style.backgroundColor = "#282c34";
document.body.style.color = "#eee";

export default function Store() {
  const [currency, setCurrancy] = useState(currenciesDB.Euro);
  return (
    <CurrencyContext.Provider value={currency}>
      <div className="container p-1 ">
        <h6 className="mb-4">Change currency:</h6>
        {Object.values(currenciesDB).map((curr) => (
          <Button
            key={curr.code}
            text={curr.code}
            btnClass={"btn-light btn-sm m-1"}
            onClick={() =>
              setCurrancy(
                curr.code == "EUR"
                  ? currenciesDB.Euro
                  : curr.code == "USD"
                  ? currenciesDB.Usd
                  : currenciesDB.MAD
              )
            }
          />
        ))}
        <header className="text-center my-4">
          <h1 className="title fs-xl">Course</h1>
          <h2 className="test-uppercase mb-2 ">Become a web developer</h2>
          <p className="mx-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatem, minus. Expedita, illo recusandae minus quis voluptatum
            id pariatur molestiae similique magni totam earum ipsam, placeat a
            iusto numquam labore officia.
          </p>
        </header>{" "}
        <Courses list={coursesDB} />
      </div>
    </CurrencyContext.Provider>
  );
}
