import React from "react";
import { Link, useParams } from "react-router-dom";
import TopBar from "../components/TopBar";
import { ApiContext } from "../helper/contexts/apiContext";
import { ThemeContext } from "../helper/contexts/themeContext";

const CountryDetails = () => {
  const { name } = useParams();
  const { data } = React.useContext(ApiContext);
  const { day, dark, light } = React.useContext(ThemeContext);
  return (
    <div className="h-screen" style={day ? light : dark}>
      <TopBar />
      <div className="w-4/5 mx-auto">
        <Link to={"/"}>
          <button className="w-1/6 h-10 mt-7 border shadow-sm">Back</button>
        </Link>
        {data
          ?.filter((country) => country.name.common === name)
          .map((country) => (
            <div
              className="grid md:grid-cols-2 mt-7 gap-9 sm:grid-cols-1"
              key={country.name.common}
            >
              <div className="h-95">
                <img
                  className="object-cover h-full w-full"
                  src={country.flags.png}
                  alt={country.name.common}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{country.name.common}</h3>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <p>Population: {country.population}</p>
                    <p>Region: {country.region}</p>
                    <p>Capital: {country.capital}</p>
                  </div>
                  <div>
                    <p>Top Level Domain: {country.tld[0]}</p>
                    <p>Currencies: </p>
                    <p>Languages: </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CountryDetails;
