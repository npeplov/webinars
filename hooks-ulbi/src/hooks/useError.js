import {  useEffect, useState } from "react";

export const useError = (errors) => {
  const [errorz, setErrorz] = useState(errors);

  useEffect(() => {
    setErrorz(errors)
  }, [errors]);

  const check = () => {
    return errorz;
  };

  const clear = () => {
    setErrorz([]);
  };

  return { clear, check };
};
