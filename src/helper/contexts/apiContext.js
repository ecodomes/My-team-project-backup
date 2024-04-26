import React, { useState, useEffect } from "react";
import axios from "axios";

const ApiContext = React.createContext({});

const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const baseUrl = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setData(response.data);
    });
  }, []);

  return <ApiContext.Provider value={{ data }}>{children}</ApiContext.Provider>;
};

export { ApiContext, ApiProvider };
