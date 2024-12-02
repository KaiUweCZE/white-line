import { cn } from "@/lib/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, ReactNode } from "react";

const buttonVariants = cva(
  `inline-flex relative items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50`,
  {
    variants: {
      intent: {
        primary: "",
        secondary: "",
      },
      colored: {
        green:
          "outline-green-300 before:bg-green-300 hover:bg-green-300/20 data-[active=true]:bg-green-300/30 duration-300",
        purple:
          "outline-fuchsia-300 hover:bg-fuchsia-300/20 data-[active=true]:bg-fuchsia-300/30 duration-300",
        yellow:
          "outline-yellow-300 hover:bg-yellow-300/20 data-[active=true]:bg-yellow-300/30 duration-300",
        none: "",
      },
      active: {
        true: "outline outline-1",
      },
      size: {
        sm: "w-fit h-fit px-3 py-1 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-6 text-lg",
      },
      variant: {
        clean: "",
        outlined: "border-2",
      },
      animation: {
        undeline: "underline-button",
        none: "",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "clean",
      intent: "primary",
      animation: "none",
      colored: "none",
    },
  }
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: boolean;
  loadingText?: string;
}

const Button = ({
  className,
  intent,
  size,
  animation,
  variant,
  leftIcon,
  rightIcon,
  isLoading,
  loadingText,
  children,
  active,
  colored,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        buttonVariants({ intent, size, variant, animation, active, colored }),
        isLoading && "relative",
        className
      )}
      data-active={active}
      disabled={isLoading || props.disabled}
      {...props}
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
    </button>
  );
};

export default Button;
