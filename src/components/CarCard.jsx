export default function CarCard({ Name, Model, Image, Price, Location }) {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden w-80">
      <img
        src={Image}
        alt={`${Name} ${Model}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-xl font-bold">
          {Name} {Model}
        </h2>
        <p className="text-gray-600">Local: {Location}</p>
        <p className="text-green-700 font-semibold text-lg">
          R$ {Price.toLocaleString("pt-BR")}
        </p>
      </div>
    </div>
  );
}
