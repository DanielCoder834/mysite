import "./Cards.css";
import "./Projects.css";
import { Cards } from "./Cards";

export default function Projects() {
  let linearArr: any = [
    "LinearPerceptron",
    "linear perceptron",
    "Linear Perceptron",
    "A basic AI algorithm used for classifying different data points",
    ["AI", "Java", "Processing"],
    "FirstAI",
    false,
    "",
    false,
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
    false,
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
    false,
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
    false,
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
    true,
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
    false,
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
    false,
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
    true,
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
    true,
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
            forSchool={object[8]}
            key={i}
          />
        );
      })}
    </div>
  );
}
