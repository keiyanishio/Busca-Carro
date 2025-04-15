export default function SearchBar({ filters, onChange, onSearch }) {
  return (
    <div className="p-4 flex flex-col items-center gap-6 w-full max-w-7xl">
      <div className="flex flex-row gap-4 w-full flex-wrap justify-center">
        <input
          type="text"
          placeholder="Nome (ex: BYD)"
          value={filters.name}
          onChange={(e) => onChange({ ...filters, name: e.target.value })}
          className="p-3 border rounded h-14 text-lg w-64"
        />
        <input
          type="text"
          placeholder="Modelo (ex: Dolphin)"
          value={filters.model}
          onChange={(e) => onChange({ ...filters, model: e.target.value })}
          className="p-3 border rounded h-14 text-lg w-64"
        />
        <input
          type="text"
          placeholder="Localidade (ex: São Paulo)"
          value={filters.location}
          onChange={(e) => onChange({ ...filters, location: e.target.value })}
          className="p-3 border rounded h-14 text-lg w-64"
        />
        <input
          type="number"
          placeholder="Preço máximo (ex: 100000)"
          value={filters.price || ""}
          onChange={(e) =>
            onChange({ ...filters, price: Number(e.target.value) })
          }
          className="p-3 border rounded h-14 text-lg w-64"
        />
      </div>

      <button
        onClick={onSearch}
        className="bg-blue-600 text-white font-semibold rounded px-6 h-14 text-lg hover:bg-blue-700 transition w-full md:w-1/5"
      >
        Buscar
      </button>
    </div>
  );
}
