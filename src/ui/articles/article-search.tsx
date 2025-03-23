'use client';
import { Award, Calendar, ChevronDown, ChevronUp, PawPrint, Trophy } from 'lucide-react';
import Button from '../primitives/button';
import { useContext, useState } from 'react';
import { ActiveState, FilterOption } from './types';
import { ICON_STYLES } from './constants';
import { ArticleContext } from '@/context/article-context';
import YearsDropdown from './years-dropdown';

const ArticleSearch = () => {
  const context = useContext(ArticleContext);
  const [active, setActive] = useState<ActiveState>({
    restrict: null,
    year: null,
  });
  const [pickYear, setPickYear] = useState(false);

  if (!context) return <span>Context is missing</span>;

  const { setSearchOption, year, setYear } = context;
  const options: FilterOption[] = [
    {
      name: 'Závody',
      icon: (
        <Trophy
          className={ICON_STYLES.base}
          fill={active.restrict === 'Závody' ? '#86efac' : 'transparent'}
        />
      ),
      color: 'green',
      variant: 'restrict',
    },
    {
      name: 'Štěňata',
      icon: (
        <PawPrint
          className={ICON_STYLES.base}
          fill={active.restrict === 'Štěňata' ? '#e879f9' : 'transparent'}
        />
      ),
      color: 'purple',
      variant: 'restrict',
    },
    {
      name: 'Výstava',
      icon: (
        <Award
          className={ICON_STYLES.base}
          fill={active.restrict === 'Výstava' ? '#fde047' : 'transparent'}
        />
      ),
      color: 'yellow',
      variant: 'restrict',
    },
    {
      name: 'Roky',
      icon: <Calendar className={ICON_STYLES.base} />,
      variant: 'year',
    },
  ];

  const handleActive = (option: FilterOption) => {
    if (option.variant === 'restrict') {
      if (option.name !== active.restrict) {
        setSearchOption((prev) => (option.name !== 'Roky' ? option.name : prev));
        setActive((prev) => {
          return {
            restrict: option.name === 'Roky' ? prev.restrict : option.name,
            year: prev.year,
          };
        });
      } else {
        setActive({ restrict: null, year: null });
        setSearchOption(null);
      }
    }

    if (option.variant === 'year') {
      setPickYear(!pickYear);
    }
  };
  return (
    <div className="inline-flex gap-2 relative w-fit article-search">
      {options.map((option) => (
        <Button
          key={option.name}
          active={option.name === active.restrict}
          colored={option.color}
          leftIcon={option.icon}
          rightIcon={
            option.name === 'Roky' &&
            (pickYear ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)
          }
          onClick={() => handleActive(option)}
        >
          {option.name === 'Roky' ? (year ? year : 'Roky') : option.name}
        </Button>
      ))}
      {pickYear && <YearsDropdown setYear={setYear} setPickYear={setPickYear} />}
    </div>
  );
};

export default ArticleSearch;
