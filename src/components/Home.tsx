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
    width: "20em",
    height: "20em",
    display: "flex",
    flexDirection: "start",
    marginTop: "-3em",
  };

  return (
    <div>
      {spaceBetweenBarAndTitle}
      <div className="containerCatAndTitle">
        {titleName}
        <dotlottie-player
          className="cat"
          src="https://lottie.host/6119b7bc-2817-49e8-a0ea-927f605ee701/YeJ7iA9mzH.lottie"
          background="transparent"
          speed="1"
          style={catStyles}
          direction="1"
          mode="normal"
          loop
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
