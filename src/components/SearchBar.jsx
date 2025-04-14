import React from "react";

export default function SearchBar({ filters, onChange }) {
  return (
    <div className="p-4 flex flex-col gap-4 md:flex-row md:items-center">
      <input
        type="text"
        placeholder="Modelo do carro (ex: BYD)"
        value={filters.name}
        onChange={(e) => onChange({ ...filters, name: e.target.value })}
        className="p-3 border rounded w-full md:w-96 h-14 text-lg"
      />
      <input
        type="text"
        placeholder="Localidade (ex: São Paulo)"
        value={filters.location}
        onChange={(e) => onChange({ ...filters, location: e.target.value })}
        className="p-3 border rounded w-full md:w-96 h-14 text-lg"
      />
      <input
        type="number"
        placeholder="Preço máximo (ex: 100000)"
        value={filters.price || ""}
        onChange={(e) =>
          onChange({ ...filters, price: Number(e.target.value) })
        }
        className="p-3 border rounded w-full md:w-96 h-14 text-lg"
      />
    </div>
  );
}
