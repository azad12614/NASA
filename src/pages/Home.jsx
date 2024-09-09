import React from 'react'
import "./Home.css"
import Nav from '../components/Nav.jsx';
import Hero from '../components/Hero.jsx';
import Lesson from '../components/Lesson.jsx';
import Project from '../components/Project.jsx';
import Footer from '../components/Footer.jsx';
import Top from '../components/Top.jsx';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <Hero></Hero>
            <Lesson></Lesson>
            <Project></Project>
            <Footer></Footer>
            <Top></Top>
        </div>
    )
}

export default Home