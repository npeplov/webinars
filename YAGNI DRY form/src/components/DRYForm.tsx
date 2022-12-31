import { FormEvent, useState } from "react";
import { InputField } from "./InputField";

export const DRYForm = ({ initialData, onSubmit }: any) => {
  const [loginData, setLoginData] = useState(initialData);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(loginData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>DRY FORM</h1>

      <InputField
        label="Nickname"
        value={loginData.nickname}
        onChange={(nickname: any) => setLoginData({ ...loginData, nickname })}
      />

      <InputField
        type="email"
        label="Email"
        value={loginData.email}
        onChange={(email: any) => setLoginData({ ...loginData, email })}
      />

      <InputField
        type="password"
        label="Password"
        value={loginData.password}
        onChange={(password: any) => setLoginData({ ...loginData, password })}
      />
      <button>Submit</button>
    </form>
  );
};
