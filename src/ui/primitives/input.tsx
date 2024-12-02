import { cn } from "@/lib/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { InputHTMLAttributes, ReactNode, forwardRef } from "react";

const inputVariants = cva(
  "w-full rounded-md border bg-transparent px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      intent: {
        default: "border-input",
        error: "border-destructive focus-visible:ring-destructive",
        success: "border-green-500 focus-visible:ring-green-500",
      },
      sizes: {
        sm: "h-8 text-xs",
        md: "h-10 text-sm max-w-64",
        lg: "h-12 text-base px-4",
      },
    },
    defaultVariants: {
      intent: "default",
      // size: "md",
    },
  }
);

type InputVariantProps = VariantProps<typeof inputVariants>;

// Rozšiřujeme základní interface o naše vlastní props
interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    InputVariantProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      intent,
      sizes,
      // width,
      leftIcon,
      rightIcon,
      label,
      error,
      helperText,
      type = "text",
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-1.5">
        {/* Label sekce */}
        {label && (
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
          </label>
        )}

        {/* Input wrapper pro ikony */}
        <div className="relative">
          {leftIcon && (
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              {leftIcon}
            </span>
          )}

          <input
            type={type}
            className={cn(
              inputVariants({ intent, sizes }),
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              className
            )}
            ref={ref}
            {...props}
          />

          {rightIcon && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              {rightIcon}
            </span>
          )}
        </div>

        {/* Error message nebo helper text */}
        {(error || helperText) && (
          <p
            className={cn(
              "text-sm",
              error ? "text-destructive" : "text-muted-foreground"
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

// Přidáváme display name pro React DevTools
Input.displayName = "Input";

export default Input;
