import React from "react";
import "./Navbar.css";
function SecondData({ f, s }) {
  let thirdData = [
    "NEW ARRIVALS",
    "JUMPSUITES",
    "LUXARY T-SHIRTS",
    "KNITWEAR",
    "ALL CLOTHING",
    "SHORTS",
    "WIDE LEG PANTS",
    "GUCCI",
    "BEACHWEAR",
    "COATS",
    "PRINTED BLOWSES",
    "DOLCE GABBANA",
    "DRESSES",
    "JACKETS",
    "MINI DRESSES",
    "PARADA",
    "TOPS",
    "SPRING TOP SKIRTS",
    "GIVENCHY",
    "SKIRTS",
    "LINEGERE",
    "FEELING TRANSPARENT",
    "VETMENTS",
    "JEANS",
    "HOISERY",
    "VESTED INTEREST",
    "VALENTENO",
  ];
  return (
    <div>
      {thirdData.map((el, i) => {
        let a = el.toLowerCase();
        return (
          <div key={i} className="secData">
            <a href={`/${f}/${s}/${a}`}>{el}</a>
          </div>
        );
      })}
    </div>
  );
}

export default SecondData;
