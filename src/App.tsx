import './App.css'
// import * as React from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
// import {useScript} from "./hooks/useScripts.js";

const spaceBetweenBarAndTitle = <div className="space1"></div>

export default function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="work" element={<Work />} />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<Connect />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}



function Layout() {
  return <div>
    <header>
      <div className="navbar">
        <div className="logo">
          <header>
            <ul className="links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/connect">Connect</Link></li>
            </ul>
          </header>

        </div>
      </div>
    </header>
    <Outlet />
  </div>;
}


function Home() {

  // function useScript(url:string, isWeird:boolean, integrity:string, crossOrigin:string) {
  //   useEffect(() => {
  //     const script = document.createElement('script');

  //     script.src = url;
  //     script.async = true;
  //     if(isWeird) {
  //       script.integrity = integrity;
  //       script.crossOrigin = crossOrigin; 
  //       script.defer; 
  //     }
  //     document.body.appendChild(script);

  //     return () => {
  //       document.body.removeChild(script);
  //     }
  //   }, [url]);
  // };


  const titleName = <h1 className="nameTitle">Daniel Kaplan</h1>;
  const titleDescript = <h2 className="description">Computer Science Student + Coding Enthusiast</h2>

  // useScript('src/webgl/webgl.js', false, "", "");
  // useScript('https://cdnjs.cloudflare.com/ajax/libs/gl-matrix/2.8.1/gl-matrix-min.js', 
  // true, "sha512-zhHQR0/H5SEBL3Wn6yYSaTTZej12z0hVZKOv3TwCUXT1z5qeqGcXJLLrbERYRScEDDpYIJhPC1fk31gqR783iQ==",
  // "anonymous");

  // integrity="sha512-zhHQR0/H5SEBL3Wn6yYSaTTZej12z0hVZKOv3TwCUXT1z5qeqGcXJLLrbERYRScEDDpYIJhPC1fk31gqR783iQ=="
  // crossorigin="anonymous"
  // defer

  return (
    <div>
      {spaceBetweenBarAndTitle}
      {titleName}
      {titleDescript}
      <div className="icons">
        <a href="https://github.com/DanielCoder834"><i className="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/daniel-kaplan-269093226/"><i className="fa-brands fa-linkedin"></i></a>
      </div>

      {/* <canvas id="glcanvas" width="640" height="480"></canvas> */}
    </div>
  );
}

// export function Canvas() {
//   const ref = useRef<HTMLCanvasElement>(null)

//   useEffect(() => {
//     if (ref.current) {
//       const gl = ref.current.getContext('2d')
//       const canvas = document.querySelector("#glcanvas");
//       // Initialize the GL context

//       // Only continue if WebGL is available and working
//       if (gl === null) {
//         alert(
//           "Unable to initialize WebGL. Your browser or machine may not support it.",
//         );
//         return;
//       }

//       // Set clear color to black, fully opaque
//       gl.clearColor(0.0, 0.0, 0.0, 1.0);
//       // Clear the color buffer with specified clear color
//       gl.clear(gl.COLOR_BUFFER_BIT);
//     }
//   }, [])

//   return <canvas ref={ref} />
// }

