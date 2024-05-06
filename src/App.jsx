import "./App.css";
import { Header } from "./Components/Header";
import { Navbar } from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Skills } from "./Components/Skills";
import { Projects } from "./Components/Projects";
import { Contact } from "./Components/Contact";
import { Home } from "./Components/Home";
import { SideBar } from "./Components/Sidebar";
import { SingleProject } from "./Components/SingleProject";
import { About } from "./Components/About";
import { Experience } from "./Components/Experience";
import { SingleExperience } from "./Components/SingleExperience";

function App() {
 return (
  <div className="mx-auto bg-white p-0 m-0 mb-12">
   <SideBar />
   <Header />
   <Navbar />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/experience" element={<Experience />} />
    <Route path="/experiences/:experience_name" element={<SingleExperience />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/projects/:project_name" element={<SingleProject />} />
   </Routes>
  </div>
 );
}

export default App;
