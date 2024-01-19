import { CardTags } from "./Cards";
import "./style_components/About.css";

export default function About() {
  return (
    <div>
      <div className="space2"></div>
      <h3 className="about">
        Hi, my name is Daniel, a computer science student studying at
        Northeastern University. I started coding four years ago, and I have
        continued to pursue my passions by working on projects and learning
        coding concepts in my free time. From these projects, I have learned
        about AI, Game Programming, Web Development, and other interesting
        computer science topics.
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
