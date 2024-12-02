"use client";
import { breedDetails } from "@/ui/odchovy/data/breed-details";
import { ChevronLeft, Heart, Camera, Calendar, Shield } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

const BreedDetail = () => {
  const params = useParams();
  const id = params.id;

  const data = breedDetails.find((breed) => id === breed.id);

  const parents = [{ ...data?.father }, { ...data?.mother }];
  const litterData = {
    litterName: "N",
    birthDate: "15. dubna 2024",
    mother: {
      name: "Chessie Whiteline Czech",
      healthTests: ["HD A", "ED 0/0", "DNA testováno", "MDR1 +/+"],
      age: 4,
      titles: ["Český šampion", "PRA rcd2 normal"],
    },
    father: {
      name: "Bastien Altája",
      healthTests: ["HD A", "ED 0/0", "DNA testováno", "MDR1 +/-"],
      age: 5,
      titles: ["Český grand šampion", "PRA rcd2 normal"],
    },
    puppies: [
      { name: "Nero", sex: "pes", color: "bílá", status: "rezervován" },
      { name: "Newton", sex: "pes", color: "bílá", status: "volný" },
      { name: "Nobel", sex: "pes", color: "bílá", status: "rezervován" },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Navigace zpět */}
      <a
        href="/odchovy"
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 group"
      >
        <ChevronLeft className="w-5 h-5 mr-1 transition-transform group-hover:-translate-x-1" />
        <span>Zpět na odchovy</span>
      </a>

      {/* Hlavička vrhu */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-2">{data?.name}</h1>
        <p className="text-gray-600">Narození: {litterData.birthDate}</p>
      </div>

      {/* Sekce rodičů */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {parents.map((parent) => (
          <div
            key={parent.name}
            className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
          >
            <div className="grid p-6">
              <h2 className="text-2xl font-semibold mb-4">{parent.name}</h2>
              {parent.images && (
                <Image
                  src={parent.images[0]}
                  alt="parentos"
                  width={600}
                  height={400}
                  className="w-[500px] h-[335px] rounded-lg"
                />
              )}

              <h3 className="text-xl mb-4">{parent?.name}</h3>
              <div className="space-y-3">
                <div className="space-y-2 text-gray-600">
                  {["HD A", "ED 0/0", "DNA testováno", "MDR1 +/+"].map(
                    (test, index) => (
                      <p key={`t${index}`} className="flex items-center">
                        <Shield className="w-4 h-4 mr-2 text-blue-500" /> {test}
                      </p>
                    )
                  )}
                </div>
                <div className="space-y-2 text-gray-600 pt-2">
                  {["chapmion", "žampion"].map((title, index) => (
                    <p key={index} className="flex items-center">
                      <Heart className="w-4 h-4 mr-2 text-rose-500" /> {title}
                    </p>
                  ))}
                </div>
                <p className="flex items-center text-gray-600 pt-2">
                  <Calendar className="w-4 h-4 mr-2 text-green-500" /> {5} roky
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sekce štěňat */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Štěňata</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {litterData.puppies.map((puppy) => (
            <div
              key={puppy.name}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-4">
                <div className="bg-gray-100 rounded-lg h-48 mb-4 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{puppy.name}</h3>
                <div className="space-y-1">
                  <p className="text-gray-600">{puppy.sex}</p>
                  <p className="text-gray-600">Barva: {puppy.color}</p>
                  <p
                    className={`text-sm font-medium ${
                      puppy.status === "rezervován"
                        ? "text-orange-600"
                        : "text-green-600"
                    }`}
                  >
                    {puppy.status.toUpperCase()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Galerie */}
      <div>
        <h2 className="text-3xl font-bold mb-8">Galerie</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
            >
              <Camera className="w-8 h-8 text-gray-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreedDetail;
