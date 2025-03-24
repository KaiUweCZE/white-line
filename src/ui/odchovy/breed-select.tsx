import { useState } from 'react';

const BreedSelect = ({
  setActualBreed,
  actualBreed,
}: {
  setActualBreed: (breed: string) => void;
  actualBreed: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const breeds = ['Bílý švýcarský ovčák', 'Německý ovčák', 'Corgi'];
  const handleSelect = (breed: string) => {
    setActualBreed(breed);
    setIsOpen(false);
  };

  return (
    <div className="relative w-64">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-full
          px-4 py-2.5
          flex items-center justify-between
          bg-white
          border border-gray-200
          rounded-md
          hover:bg-gray-50
          focus:outline-none focus:ring-2 focus:ring-gray-200
          transition-all duration-200
        "
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby="breed-select-label"
      >
        <span id="breed-select-label" className="text-gray-800 text-sm font-medium">
          {actualBreed}
        </span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-labelledby="breed-select-label"
          className="
          absolute
          w-full
          mt-1
          bg-white
          border border-gray-200
          rounded-md
          shadow-sm
          z-50
          transition-all
          duration-200
        "
        >
          {breeds.map((breed) => (
            <li key={breed} role="option" aria-selected={actualBreed === breed}>
              <button
                onClick={() => handleSelect(breed)}
                className="
                w-full
                px-4
                py-2
                flex
                items-center
                justify-between
                text-sm
                hover:bg-gray-50
                transition-colors
                duration-150
                text-left
              "
              >
                <span
                  className={`font-medium ${
                    actualBreed === breed ? 'text-gray-900' : 'text-gray-600'
                  }`}
                >
                  {breed}
                </span>
                {actualBreed === breed && (
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BreedSelect;
