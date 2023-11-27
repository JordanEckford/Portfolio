import "./App.css";
import { Header } from "./assets/Components/Header";
import { Navbar } from "./assets/Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Skills } from "./assets/Components/Skills";
import { Projects } from "./assets/Components/Projects";
import { Contact } from "./assets/Components/Contact";
import { Home } from "./assets/Components/Home";
import { SideBar } from "./assets/Components/Sidebar";
import { PixelPlunge } from "./assets/Components/ProjectCards/PixelPlunge";
import { NCNews } from "./assets/Components/ProjectCards/NCNews";

function App() {
 return (
  <div className="mx-auto bg-white p-0 m-0 ">
   <SideBar />
   <Header />
   <Navbar />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/projects/pixelplunge" element={<PixelPlunge />} />
    <Route path="/projects/ncnews" element={<NCNews />} />
   </Routes>
  </div>
 );
}

export default App;
