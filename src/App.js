// import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Company } from "./components/Company/Company";
import { Job } from "./components/Job/Job";
import { Job2 } from "./components/Job2/Job2";
import { Slider } from "./components/Slider/Slider";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Company />
      <Job />
      <Job2 />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
