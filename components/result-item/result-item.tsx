import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface ResultItemProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  subtitle: string;
  className?: string;
  url: string;
}

export default function ResultItem({
  image,
  title,
  subtitle,
  className,
  url,
  ...rest
}: ResultItemProps) {
  return (
    <>
      <div
        {...rest}
        className={twMerge("p-1 flex gap-3 items-center", className)}
      >
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="size-20 rounded-full"
        />
        <div>
          <Link
            href={url}
            target="_blank"
            className="font-semibold font-mono  text-blue-600 hover:opacity-90"
          >
            {title}
          </Link>
          <p className="italic text-sm">{subtitle}</p>
        </div>
      </div>
    </>
  );
}
