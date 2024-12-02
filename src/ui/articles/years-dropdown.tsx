import { Dispatch, SetStateAction } from "react";

const YearsDropdown = ({
  setYear,
}: {
  setYear: Dispatch<SetStateAction<number | null>>;
}) => {
  const years = ["vše", 2024, 2023, 2022, 2021, 2020];

  return (
    <ul className="absolute dropdown z-10 bg-stone-50 primary-scroll secondary-shadow">
      {years.map((year) => (
        <li
          key={year}
          className="cursor-pointer px-2 hover:bg-stone-200"
          onClick={() => setYear(typeof year === "number" ? year : null)}
        >
          {year}
        </li>
      ))}
    </ul>
  );
};

export default YearsDropdown;
