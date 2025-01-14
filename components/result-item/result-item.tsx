import Image from "next/image";
import { twMerge } from "tailwind-merge";
import CustomLink from "../link/custom-link";

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
          <CustomLink
            href={url}
            target="_blank"
            className="font-semibold font-mono"
          >
            {title}
          </CustomLink>
          <p className="italic text-sm">{subtitle}</p>
        </div>
      </div>
    </>
  );
}
