import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface AuthContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function AuthContainer({
  children,
  className,
  ...rest
}: AuthContainerProps) {
  return (
    <>
      <div
        {...rest}
        className={twMerge("flex flex-col p-10 max-w-96 mx-auto", className)}
      >
        {children}
      </div>
    </>
  );
}
