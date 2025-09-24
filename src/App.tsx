import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import BodyHome from "./components/BodyHome/BodyHome";

const App = () => {
  return (
    <>
      <div className="w-full h-full">
        <TopBar />
      </div>
      <div>
        <BodyHome />
      </div>
    </>
  );
};

export default App;
