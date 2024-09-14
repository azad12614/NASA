import React from 'react'
import "./Lesson.css"
import g13 from "../assets/g13.png";
import ca13 from "../assets/ca13.png";
import thumb from "../assets/poster.png";
import vdo from '../assets/video.mp4'

const Lesson = () => {
    return (
        <div class="lesson">
            <h1>About Lesson</h1>
            <div class="Info">
                <div class="box text-center" dir="ltr">
                    <h4 class="display-2 text-center main">About Lesson</h4>
                    <div class="neo-video-player" id="popout-video-player">
                        <video class="video-element" id="video-element" poster={thumb} controls>
                            <source src={vdo} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <img src={ca13} class="ca13" />
                <img src={g13} class="g13" />
                <p>
                    <strong>T</strong>his comprehensive guide provides educators with a curated collection of resources and strategies to facilitate inquiry-based climate change education (mainly about goal 13, Climate Action of the Sustainable Development Goals). By integrating interdisciplinary perspectives, real-world applications, and student-centered learning, teachers can create engaging and impactful lessons. The guide outlines nine key inquiries, each designed to foster critical thinking, curiosity, and a sense of agency. These inquiries delve into various aspects of climate change, from its causes and consequences to potential solutions and ethical considerations. Through a structured process of provocation, question generation, understanding assessment, knowledge building, guided learning, and consolidation, students will develop a deeper understanding of the complexities of climate change and its implications for their future.
                </p>
            </div>
        </div>
    )
}

export default Lesson