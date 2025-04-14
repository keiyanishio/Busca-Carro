import { useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import CarCard from "./components/CarCard.jsx";
import cars from "./data/cars.json";
import "./App.css";

function App() {
  const [filters, setFilters] = useState({
    name: "",
    location: "",
    price: null,
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-10">
      <h1 className="text-2xl font-bold mb-6">BusCarro</h1>
      <SearchBar filters={filters} onChange={setFilters} />
    </div>
  );
}

export default App;
