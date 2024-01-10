import "./Home.css";
import "@dotlottie/player-component";

export default function Home() {
  const spaceBetweenBarAndTitle = <div className="space1"></div>;
  const titleName = <h1 className="nameTitle">Daniel Kaplan</h1>;
  const titleDescript = (
    <h2 className="description">
      Computer Science Student + Coding Enthusiast
    </h2>
  );

  let catStyles = {
    width: "300px",
    height: "300px",
    marginTop: "-20px",
    alignItems: "center",
    color: "#071952",
  };

  return (
    <div className="homePage">
      {spaceBetweenBarAndTitle}
      <div className="containerCatAndTitle">
        {titleName}
        <dotlottie-player
          className="cat"
          src="https://lottie.host/55f9f6fe-fab8-42f2-a9b7-e1c2cb466c71/A0eCweoGzb.json"
          background="transparent"
          speed="1"
          style={catStyles}
          direction="1"
          mode="normal"
          // loop
          autoplay
        />
      </div>
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
