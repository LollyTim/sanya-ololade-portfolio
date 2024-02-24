import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className=" bg-bgClr dark:bg-bgClrDark select-none">
      <NavBar />
      <Hero />
    </div>
  );
}

export default App;
