import React from 'react'
import "./Project.css"

import goal13 from "../assets/goal 13.png"
import lesson from "../assets/lesson.png"
import quiz from "../assets/quiz.png"
import wll from "../assets/wll.png"
import nasa from "../assets/nasa.png"
import forum from "../assets/forum.png"
import { Link } from 'react-router-dom'

const Project = () => {
    return (
        <div class="project" id="Project">
            <div class="info">
                <div class="items">
                    <img src={goal13} alt="" />
                    <div class="dis">
                        <a href="https://www.globalgoals.org/goals/13-climate-action/" target="">CLIMATE ACTION</a>
                        <span>Goal 13</span>
                        <p>Take Urgent Action T0 Combat Climate Change And Its Impacts.</p>

                    </div>
                </div>
                <div class="items">
                    <div class="dis">
                        <a href="" target="">Lesson Plan</a>
                        <span>High School Guide</span>
                        <p>This guide provides a collection of resources and strategies to facilitate climate change education.</p>

                    </div>
                    <img src={lesson} alt="" />
                </div>
                <div class="items">
                    <img src={quiz} alt="" />
                    <div class="dis">
                        <Link to="quiz">Quiz</Link>
                        <span>TEST</span>
                        <p>Take a Quiz On Climate Change And Its Impacts.</p>

                    </div>
                </div>
                <div class="items">
                    <div class="dis">
                        <a href="https://worldslargestlesson.globalgoals.org/" >Worlds Largest Lesson</a>
                        <span>Website</span>
                        <p>To promote use of the Sustainable Development Goals in learning.</p>

                    </div>
                    <img src={wll} alt="" />
                </div>
                <div class="items">
                    <img src={nasa} alt="" />
                    <div class="dis">
                        <a href="https://worldview.earthdata.nasa.gov/" >World View</a>
                        <span>Website</span>
                        <p>Visually explore the past and the present of this dynamic planet from a satellite's perspective.</p>

                    </div>
                </div>
                <div class="items">
                    <div class="dis">
                        <a href="" >Discussion</a>
                        <span>Forum</span>
                        <p>Be ready to tell your perspective.</p>

                    </div>
                    <img src={forum} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Project