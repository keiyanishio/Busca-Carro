import React from "react";

export default function CarCard({ name, model, price, location, image }) {
  return (
    <div className="border rounded shadow p-4 w-full max-w-sm">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded"
      />
      <div className="mt-2">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm text-gray-600">Modelo: {model}</p>
        <p className="text-sm">Local: {location}</p>
        <p className="text-md font-semibold">
          R$ {price.toLocaleString("pt-BR")}
        </p>
      </div>
    </div>
  );
}
