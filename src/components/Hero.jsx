import CA from "../assets/climate_action.png"
import "./Hero.css";


function Heros() {
    return (
        <>
            <section class="section-hero" id="Hero">
                <div class="heros">
                    <div class="hero-text-box">
                        <h1 class="heading-primary">
                            WELCOME TO THE Learn<strong>4</strong>Climate's LESSON!
                        </h1>
                        <p class="hero-description">
                            This lesson plan helps students learn about climate change. They will understand its causes, effects, and possible solutions. Students will also learn to think critically and become more aware of environmental issues. The goal is to help students become informed and engaged citizens who can help address climate change.
                        </p>
                        <a href="" target="_blank" class="enroll">
                            Start Learning
                        </a>
                    </div>
                    <div class="hero-img-box">
                        <img
                            src={CA}
                            alt="Climate Action LOGO"
                            className="hero-img"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Heros;  