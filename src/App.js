import About from "./Components/About";
import { Project } from "./Components/Project";
import { Hero } from "./Components/Hero";
import { Nav } from "./Components/Nav";
import { Footer } from "./Components/Footer";
function App() {
  /*
  1. hero section with my picure and how to react out
  2. about and tech i use 
  3. projects i did 
  4.  education 
  */

  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
