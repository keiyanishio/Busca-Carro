import { useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import CarCard from "./components/CarCard.jsx";
import cars from "./data/cars.json";
import "./App.css";

function App() {
  const [filters, setFilters] = useState({
    name: "",
    model: "",
    location: "",
    price: null,
  });
  const [filteredCars, setFilteredCars] = useState([]);
  const [suggestedCars, setSuggestedCars] = useState([]);
  const [otherLocationCars, setOtherLocationCars] = useState([]);
  const [otherLocationCarsBelow, setOtherLocationCarsBelow] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = () => {
    if (
      !filters.name ||
      !filters.model ||
      !filters.location ||
      !filters.price
    ) {
      setErrorMessage("Por favor, preencha todos os campos antes de buscar.");
      setFilteredCars([]);
      setSuggestedCars([]);
      setOtherLocationCars([]);
      setOtherLocationCarsBelow([]);
      setHasSearched(false);
      return;
    }
    setErrorMessage("");
    setHasSearched(true);

    const normalize = (str) =>
      str
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[-\s]/g, "")
        .toLowerCase();

    const results = cars.filter((car) => {
      const matchesName = normalize(car.Name).includes(normalize(filters.name));
      const matchesModel = normalize(car.Model).includes(
        normalize(filters.model)
      );
      const matchesLocation = normalize(car.Location).includes(
        normalize(filters.location)
      );
      const matchesPrice = car.Price <= filters.price;

      return matchesName && matchesModel && matchesLocation && matchesPrice;
    });

    let suggestions = [];
    if (results.length === 0 && filters.price) {
      suggestions = cars.filter((car) => {
        const matchesName = normalize(car.Name).includes(
          normalize(filters.name)
        );
        const matchesModel = normalize(car.Model).includes(
          normalize(filters.model)
        );
        const matchesLocation = normalize(car.Location).includes(
          normalize(filters.location)
        );
        const isAbovePrice = car.Price > filters.price;
        return matchesName && matchesModel && matchesLocation && isAbovePrice;
      });
    }

    let otherLocSuggestions = [];
    if (results.length === 0) {
      otherLocSuggestions = cars.filter((car) => {
        const matchesName = normalize(car.Name).includes(
          normalize(filters.name)
        );
        const matchesModel = normalize(car.Model).includes(
          normalize(filters.model)
        );

        const matchesPrice = filters.price ? car.Price <= filters.price : true;
        const locationDiffers = filters.location
          ? normalize(car.Location) !== normalize(filters.location)
          : false;
        return matchesName && matchesModel && matchesPrice && locationDiffers;
      });
    }

    let otherLocBelow = [];
    if (results.length === 0) {
      otherLocBelow = cars.filter((car) => {
        const matchesName = normalize(car.Name).includes(
          normalize(filters.name)
        );
        const matchesModel = normalize(car.Model).includes(
          normalize(filters.model)
        );

        const isBelowPrice = filters.price ? car.Price > filters.price : false;
        const locationDiffers = filters.location
          ? normalize(car.Location) !== normalize(filters.location)
          : false;
        return matchesName && matchesModel && isBelowPrice && locationDiffers;
      });
    }

    setFilteredCars(results);
    setSuggestedCars(suggestions);
    setOtherLocationCars(otherLocSuggestions);
    setOtherLocationCarsBelow(otherLocBelow);
  };

  return (
    <div className="min-h-screen h-auto bg-blue-100 flex flex-col items-center justify-start pb-40">
      <div className="w-full bg-blue-600 py-6 shadow-md flex justify-center items-center gap-0.1">
        <h1 className="text-5xl font-bold text-white">BusCarro</h1>
        <img src="/assets/logo.png" alt="Logo BusCarro" className="h-12 w-12" />
      </div>
      <br></br>
      <p className="text-gray-600 text-lg mb-6">
        Preencha as informações abaixo para encontrar o carro ideal para você:
      </p>

      <SearchBar
        filters={filters}
        onChange={setFilters}
        onSearch={handleSearch}
      />

      {errorMessage && (
        <div className="w-full text-center mb-4">
          <p className="text-red-500 text-lg">{errorMessage}</p>
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-6 mt-10 px-4">
        {hasSearched ? (
          filteredCars.length > 0 ? (
            filteredCars.map((car, idx) => <CarCard key={idx} {...car} />)
          ) : suggestedCars.length > 0 ? (
            <div className="w-full text-center">
              <p className="text-gray-600 text-lg mb-6">
                Não encontramos carros com o preço desejado, mas veja esses
                similares:
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {suggestedCars.map((car, idx) => (
                  <CarCard key={idx} {...car} />
                ))}
              </div>
            </div>
          ) : otherLocationCars.length > 0 ? (
            <div className="w-full text-center">
              <p className="text-gray-600 text-lg mb-6">
                Não encontramos carros na localidade informada, mas encontramos
                opções em outra localidade:
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {otherLocationCars.map((car, idx) => (
                  <CarCard key={idx} {...car} />
                ))}
              </div>
            </div>
          ) : otherLocationCarsBelow.length > 0 ? (
            <div className="w-full text-center">
              <p className="text-gray-600 text-lg mb-6">
                Não encontramos carros na localidade informada com o preço
                desejado, mas encontramos opções em outra localidade com preço
                outro preço:
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {otherLocationCarsBelow.map((car, idx) => (
                  <CarCard key={idx} {...car} />
                ))}
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-lg text-center mt-10">
              Nenhum carro encontrado. Tente ajustar os filtros.
            </p>
          )
        ) : null}
      </div>
    </div>
  );
}

export default App;
