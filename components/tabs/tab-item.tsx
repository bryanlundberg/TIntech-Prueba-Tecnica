import { twMerge } from "tailwind-merge";

interface TabItemProps extends React.HTMLAttributes<HTMLDivElement> {
  active: boolean;
  label: string;
}

export default function TabItem({ active, label, ...rest }: TabItemProps) {
  return (
    <>
      <div
        {...rest}
        className={twMerge(
          "hover:cursor-pointer select-none",
          active && "border-b-2 border-red-500"
        )}
      >
        {label}
      </div>
    </>
  );
}
