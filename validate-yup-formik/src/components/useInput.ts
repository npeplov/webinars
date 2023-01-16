import { useState } from "react";

export const useInput = (initialValue: any, array: any[]) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: any) => {
    setValue(e.target.value);
    array.push(e.target.value);
  };
  return { value, onChange };
};
