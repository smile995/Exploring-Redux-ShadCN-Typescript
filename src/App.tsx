import Container from "./components/TodoComponents/Container";

const App = () => {
  return (
    <div className="max-w-5/6 mx-auto">
      <h1 className="text-4xl font-bold text-center my-5  ">
       Todo Application
      </h1>
      <div>
        <Container />
      </div>
    </div>
  );
};

export default App;
