import React from 'react';

import ca13 from "../assets/ca13.png";
import forum from "../assets/forum.png";
import g13 from "../assets/g13.png";
import goal13 from "../assets/goal 13.png";
import lesson from "../assets/lesson.png";
import w_view from "../assets/nasa.png";
import thumb from "../assets/poster.png";
import quiz from "../assets/quiz.png";
import vdo from '../assets/video.mp4';
import w_ll from "../assets/wll.png";

import Cards from '../components/Cards.jsx';
import "./Lesson.css";

const Lesson = () => {
    const Cards_info = [
        {
            img: goal13,
            to: 'Goal13',
            title: 'Climate Action',
            span: 'Goal 13',
            text: 'Take Urgent Action T0 Combat Climate Change And Its Impacts.',
            show: 'show',
            show2: 'none',
        },
        {
            img: lesson,
            to: 'Plan',
            title: 'Lesson Plan',
            span: 'High School Guide',
            text: 'This guide provides a collection of resources and strategies to facilitate climate change education.',
            show: 'none',
            show2: 'show',
        },
        {
            img: quiz,
            to: 'quiz',
            title: 'Quiz',
            span: 'Test',
            text: 'Take a Quiz On Climate Change And Its Impacts.',
            show: 'show',
            show2: 'none',
        },
        {
            img: forum,
            to: '/',
            title: 'Discussion',
            span: 'Forum',
            text: 'Be ready to tell your perspective.',
            show: 'none',
            show2: 'show',
        },
        {
            img: w_ll,
            to: 'https://worldslargestlesson.globalgoals.org/',
            title: 'Worlds Largest Lesson',
            span: 'Website',
            text: 'To promote use of the Sustainable Development Goals in learning.',
            show: 'show',
            show2: 'none',
            target: '_blank'
        },
        {
            img: w_view,
            to: 'https://worldview.earthdata.nasa.gov/',
            title: 'World View',
            span: 'Website',
            text: `Visually explore the past and the present of this dynamic planet from a satellite's perspective.`,
            show: 'none',
            show2: 'show',
            target: '_blank'
        },
    ];
    return (
        <>
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
            <Cards cards_info={Cards_info}></Cards>
        </>
    )
}

export default Lesson