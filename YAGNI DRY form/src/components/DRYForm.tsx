import { FormEvent, useState } from "react";
import { InputField } from "./InputField";

export const DRYForm = ({ initialData, onSubmit }: any) => {
  const [loginData, setLoginData] = useState(initialData);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(loginData);
  };

  const handleChange = (fieldName: any) => (fieldValue: any) => {
    setLoginData({ ...loginData, [fieldName]: fieldValue });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>DRY FORM</h1>

      <InputField
        label="Nickname"
        value={loginData.nickname}
        onChange={handleChange('nickname')}
      />

      <InputField
        type="email"
        label="Email"
        value={loginData.email}
        onChange={handleChange('email')}
      />

      <InputField
        type="password"
        label="Password"
        value={loginData.password}
        onChange={handleChange('password')}
      />
      <button>Submit</button>
    </form>
  );
};
