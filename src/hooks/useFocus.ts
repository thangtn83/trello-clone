import { useEffect, useRef } from "react";

export const useFocus = () => {
  const ref = useRef<HTMLInputElement>({} as HTMLInputElement);
  useEffect(() => {
    ref.current?.focus();
  }, []);

  return ref;
};
