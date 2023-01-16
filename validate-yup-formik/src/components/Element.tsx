import { useState } from "react";

export const Element = (handleClick: any) => {
  const [state, setState] = useState(false);
  const paubliDate = 1;
  return <div>{paubliDate}</div>;
};
