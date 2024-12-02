"use client";
import React from "react";
import {
  CalendarDays,
  Award,
  Heart,
  Medal,
  ArrowUpRight,
  Camera,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { dataDogs } from "../data/data-dogs";
import Image from "next/image";

const DogDetail = () => {
  const params = useParams();
  const name = params.name;

  const data = dataDogs.find((e) => e.name === "Frederika");

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero sekce */}
      <div className="flex flex-col md:flex-row gap-8 mb-16">
        <div className="flex-shrink-0 mx-auto md:mx-0">
          {data?.portrait && (
            <Image
              src={data?.portrait}
              alt={`${data?.name} photo`}
              height={400}
              width={300}
              className="rounded-lg secondary-shadow"
            />
          )}
        </div>

        <div className="flex-grow">
          <div className="max-w-2xl">
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-2">{data?.name}</h1>
              <p className="text-lg text-gray-600">{data?.type}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <Globe className="w-5 h-5" />
                  <span>{data?.breed}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <CalendarDays className="w-5 h-5" />
                  <span>{data?.birth}</span>
                </div>
                <p className="text-sm text-gray-500">{data?.registration}</p>
                <p className="text-gray-600">{data?.description}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h2 className="text-sm font-medium text-gray-500 mb-2">
                    ZDRAVOTNÍ VYŠETŘENÍ
                  </h2>
                  <p className="text-gray-900">
                    {data?.health && data.health.join(", ")}
                  </p>
                </div>
                <div>
                  <h2 className="text-sm font-medium text-gray-500 mb-2">
                    ZKOUŠKY
                  </h2>
                  <p className="text-gray-900">
                    {data?.exams && data.exams.join(", ")}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <div className="flex gap-4 flex-wrap">
                {data?.titles &&
                  data.titles.map((title, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full"
                    >
                      <Medal className="w-4 h-4" />
                      <span className="text-sm font-medium">{title}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sekce s vrhy */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Vrhy</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.breeds &&
            data.breeds.map((breed) => (
              <Link
                href={breed.href}
                key={breed.name}
                className="group relative"
              >
                <Image src={breed.image} alt={`${breed.name} photo`} />
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">{breed.name}</h3>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-900 transition-colors" />
                </div>
              </Link>
            ))}
        </div>
      </div>

      {/* Výstavy a závody */}
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Award className="w-6 h-6" />
            Výstavy
          </h2>
          <div className="space-y-6">
            {data?.contests &&
              data.contests.map((contest, index) => (
                <div
                  key={`${contest.date}${index}`}
                  className="border-b pb-4 last:border-0"
                >
                  <p className="text-sm text-blue-600 mb-1">{contest.date}</p>
                  <p className="font-medium mb-1">{contest.name}</p>
                  <p className="text-gray-600">{contest.grade}</p>
                </div>
              ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Medal className="w-6 h-6" />
            Závody
          </h2>
          <div className="space-y-6">
            {data?.races &&
              data.races.map((competition, index) => (
                <div
                  key={`${competition.date}${index}`}
                  className="border-b pb-4 last:border-0"
                >
                  <p className="text-sm text-blue-600 mb-1">
                    {competition.date}
                  </p>
                  <p className="font-medium mb-1">{competition.name}</p>
                  <p className="text-gray-600">{competition.result}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogDetail;

/*
const dogData = {
    name: "Frederika",
    type: "chovná fena",
    breed: "bílý švýcarský ovčák",
    registration: "Z Reg/ACO/3556/15/18",
    birthDate: "27.5.2015",
    description: "dlouhosrstá, 61 cm, plnochrupá, skus nůžkový",
    health: {
      tests: ["HD A", "ED 0", "MDR1 +/+", "DM N/N"],
      exams: ["IHT3-TS", "IHT2-TS", "IHT1-TS", "HWT", "NHAT"]
    },
    titles: [
      "Český šampion práce",
      "Mistr ČR v pasení TS 2022"
    ],
    litters: [
      { id: "ch", name: "Vrh Ch", imageUrl: "" },
      { id: "i", name: "Vrh I", imageUrl: "" },
      { id: "m", name: "Vrh M", imageUrl: "" }
    ],
    shows: [
      {
        date: "12.6.2021",
        name: "Klubová výstava Jedovnice",
        grade: "V- P. Řehánek"
      },
      {
        date: "11.1.2020",
        name: "Hanácká národní výstava",
        grade: "V1, CAC- Ing. L. Jančík"
      },
      {
        date: "9.6.2019",
        name: "Klubová výstava Nová Živohošť",
        grade: "V1, CAC- Ing. L. Jančík"
      }
    ],
    competitions: [
      {
        date: "6.6.2022",
        name: "Pentecost-Trial- IHT3",
        result: "86%- velmi dobrá- 4. místo"
      },
      {
        date: "5.6.2022",
        name: "Pentecost-Trial- IHT3",
        result: "64%- SAT- 5. místo"
      },
      {
        date: "28.5.2022",
        name: "Těně- IHT3",
        result: "75%- dobrá- 7. místo"
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">

      <div className="flex flex-col md:flex-row gap-8 mb-16">
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <div className="w-[300px] h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">
            <Camera className="w-12 h-12 text-gray-400" />
          </div>
        </div>
        
        <div className="flex-grow">
          <div className="max-w-2xl">
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-2">{dogData.name}</h1>
              <p className="text-lg text-gray-600">{dogData.type}</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <Globe className="w-5 h-5" />
                  <span>{dogData.breed}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <CalendarDays className="w-5 h-5" />
                  <span>{dogData.birthDate}</span>
                </div>
                <p className="text-sm text-gray-500">{dogData.registration}</p>
                <p className="text-gray-600">{dogData.description}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <h2 className="text-sm font-medium text-gray-500 mb-2">ZDRAVOTNÍ VYŠETŘENÍ</h2>
                  <p className="text-gray-900">{dogData.health.tests.join(", ")}</p>
                </div>
                <div>
                  <h2 className="text-sm font-medium text-gray-500 mb-2">ZKOUŠKY</h2>
                  <p className="text-gray-900">{dogData.health.exams.join(", ")}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <div className="flex gap-4 flex-wrap">
                {dogData.titles.map((title, index) => (
                  <div key={index} className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full">
                    <Medal className="w-4 h-4" />
                    <span className="text-sm font-medium">{title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Odchovy</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dogData.litters.map((litter) => (
            <a 
              href={`/odchovy/${litter.id}`}
              key={litter.id}
              className="block bg-white rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center mb-3">
                <Camera className="w-8 h-8 text-gray-400" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{litter.name}</h3>
                <ArrowUpRight className="w-5 h-5 text-gray-400" />
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div className="bg-white rounded-lg overflow-hidden">
          <h2 className="text-xl font-bold p-6 flex items-center gap-2 border-b">
            <Award className="w-5 h-5 text-blue-500" />
            Výstavy
          </h2>
          <div className="divide-y">
            {dogData.shows.map((show, index) => (
              <div key={index} className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium mb-1">{show.name}</p>
                    <p className="text-gray-600">{show.grade}</p>
                  </div>
                  <span className="text-sm text-blue-600">{show.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden">
          <h2 className="text-xl font-bold p-6 flex items-center gap-2 border-b">
            <Dumbbell className="w-5 h-5 text-green-500" />
            Závody
          </h2>
          <div className="divide-y">
            {dogData.competitions.map((competition, index) => (
              <div key={index} className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium mb-1">{competition.name}</p>
                    <p className="text-gray-600">{competition.result}</p>
                  </div>
                  <span className="text-sm text-blue-600">{competition.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
*/
