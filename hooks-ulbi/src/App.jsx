import { useState } from "react";
import { ErrorList } from "./components/ErrorList";
import { useError } from "./hooks/useError";

function App() {
  const [errors, setErrors] = useState([]);
  const validator = () => {
    setErrors(["123", "321"]);
  };

  const err = useError(errors);

  const IsError = ({ children }) => {
    return err.check().length ? children : null;
  };

  return (
    <div>
      <IsError>
        <ErrorList errors={errors}/>
      </IsError>
      <button onClick={() => validator()}>Check</button>
    </div>
  );
}

export default App;
