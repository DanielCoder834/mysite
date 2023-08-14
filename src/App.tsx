import "./App.css";
import { useState } from "react";
import { Routes, Route, Outlet, NavLink } from "react-router-dom";

const spaceBetweenBarAndTitle = <div className="space1"></div>;

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

function Home() {
  const titleName = <h1 className="nameTitle">Daniel Kaplan</h1>;
  const titleDescript = (
    <h2 className="description">
      Computer Science Student + Coding Enthusiast
    </h2>
  );

  return (
    <div>
      {spaceBetweenBarAndTitle}
      {titleName}
      {titleDescript}
      <div className="icons">
        <a href="https://github.com/DanielCoder834">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/daniel-kaplan-269093226/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=danielkaplan812@gmail.com">
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>

      {/* <canvas id="glcanvas" width="640" height="480"></canvas> */}
    </div>
  );
}

function About() {
  return (
    <div>
      <div className="space2"></div>
      <h3 className="about">
        Hi, my name is Daniel, a computer science student studying at Northeastern University.
        I started coding four years ago, and I have continued to pursue
        my passions by working on projects and learning coding concepts in my
        free time. From these projects, I have learned about AI, Game
        Programming, Web Development, and other interesting computer science topics.
      </h3>
      <div className="aboutCard">
        <AboutCards
          a_title="Web Developer"
          a_tagStrArr={[
            "TypeScript",
            "JavaScript",
            "MongoDB",
            "Spring",
            "React",
            "Svelte",
            "PostgreSQL",
            "CSS",
            "BootStrap",
            "TailwindCSS",
            "Java",
            "Mongoose",
            "Netlify",
            "Express",
          ]}
          aboutProfs="Web Development is one of my most proficient skills as a programmer. I have followed various tutorials from frontend to backend to get more knowledge on the subject. 
           I strive to learn how to use new libraries and tools to assist me in my future project and career."
        />
        <AboutCards
          a_title="Game Programmer"
          a_tagStrArr={["Unity", "C#", "C++", "Java"]}
          aboutProfs="I got into coding by making a game, and I will never forget the joy of making that first game. I have made various games and I have continued to gain experience in the field. I would like to get more experience to make more games in the future."
        />
        <AboutCards
          a_title="AI Algorithmist"
          a_tagStrArr={[
            "AI",
            "Java",
            "Processing",
            "Javascript",
            "Neural Networks",
            "Linear Perceptron",
            "Linear Regression",
          ]}
          aboutProfs="I started to learn about AI from a youtube tutorial when I was in highschool. I thought it was fascinating how AI works and I made various AI-related projects. I then went to university and took a class on AI, where I deepened my knowledge on the subject."
        />
        <AboutCards
          a_title="Misc Skills"
          a_tagStrArr={[
            "Git",
            "Physics",
            "Node.js",
            "Discord.js",
            "Racket",
            "Clojure",
            "Git Bash",
          ]}
          aboutProfs="Over the years, I have tinkered with different libraries and languages as a way to get a better grasp on new subjects. I hope to continue to learn more and try new avenues of CS."
        />
      </div>
    </div>
  );
}

