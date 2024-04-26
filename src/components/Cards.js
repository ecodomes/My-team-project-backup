import React from "react";
import { ThemeContext } from "../helper/contexts/themeContext";

const Cards = ({ country, flag, population, region, capital }) => {
  const { day, dark, light } = React.useContext(ThemeContext);
  return (
    <div
      className="grid grid-rows-2 h-96 border rounded-md shadow-sm"
      style={day ? light : dark}
    >
      <div className=" h-full rounded-t-md">
        <img
          className="object-cover h-full w-full rounded-t-md"
          src={flag}
          alt="country-banner"
        />
      </div>
      <div className="w-4/5 mx-auto mt-5">
        <h3 className="text-xl font-bold">{country}</h3>
        <p className="text-sm mt-3">Population: {population}</p>
        <p className="text-sm">Region: {region}</p>
        <p className="text-sm">Capital: {capital}</p>
      </div>
    </div>
  );
};

export default Cards;
