import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface ResultItemProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  subtitle: string;
  className?: string;
}

export default function ResultItem({
  image,
  title,
  subtitle,
  className,
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
          <p>{title}</p>
          <p>{subtitle}</p>
        </div>
      </div>
    </>
  );
}
