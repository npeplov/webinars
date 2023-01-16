import { useError } from "../hooks/useError";

export const ErrorList = ({errors}) => {
  const err = useError(errors)
  return (
    <>
      {err.check().map((er) => (
        <p key={er}>{er}</p>
      ))}
      <button onClick={()=>err.clear()}>Clear</button>
    </>
  );
};