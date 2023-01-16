export const IntputField = ({handleChange, handleBlur, values, errors, touched}: any) => {
  
  return (
    <p>
      <label htmlFor="name">Name</label>
      <input
        className={`input`}
        type={`text`}
        name={`name`}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
      />
      {touched.name && errors.name && <p className={`error`}>{errors.name}</p>}
    </p>
  );
};
