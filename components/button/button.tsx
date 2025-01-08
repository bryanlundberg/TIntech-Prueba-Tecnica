import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
export default function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={twMerge(
        "p-3 bg-red-600 hover:opacity-80 text-white rounded-sm w-fit text-sm",
        className
      )}
    >
      {children}
    </button>
  );
}
