import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({ className, ...rest }: InputProps) {
  return (
    <>
      <input
        {...rest}
        className={twMerge("border focus:outline-none p-2", className)}
      />
    </>
  );
}
