import { cva } from "class-variance-authority";
import { Loader } from "lucide-react";

// Definimos las variantes del spinner
const spinnerVariants = cva(
  "text-muted-foreground animate-spin",
  {
    variants: {
      size: {
        default: "h-4 w-4",
        sm: "h-2 w-2",
        lg: "h-6 w-6",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
);

// Componente Spinner sin JSX
export const Spinner = (props) => {
  const { size } = props || {};
  const className = spinnerVariants({ size });

  return Loader({ className });
  // O alternativamente si prefieres usar React.createElement explícitamente:
  // return React.createElement(Loader, { className });
};