function About() {
  return (
    <div>
      {spaceBetweenBarAndTitle}
      <h3 className='about'>When I was 15, I started coding it was fun. So I kept on coding until I got to college
        and chose to pursue my passions. I am currently a computer science student and hope to continue working
        on coding projects. I hope to one day get a job in the software industry and improve my skills as a
        programmer.
      </h3>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <Cards imageUrl={"/LinearPerceptron.png"}
        imageAlt="linear perceptron" cardTitle="Linear Perceptron"
        cardDescription="A basic AI algorithm used for classifying different data points"
        tagStrArr={["AI", "Java", "Processing"]}
        githubUrl="FirstAI"
        isGame={false} />

      <Cards imageUrl={"/ProjectBoost.png"}
        imageAlt="rocket ship platform game" cardTitle="Project Boost"
        cardDescription="One of my first games I made alongside a Udemy tutorial"
        tagStrArr={["Gaming", "C#", "Unity"]}
        githubUrl="Project-Boost-Game"
        isGame={true}
        itchUrl="project-boost" />

      <Cards imageUrl={"/WholesomeBot.png"}
        imageAlt="heart icon" cardTitle="Wholesome Bot"
        cardDescription="A Simple Discord Bot used for gifs and basic replying capabilities"
        tagStrArr={["Discord.js", "Javascript"]}
        githubUrl="The_Wholesome_Bot"
        isGame={false} />

      <Cards imageUrl={"/DnDBot.png"}
        imageAlt="20-sided dice" cardTitle="DnD Bot"
        cardDescription="A Simple Discord Bot that gives the output of a random die rolls for various types of die"
        tagStrArr={["Discord.js (version 12)", "Javascript"]}
        githubUrl="The_DND_Bot"
        isGame={false} />

      <Cards imageUrl={"/Wordle.png"}
        imageAlt="3 by 4 Wordle Game with the first row filled with the word Hi" cardTitle="Wordle"
        cardDescription="We were told to remake Worlde for my coding class I took in college using the coding language Racket"
        tagStrArr={["School", "Racket"]}
        githubUrl="Wordle-Racket"
        isGame={false} />

      <Cards imageUrl={"/NeuralNetwork.png"}
        imageAlt="Four rows with the top two rows showing numbers less than one but around 0.05 off while the bottom two show numbers greater than 0 but around 0.05 off"
        cardTitle="Neural Network"
        cardDescription="Following a tutorial series by the Code Train, I made this neural network that using supervised learning to get closer to either 0 or 1"
        tagStrArr={["Javascript", "AI"]}
        githubUrl="Neural-Network-1"
        isGame={false} />

      <Cards imageUrl={"/ArchGraph.png"}
        imageAlt="A graph of branching nodes"
        cardTitle="Arch Database"
        cardDescription="Following a tutorial series by Yoav Rubin, I made a stack-like database that allowed for getting, deleting, updating and adding elements"
        tagStrArr={["Clojure", "Database"]}
        githubUrl="ArchBase"
        isGame={false} />
      <Cards imageUrl={"/SeamCarver.png"}
        imageAlt="A picture of balloons with a red line going across the image"
        cardTitle="Seam Carver"
        cardDescription="Using convolutions and Minimum Spannning Trees, the program can crop lines horizontally and vertically that will effect the image the least"
        tagStrArr={["School", "Java (11)"]}
        githubUrl="SeamCarver"
        isGame={false} />
      <Cards imageUrl={"/MazeFill.png"}
        imageAlt="A maze with a path filled with a blue path from the top-left corner to the bottom-right corner 
        with some of the paths leading off from the blue path colored red."
        cardTitle="Maze Path"
        cardDescription="Using either BFS or DFS, a path from the start to the end of a randomly generated is found"
        tagStrArr={["School", "Java (11)"]}
        githubUrl="Maze_FIll"
        isGame={false} />
      {/* <Cards imageUrl={"public/TermHacker.png"}
        imageAlt="A maze with a path filled with a blue path from the top-left corner to the bottom-right corner 
        with some of the paths leading off from the blue path colored red."
        cardTitle="Maze Path"
        cardDescription="Using either BFS or DFS, a path from the start to the end of a randomly generated is found"
        tagStrArr={["School", "Java (11)"]}
        githubUrl="Maze_FIll"
        isGame={false} /> */}
    </div>
  );
}

function Work() {
  return (
    <div>
      <h2 className='work'>Please Hire Me ╰(・∇・╰)</h2>
    </div>
  );
}

function Connect() {
  return (
    <div>
      <h2 className='connect'>Message me on Linkedin if you want to chat :)</h2>
      {/* <Link to="/">Go to the home page</Link> */}

    </div>
  );
}

function Cards(props: any) {
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

            {props.tagStrArr.map(function (object: any, i: any) {
              return <CardTags tagName={object} key={i} />;
            })}
            {/* <span className="tag">Nature</span>

            <span className="tag">Lake</span> */}

            {/* <!-- A div with name class for the name of the card --> */}
            <div className="name">{props.cardTitle}</div>

            <p>{props.cardDescription}</p>
            <a className='githubRepo' href={`https://github.com/DanielCoder834/${props.githubUrl}`}>
              <button>Github Repo</button></a>
            {props.isGame &&
              <a className='itchBtn'
                href={`https://danieltheprogrammer.itch.io/${props.itchUrl}`}>
                <button>Itch.io</button></a>}
          </div>
        </div>
      </div>
    </div>
  )
}

function CardTags(props: any) {
  return (
    <span className="tag">{props.tagName}</span>
  )
}