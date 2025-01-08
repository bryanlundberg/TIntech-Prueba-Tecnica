import Link, { LinkProps } from "next/link";
import { twMerge } from "tailwind-merge";

interface CustomLinkProps
  extends LinkProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export default function CustomLink({
  children,
  className,
  href,
  ...rest
}: CustomLinkProps) {
  return (
    <Link
      {...rest}
      className={twMerge(
        "text-blue-500 hover:text-blue-700 hover:cursor-pointer hover:underline",
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
