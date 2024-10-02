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
                                <h1>Climate <span class="mask">Change</span></h1>
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
                        <p>
                            Climate change is the long-term shift in Earth's average temperature and weather patterns. It can be caused by natural factors, such as volcanic eruptions or changes in solar radiation, but the current warming trend is primarily driven by human activities. These shifts can be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels like coal, oil, and gas.
                        </p>
                        <h1>
                            <span class="material-symbols-outlined">
                                grade
                            </span>
                            Causes of Climate Change
                        </h1>
                        <p class="first">
                            The Earth's climate has undergone natural fluctuations throughout its history, but the current rate of warming is unprecedented. While natural factors can influence climate, human activities are the observed changes' primary driver.
                        </p>
                        <strong>
                            Natural Factors
                        </strong>
                        <p>
                            <span class="material-symbols-outlined">
                                arrow_forward_ios
                            </span>
                            <strong>Solar Variations:</strong> Changes in the Sun's energy output can affect Earth's temperature. However, these variations are too small to explain the current warming trend.
                        </p>
                        <p>
                            <span class="material-symbols-outlined">
                                arrow_forward_ios
                            </span>
                            <strong>Volcanic Activity:</strong> Large volcanic eruptions can release significant amounts of ash and sulfur dioxide into the atmosphere, temporarily cooling the planet. However, these effects are typically short-lived.
                        </p>
                        <p>
                            <span class="material-symbols-outlined">
                                arrow_forward_ios
                            </span>
                            <strong>Earth's Orbit:</strong> Milankovitch cycles, which describe changes in Earth's orbit and tilt, can influence climate over long periods. However, these cycles are too slow to account for recent warming.
                        </p>
                        <strong>
                            Human-Induced Factors
                        </strong>
                        <p>
                            <span class="material-symbols-outlined">
                                arrow_forward_ios
                            </span>
                            <strong>Greenhouse Gas Emissions:</strong> The burning of fossil fuels (coal, oil, and natural gas) releases large amounts of greenhouse gases, such as carbon dioxide and methane, into the atmosphere. These gases trap heat, causing global temperatures to rise.   The primary cause of climate change is the excessive emission of greenhouse gases, such as carbon dioxide, methane, and nitrous oxide, into the atmosphere. These gases trap heat from the sun, leading to a warming effect.
                        </p>
                        <p>
                            <span class="material-symbols-outlined">
                                arrow_forward_ios
                            </span>
                            <strong>Deforestation:</strong> Forests absorb carbon dioxide, helping to regulate the climate. Deforestation releases stored carbon and reduces the Earth's ability to absorb greenhouse gases.  Cutting down forests reduces their ability to absorb atmospheric carbon dioxide, contributing to the greenhouse effect.
                        </p>
                        <p>
                            <span class="material-symbols-outlined">
                                arrow_forward_ios
                            </span>
                            <strong>Industrial Processes:</strong> Industrial activities, such as manufacturing and agriculture, release various pollutants and greenhouse gases into the atmosphere.   Industrial processes, such as burning fossil fuels for energy, release large amounts of greenhouse gases.
                        </p>
                        <p>
                            <span class="material-symbols-outlined">
                                arrow_forward_ios
                            </span>
                            <strong>Agriculture:</strong> Agricultural practices, including livestock farming and fertilizer use, can contribute to greenhouse gas emissions.
                        </p>
                        <p>
                            The overwhelming scientific consensus is that human activities, primarily the burning of fossil fuels, are the main cause of the current climate change. While natural factors can influence climate, the magnitude and rate of the observed warming can only be explained by human-induced greenhouse gas emissions.
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