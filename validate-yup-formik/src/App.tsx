// import { Formik } from "formik";
// import * as yup from "yup";
import { useEffect, useState } from "react";
import "./App.css";
import { useInput } from "./components/useInput";
// import { IntputField } from "./components/IntputField";

function App() {
  // const validataionScheme = yup.object().shape({
  //   name: yup.string().required("Обазательно"),
  // });
  const [errors, setErrors] = useState(["123"])

  const inp = useInput("", errors)

  useEffect(() => {
    // setErrors([]);
    console.log(errors);
  }, [errors])
  

  return (
    <div>
      <input value={inp.value} onChange={inp.onChange}></input>


      {/* <div> */}
        {/* <Formik
        initialValues={{
          name: "",
          secondname: "",
          password: "",
          confirmPassword: "",
          email: "",
          confirmEmail: "",
        }}
        validateOnBlur
        onSubmit={(values) => console.log(values)}
        validationSchema={validataionScheme}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <div className="form">
            <IntputField
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
              errors={errors}
              touched={touched}
            />

            <button
              disabled={!isValid && !dirty}
              type={`submit`}
            >
              Send
            </button>
          </div>
        )}
      </Formik> */}
      {/* </div> */}
      
    </div>
  );
}

export default App;
