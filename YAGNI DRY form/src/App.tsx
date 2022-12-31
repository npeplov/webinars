import { DRYForm } from "./components/DRYForm";

const App: React.FC = () => {
  const logInData = {
    nickname: "User",
    email: "user@gmail.com",
    password: "Reac5$$$",
  };

  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="container">
      <DRYForm initialData={logInData} onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
