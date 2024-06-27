import About from "./components/About";
import Hero from "./components/Hero";
import Loader from "./components/Loader/Loader";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import Projects from "./components/Projects";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000); // Simulate a 2-second loading time (adjust as needed)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" bg-bgClr dark:bg-bgClrDark select-none">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <NavBar />
          <Hero />
          <About />
          <Projects />
        </>
      )}
    </div>
  );
}

export default App;
