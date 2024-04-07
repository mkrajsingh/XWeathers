import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "../components/SearchBar/SearchBar";
import WeatherDisplay from "../components/WeatherDisplay/WeatherDisplay";

function App() {
  const [city, setCity] = useState("");

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay city={city} />
    </div>
  );
}

export default App;
