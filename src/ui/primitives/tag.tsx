import { cn } from '@/lib/utils/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import { HTMLAttributes, ReactNode } from 'react';

const tagVariants = cva('article-tag', {
  variants: {
    variant: {
      puppies: 'bg-fuchsia-200/60 text-fuchsia-800 border border-fuchsia-200',
      races: 'bg-teal-200/60 text-teal-800 border border-teal-200',
      exhibition: 'bg-amber-200/60 text-amber-800 border border-amber-200',
    },
    size: {
      sm: 'text-xs px-2 py-0.5',
      md: 'text-sm px-3 py-1',
      lg: 'text-base px-4 py-1.5',
    },
    // Přidáme možnost pro různé tvary
    shape: {
      pill: 'rounded-full',
      rounded: 'rounded-md',
      none: '',
    },
    // Přidáme možnost pro různé styly ohraničení
    bordered: {
      true: 'border',
      false: 'border-0',
    },
  },
  defaultVariants: {
    variant: 'puppies',
    size: 'md',
    shape: 'none',
    bordered: true,
  },
});

// Opravíme typy
interface TagProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof tagVariants> {
  // Zjednodušíme props na to, co skutečně potřebujeme
  icon?: ReactNode; // Jeden slot pro ikonu
  onRemove?: () => void; // Možnost odstranění tagu
  disabled?: boolean; // Pro případné disabled stavy
}

const Tag = ({
  className,
  variant,
  size,
  shape,
  bordered,
  icon,
  onRemove,
  disabled,
  children,
  ...props
}: TagProps) => {
  return (
    <mark
      className={cn(
        tagVariants({ variant, size, shape, bordered }),
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      {...props}
    >
      {/* Ikona na začátku */}
      {icon && <span className="mr-1.5 -ml-1 inline-flex items-center">{icon}</span>}

      {/* Hlavní obsah tagu */}
      {children}

      {/* Tlačítko pro odstranění, pokud je požadováno */}
      {onRemove && !disabled && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="ml-1.5 -mr-1 p-0.5 hover:bg-black/10 rounded-full transition-colors"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L13 13M1 13L13 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </mark>
  );
};

Tag.displayName = 'Tag';

export default Tag;
