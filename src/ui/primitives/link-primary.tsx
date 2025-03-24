import { cn } from '@/lib/utils/cn';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

interface LinkPrimaryProps {
  children: React.ReactNode;
  href: string;
  isLoading?: boolean;
  loadingText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
}

const LinkPrimary = ({
  children,
  href,
  isLoading,
  loadingText,
  leftIcon,
  rightIcon,
  className,
}: LinkPrimaryProps) => {
  return (
    <Link
      href={href}
      className={cn(
        `inline-flex relative rounded-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`,
        'bg-sky-100/30 backdrop-blur-sm hover:bg-sky-400/60 duration-300 border border-sky-200/30',
        'w-fit h-fit px-3 py-1 text-sm',
        'justify-center items-center',
        className
      )}
    >
      {isLoading ? (
        <>
          <span className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="h-5 w-5" />
          </span>
          <span className="opacity-0">{loadingText || children}</span>
        </>
      ) : (
        <>
          {leftIcon && <span className="mr-2">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </>
      )}
    </Link>
  );
};

export default LinkPrimary;
