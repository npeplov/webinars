import { FormEvent, useState } from "react";

export const KISSForm = ({ initialData, onSubmit }: any) => {
  const [loginData, setLoginData] = useState(initialData);

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    onSubmit(loginData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Nickname
      <input
        value={loginData.nickname}
        onChange={(e) => setLoginData({ ...loginData, nickname: e.target.value })}
          />
      </label>
      <label>Email
      <input
        value={loginData.email}
        type="email"
        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
      />
      </label>
      <label>Password
      <input
        value={loginData.password}
        type="password"
        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
      />
      </label>
      <button>Submit</button>
    </form>
  );
};
