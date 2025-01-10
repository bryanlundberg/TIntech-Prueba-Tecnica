import { useEffect, useRef, useState } from "react";

export default function useDebounce({
  initialValue,
  delay,
}: {
  initialValue: string;
  delay: number;
}) {
  const intervalId = useRef<number | undefined>(undefined);
  const [value, setValue] = useState(initialValue);
  const [debounceValue, setDebounceValue] = useState<string | undefined>("");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    intervalId.current = window.setTimeout(() => {
      if (value !== "") {
        setDebounceValue(value);
      }
    }, delay);

    return () => {
      clearTimeout(intervalId.current);
    };
  }, [value, delay]);

  return { handleChange, debounceValue };
}
