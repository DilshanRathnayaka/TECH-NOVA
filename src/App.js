import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Packages from "./components/Packages";
import Aboutus from "./components/Aboutus";
import Contactme from "./components/Contactme";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/packages" element={<Packages/>}/>
       <Route path="/aboutus" element={<Aboutus/>}/>
       <Route path="/contactme" element={<Contactme/>}/>
      </Routes>
      <Footer/>


    </div>
  );
}

export default App;
