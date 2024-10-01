import React from 'react'
import './Article.css'
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import Top from '../components/Top.jsx';

const Article = () => {
    return (
        <>
            <Nav></Nav>
            <div class="articles">
                <article>
                    <div class="article-header">
                        <div class="headline">
                            <p>Introduction to </p>
                            {/* <h1>Climate Change</h1> */}
                            <div class="wrapper">
                                <img src="https://svgshare.com/i/An7.svg" alt="water icon" />
                                <h1>Climate <span class="mask">change</span></h1>
                            </div>
                            <div class="byline">Defining Climate Change</div>
                        </div>
                        <div class="image"></div>
                    </div>
                    <div class="neo-video-player">
                        <iframe
                            src="https://www.youtube.com/embed/Sv7OHfpIRfU?si=CKly__-43qybdzwF">
                        </iframe>
                    </div>
                    <div class="article-text">
                        <h1>
                            <span class="material-symbols-outlined">
                                grade
                            </span>
                            Climate vs. weather
                        </h1>
                        <p class="first">Climate is the long-term average weather conditions in a particular region, typically measured over decades or centuries. It is influenced by various factors, including temperature, precipitation, wind, cloud cover, and ocean currents. Climate patterns are relatively stable over time but can change over geological timescales due to natural forces such as volcanic eruptions, changes in Earth's orbit, and solar variations.</p>
                        <p class="first">Weather, on the other hand, refers to the short-term atmospheric conditions at a specific location. It can change rapidly and unpredictably and is influenced by a variety of factors such as temperature, pressure, humidity, wind, and precipitation. Weather patterns can be influenced by natural and human-induced factors, varying significantly from day to day, week to week, and season to season.</p>
                        <h1>
                            <span class="material-symbols-outlined">
                                grade
                            </span>
                            What is climate change?
                        </h1>
                        <p class="first">
                            Climate change is a significant global issue that affects all aspects of our lives. It refers to long-term shifts in Earth's average temperature and weather patterns. In this lesson, we will explore the definition of climate change, its causes, and its impacts on our planet.
                        </p>
                        <p class="first">
                            Climate change is the long-term shift in Earth's average temperature and weather patterns. It can be caused by natural factors, such as volcanic eruptions or changes in solar radiation, but the current warming trend is primarily driven by human activities. These shifts can be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels like coal, oil, and gas.
                        </p>
                    </div>
                </article>
            </div>
            <Footer></Footer>
            <Top></Top>
        </>
    )
}

export default Article