function AboutCards(props: any) {
  return (
    <div>
      {/* <!-- A div with card class for the card  --> */}
      <div className="a_card">
        {/* <!-- A div with card__details class to hold the details in the card  --> */}
        <div className="a_name">{props.a_title}</div>
        <div className="a_card__details">
          {/* <!-- Span with tag class for the tag --> */}
          <div className="a_allTags">
            {props.a_tagStrArr.map(function (object: any, i: any) {
              return <CardTags tagName={object} className="a_tag" key={i} />;
            })}
          </div>
          <p>{props.aboutProfs}</p>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  let linearArr: any = [
    "LinearPerceptron",
    "linear perceptron",
    "Linear Perceptron",
    "A basic AI algorithm used for classifying different data points",
    ["AI", "Java", "Processing"],
    "FirstAI",
    false,
    "",
  ];

  let boostArr: any = [
    "ProjectBoost",
    "rocket ship platform game",
    "Project Boost",
    "One of my first games I made alongside a Udemy tutorial",
    ["Gaming", "C#", "Unity"],
    "Project-Boost-Game",
    true,
    "project-boost",
  ];

  let wholesomeArr: any = [
    "WholesomeBot",
    "heart icon",
    "Wholesome Bot",
    "A Simple Discord Bot used for gifs and basic replying capabilities",
    ["Discord.js", "Javascript"],
    "The_Wholesome_Bot",
    false,
    "",
  ];

  let dndArr: any = [
    "DnDBot",
    "20-sided dice",
    "DnD Bot",
    "A Simple Discord Bot that gives the output of a random die rolls for various types of die",
    ["Discord.js (version 12)", "Javascript"],
    "The_DND_Bot",
    false,
    "",
  ];

  let wordleArr: any = [
    "Wordle",
    "3 by 4 Wordle Game with the first row filled with the word Hi",
    "Wordle",
    "We were told to remake Worlde for my coding class I took in college using the coding language Racket",
    ["School", "Racket"],
    "Wordle-Racket",
    false,
    "",
  ];

  let neuralArr: any = [
    "NeuralNetwork",
    "Four rows with the top two rows showing numbers less than one but around 0.05 off while the bottom two show numbers greater than 0 but around 0.05 off",
    "Neural Network",
    "Following a tutorial series by the Code Train, I made this neural network that using supervised learning to get closer to either 0 or 1",
    ["Javascript", "AI"],
    "Neural-Network-1",
    false,
    "",
  ];

  let archArr: any = [
    "ArchGraph",
    "A graph of branching nodes",
    "Arch Database",
    "Following a tutorial series by Yoav Rubin, I made a stack-like database that allowed for getting, deleting, updating and adding elements",
    ["Clojure", "Database"],
    "ArchBase",
    false,
    "",
  ];

  let seamArr: any = [
    "SeamCarver",
    "A picture of balloons with a red line going across the image",
    "Seam Carver",
    "Using convolutions and Minimum Spannning Trees, the program can crop lines horizontally and vertically that will effect the image the least",
    ["School", "Java (11)"],
    "SeamCarver",
    false,
    "",
  ];

  let mazeArr: any = [
    "MazeFill",
    "A maze with a path filled with a blue path from the top-left corner to the bottom-right corner with some of the paths leading off from the blue path colored red.",
    "Maze Path",
    "Using either BFS or DFS, a path from the start to the end of a randomly generated is found",
    ["School", "Java (11)"],
    "Maze_FIll",
    false,
    "",
  ];

  let cardArr: any = [
    linearArr,
    boostArr,
    wholesomeArr,
    dndArr,
    wordleArr,
    neuralArr,
    archArr,
    seamArr,
    mazeArr,
  ];

  return (
    <div>
      {cardArr.map(function (object: any, i: any) {
        return (
          <Cards
            imageUrl={`/${object[0]}.png`}
            imageAlt={object[1]}
            cardTitle={object[2]}
            cardDescription={object[3]}
            tagStrArr={object[4]}
            githubUrl={object[5]}
            isGame={object[6]}
            itchUrl={object[7]}
            key={i}
          />
        );
      })}
    </div>
  );
}

function Cards(props: any) {
  const tagStrArr = Array.from(props.tagStrArr);
  return (
    <div>
      {/* A div with container id to hold the card */}
      <div id="container">
        {/* <!-- A div with card class for the card  --> */}
        <div className="card">
          <img src={`${props.imageUrl}`} alt={`${props.imageAlt}`} />

          {/* <!-- A div with card__details class to hold the details in the card  --> */}
          <div className="card__details">
            {/* <!-- Span with tag class for the tag --> */}

            {tagStrArr.map(function (object: any, i: any) {
              return <CardTags tagName={object} className="tag" key={i} />;
            })}

            {/* <!-- A div with name class for the name of the card --> */}
            <div className="name">{props.cardTitle}</div>

            <p>{props.cardDescription}</p>
            <a
              className="githubRepo"
              href={`https://github.com/DanielCoder834/${props.githubUrl}`}
            >
              <button>Github Repo</button>
            </a>
            {props.isGame && (
              <a
                className="itchBtn"
                href={`https://danieltheprogrammer.itch.io/${props.itchUrl}`}
              >
                <button>Itch.io</button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function CardTags(props: any) {
  return <span className={props.className}>{props.tagName}</span>;
}
