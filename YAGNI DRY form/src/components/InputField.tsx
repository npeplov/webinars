export const InputField = ({ label, type, onChange, value }: any) => {
  return (
    <label>
      {label}
      <input
        type={type}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </label>
  );
};
