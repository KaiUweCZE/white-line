import { Dispatch, SetStateAction, useRef } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';
import { articleYears } from '@/types/types';

const YearsDropdown = ({
  setYear,
  setPickYear,
}: {
  setYear: Dispatch<SetStateAction<number | null>>;
  setPickYear: Dispatch<SetStateAction<boolean>>;
}) => {
  const dropdownRef = useRef<HTMLUListElement | null>(null);
  const years = ['vše', ...articleYears];

  useClickOutside(dropdownRef, () => setTimeout(() => setPickYear(false), 100));

  return (
    <ul
      ref={dropdownRef}
      className="absolute dropdown z-10 bg-stone-50 primary-scroll secondary-shadow"
    >
      {years.map((year) => (
        <li
          key={year}
          className="cursor-pointer px-2 hover:bg-stone-200"
          onClick={() => setYear(typeof year === 'number' ? year : null)}
        >
          {year}
        </li>
      ))}
    </ul>
  );
};

export default YearsDropdown;
