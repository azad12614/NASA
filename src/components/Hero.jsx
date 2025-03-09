import CA from "../assets/climate_action.png";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="heros">
        {/* Text Content */}
        <div className="hero-text-box">
          <h1 className="heading-primary">
            WELCOME TO THE Learn<strong>4</strong>Climate's LESSON!
          </h1>
          <p className="hero-description">
            This lesson plan helps students learn about climate change. They
            will understand its causes, effects, and possible solutions.
            Students will also learn to think critically and become more aware
            of environmental issues. The goal is to help students become
            informed and engaged citizens who can help address climate change.
          </p>
          <Link to="/Goal13" className="enroll">
            Start Learning
          </Link>
        </div>

        {/* Image Content */}
        <div className="hero-img-box">
          <img
            src={CA}
            alt="Climate Action LOGO"
            className="hero-img"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
