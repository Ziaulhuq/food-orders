import Header from "./components/Header";
import Meals from "./components/Meals";

function App() {
  return (
    <div className="mt-4 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <Header />
      <Meals />
    </div>
  );
}

export default App;
