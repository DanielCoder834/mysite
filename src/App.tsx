import "./App.css";
import { useState } from "react";
import { Routes, Route, Outlet, NavLink } from "react-router-dom";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";

export default function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            {/* <Route path="coding_skills" element={<CodingSkills />} /> */}
          </Route>
        </Routes>
      </div>
    </>
  );
}

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navListClasses = `links navbar-links ${menuOpen ? "open" : ""}`;

  return (
    <div>
      <header className="nav-wrapper">
        <nav className="navbar">
          <div
            className="menu"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={navListClasses}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            {/* <li><NavLink to="/coding_skills">Experience</NavLink></li> */}
            {/* <li><NavLink to="/connect">Connect</NavLink></li> */}
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
