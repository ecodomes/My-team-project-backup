import React, { useContext, useState } from "react";
import Cards from "../components/Cards";
import TopBar from "../components/TopBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { ApiContext } from "../helper/contexts/apiContext";
import { ThemeContext } from "../helper/contexts/themeContext";
import { Link } from "react-router-dom";

const AllCountries = () => {
  const { data } = useContext(ApiContext);
  const [query, setQuery] = useState("");
  const [filterRegion, setFilterRegion] = useState(["All"]);
  const { day, light, dark } = useContext(ThemeContext);

  return (
    <div style={day ? light : dark}>
      <TopBar />
      <div className="w-4/5 md:w-[90%] mx-auto">
        <div className="sm:h-36 md:flex md:justify-between my-6">
          {/* search bar */}
          <div className="w-4/5 md:w-2/5 h-12 flex border shadow-sm">
            <FontAwesomeIcon icon={faSearch} className="pt-4 ml-3" />
            <input
              placeholder="Search for countries..."
              className="w-full h-full text-sm px-5"
              style={day ? light : dark}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </div>
          {/* options */}
          <select
            placeholder="filter by region "
            className="shadow-sm w-3/6 md:w-1/6 h-10 mt-5 md:mt-0 border px-3 text-sm font-normal"
            style={day ? light : dark}
            aria-label="Filter Countries By Region"
            onChange={(e) => {
              setFilterRegion(e.target.value);
              console.log(filterRegion);
            }}
          >
            <option value="All">Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* list of countries */}
          {data
            ?.filter((country) => {
              return country.name.common
                .toLowerCase()
                .includes(query.toLowerCase());
            })
            .map((country, id) => (
              <Link to={`/${country.name.common}`} key={country.name.common}>
                <Cards
                  key={id}
                  country={country.name.common}
                  flag={country.flags.png}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllCountries;
