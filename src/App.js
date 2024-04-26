import React from "react";
import "./App.css";
import { ApiProvider } from "./helper/contexts/apiContext";
import { ThemeContext } from "./helper/contexts/themeContext";
import AllCountries from "./pages/AllCountries";
import { Route, Routes } from "react-router-dom";
import CountryDetails from "./pages/CountryDetails";

function App() {
  const { day, light, dark } = React.useContext(ThemeContext);
  return (
    <div className={day ? light : dark}>
      <ApiProvider>
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/:name" element={<CountryDetails />} />
        </Routes>
      </ApiProvider>
    </div>
  );
}

export default App;
