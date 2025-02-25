import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact/Contact";
import Service from "./components/Service";
import Aboutus from "./components/Aboutus";
import Department from "./components/Departments";

function App() {
  return (
    <div>
      {/* Home Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* Contact routes */}
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>

       <Routes>
        <Route path="/service" element={<Service/>}/>
        <Route path="/about-us" element={<Aboutus/>}/>
        <Route path="/departments" element={<Department/>}/>
       </Routes>
    </div>
  );
}

export default App;
