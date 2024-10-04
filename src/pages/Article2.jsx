import React from 'react'
import './Article.css'
import Nav from '../components/Nav.jsx';
import Footer from '../components/Footer.jsx';
import Top from '../components/Top.jsx';
import Quiz from '../components/Quiz.jsx';
import { Link } from 'react-router-dom';

const Article = () => {
    const questions = [
        {
            question: "What is the primary difference between climate and weather?",
            answers: [
                { text: "A. Climate is a long-term pattern, while weather is a short-term condition.", correct: true },
                { text: "B. Climate is influenced by human activities, while weather is not.", correct: false },
                { text: "C. Climate is always changing, while weather remains constant.", correct: false },
                { text: "D. Climate is measured in degrees, while weather is measured in inches.", correct: false }
            ]
        },
        {
            question: "Which of the following is the main cause of current climate change?",
            answers: [
                { text: "A. Volcanic eruptions", correct: false },
                { text: "B. Changes in Earth's orbit", correct: false },
                { text: "C. Human activities", correct: true },
                { text: "D. Solar variations", correct: false }
            ]
        },
        {
            question: "What is the greenhouse effect?",
            answers: [
                { text: "A. A natural process that keeps Earth warm", correct: true },
                { text: "B. A human-made phenomenon that cools the planet", correct: false },
                { text: "C. A weather pattern that occurs in tropical regions", correct: false },
                { text: "D. A scientific theory about the Earth's age", correct: false }
            ]
        },
        {
            question: "Which of the following is a major consequence of climate change?",
            answers: [
                { text: "A. Rising sea levels", correct: true },
                { text: "B. Decreasing temperatures", correct: false },
                { text: "C. Fewer natural disasters", correct: false },
                { text: "D. All of the above", correct: false }
            ]
        },
        {
            question: "What can individuals do to help reduce their carbon footprint?",
            answers: [
                { text: "A. Drive less and walk or bike more often", correct: false },
                { text: "B. Consume less meat and dairy", correct: false },
                { text: "C. Use energy-efficient appliances", correct: false },
                { text: "D. All of the above", correct: true }
            ]
        }
    ];
    return (
        <>
            <Nav></Nav>
            <div class="articles">
                <article>
                    <div class="article-header">
                        <div class="headline">
                            <p>Introduction to</p>
                            {/* <h1>Climate Change</h1> */}
                            <div class="wrapper">
                                <img src="https://svgshare.com/i/1B3E.svg" alt="earth icon" />
                                <h1>Climate <span class="mask">Data</span></h1>
                            </div>
                            <div class="byline">Historical climate data</div>
                        </div>
                        <div class="image2"></div>
                    </div>
                    <div class="neo-video-player">
                        <iframe
                            src="https://www.youtube.com/embed/GGtAilkWTtI?si=aJl3OFyoUoncaZVA">
                        </iframe>
                    </div>

                    <div class="article-text">

                        <h1>
                            <span class="material-symbols-outlined">
                                cyclone
                            </span>
                            Historical climate data
                        </h1>
                        <p class="first">Historical climate data is crucial for understanding past climate conditions and how they've changed over time. This data allows scientists to identify trends, patterns, and natural variations in climate, providing valuable insights into the factors driving current climate change.</p>
                        <h1>
                            <span class="material-symbols-outlined">
                                cyclone
                            </span>
                            Key sources of historical climate data include:
                        </h1>
                        <p>
                            <strong>Temperature records:</strong> These records, often collected from weather stations, provide information about average temperatures, temperature extremes, and temperature trends over time.
                        </p>
                        <p>
                            <strong>Ice cores:</strong> Ice cores are drilled from glaciers and ice sheets, providing a record of past atmospheric composition, temperature, and precipitation. By analyzing the trapped air bubbles and isotopic composition of the ice, scientists can reconstruct climate conditions dating back hundreds of thousands of years.
                        </p>
                        <p>
                            <strong>Tree rings:</strong> Tree rings, formed annually, can provide information about past climate conditions. The width and density of tree rings can reveal details about temperature, precipitation, and other environmental factors.
                        </p>

                        <h1>
                            <span class="material-symbols-outlined">
                                cyclone
                            </span>
                            Temperature Records
                        </h1>
                        <p class="first">
                            Temperature records are measurements of the average, highest, and lowest temperatures at a particular location over some time. These records are typically collected from weather stations using thermometers.
                        </p>
                        <strong>
                            Why are temperature records important?
                        </strong>
                        <p>
                            Temperature records provide valuable insights into climate patterns and trends. <u>They help us understand:</u>
                        </p>
                        <p>
                            <span class="material-symbols-outlined">
                                check
                            </span>
                            <strong>Average Temperatures:</strong> The typical temperature conditions in a region.
                        </p>
                        <p>
                            <span class="material-symbols-outlined">
                                check
                            </span>
                            <strong>Temperature Extremes:</strong> The hottest and coldest temperatures ever recorded.
                        </p>
                        <p>
                            <span class="material-symbols-outlined">
                                check
                            </span>
                            <strong>Temperature Trends:</strong> How temperatures have changed over time, including long-term warming or cooling trends.
                        </p>
                        <strong>Real-world example:</strong>
                        <p class='first'>
                            Let's consider the temperature records of Chattogram, Bangladesh. Over the past century, the average temperature in Chattogram has increased by around 0.5 degrees Celsius. This indicates a warming trend in the region, consistent with the global trend of rising temperatures. Additionally, the number of days with extreme heat has also increased.
                        </p>
                        <strong>Importance of temperature records:</strong>
                        <p>
                            <strong>Climate change research:</strong> Temperature records are essential for studying climate change and understanding its causes and impacts.
                        </p>
                        <p>
                            <strong>Weather forecasting:</strong> Accurate temperature records are crucial for weather forecasting and predicting extreme weather events.
                        </p>
                        <p>
                            <strong>Agriculture and planning:</strong> Farmers and urban planners use temperature data to make decisions about planting, harvesting, and infrastructure development.
                        </p>
                        <p>
                            By analyzing temperature records, we can gain a better understanding of our planet's climate and the challenges posed by climate change.
                        </p>
                        <strong>
                            Reconstructing Past Climates with Ice Cores and Tree Rings
                        </strong>
                        <p class='first'>
                            Ice cores and tree rings serve as historical archives, offering valuable insights into Earth's past climate. By analyzing these natural wonders, scientists can reconstruct temperature, precipitation, and atmospheric composition over long periods.
                        </p>
                        <p>
                            <strong>Ice Cores:</strong>
                            <ul>
                                <li>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    <strong>Trapped Air Bubbles: </strong>These bubbles act as a time capsule, preserving the atmospheric composition from the time the ice formed. Analyzing them reveals past concentrations of greenhouse gases like carbon dioxide and methane.
                                </li>
                                <li>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    <strong>Stable Isotopes: </strong>The ratio of oxygen and hydrogen isotopes in ice cores tells a story about past temperatures. Heavier isotopes indicate colder periods, while lighter isotopes point to warmer times.
                                </li>
                                <li>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    <strong>Dust and Volcanic Ash: </strong>These inclusions provide clues about past volcanic eruptions and atmospheric circulation patterns.
                                </li>
                            </ul>
                        </p>
                        <p>
                            <strong>Tree Rings:</strong>
                            <ul>
                                <li>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    <strong>Width and Density: </strong>Wider, denser rings signify favorable growth conditions – warm temperatures and sufficient rainfall. Narrower, less dense rings suggest harsher times – cold temperatures or droughts.
                                </li>
                                <li>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    <strong>Stable Isotopes: </strong>Similar to ice cores, tree rings can be analyzed for stable isotopes of carbon and oxygen, revealing past temperature, precipitation, and atmospheric composition.
                                </li>
                            </ul>
                        </p>
                        <p>
                            By combining evidence from both ice cores and tree rings, scientists create detailed reconstructions of past climates. These reconstructions help us identify trends and patterns, leading to a better understanding of the causes and impacts of climate change.
                        </p>

                        <div class="game">
                            <h1>
                                <span class="material-symbols-outlined">
                                    stadia_controller
                                </span>
                                Game:
                            </h1>
                            <ul>
                                <li>
                                    <span class="material-symbols-outlined">
                                        strategy
                                    </span>
                                    <a href='https://ig.ft.com/climate-game/' target='_blank'>Climate Game</a>
                                </li>
                                <li>
                                    <span class="material-symbols-outlined">
                                        strategy
                                    </span>
                                    <a href='https://climate.nasa.gov/interactives/climate-time-machine/?intent=021' target='_blank'>Climate Time Machine</a>
                                </li>
                                <li>
                                    <span class="material-symbols-outlined">
                                        strategy
                                    </span>
                                    <a href='https://www.washingtonpost.com/climate-environment/interactive/2024/global-heat-sea-surface-temperature-records/' target='_blank'>Guess the Heat</a>
                                </li>
                            </ul>

                            <h1>
                                <span class="material-symbols-outlined">
                                    rewarded_ads
                                </span>
                                Activity:
                            </h1>
                            <ul>
                                <li>
                                    <span class="material-symbols-outlined">
                                        strategy
                                    </span>
                                    <a href='https://climatekids.nasa.gov/menu/make/' target='_blank'>NASA KIDS</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </article >
            </div >
            <div class="arrowBtn">
                <Link to='/article/1' class="previousBtn">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="nones"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="9.85851" cy="1.61321" r="1.5" fill="white"></circle>
                        <circle cx="13.9811" cy="1.61321" r="1.5" fill="white"></circle>
                        <circle cx="5.73583" cy="5.5566" r="1.5" fill="white"></circle>
                        <circle cx="9.85851" cy="5.5566" r="1.5" fill="white"></circle>
                        <circle cx="1.61321" cy="9.5" r="1.5" fill="white"></circle>
                        <circle cx="5.73583" cy="9.5" r="1.5" fill="white"></circle>
                        <circle cx="5.73583" cy="13.4434" r="1.5" fill="white"></circle>
                        <circle cx="9.85851" cy="13.4434" r="1.5" fill="white"></circle>
                        <circle cx="9.85851" cy="17.3868" r="1.5" fill="white"></circle>
                        <circle cx="13.9811" cy="17.3868" r="1.5" fill="white"></circle>
                    </svg>
                </Link>
                <Link to='/article/3' class="nextBtn">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="nones"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="1.61321" cy="1.61321" r="1.5" fill="white"></circle>
                        <circle cx="5.73583" cy="1.61321" r="1.5" fill="white"></circle>
                        <circle cx="5.73583" cy="5.5566" r="1.5" fill="white"></circle>
                        <circle cx="9.85851" cy="5.5566" r="1.5" fill="white"></circle>
                        <circle cx="9.85851" cy="9.5" r="1.5" fill="white"></circle>
                        <circle cx="13.9811" cy="9.5" r="1.5" fill="white"></circle>
                        <circle cx="5.73583" cy="13.4434" r="1.5" fill="white"></circle>
                        <circle cx="9.85851" cy="13.4434" r="1.5" fill="white"></circle>
                        <circle cx="1.61321" cy="17.3868" r="1.5" fill="white"></circle>
                        <circle cx="5.73583" cy="17.3868" r="1.5" fill="white"></circle>
                    </svg>
                </Link>
            </div>
            <Quiz values={questions}></Quiz>
            <Footer></Footer>
            <Top></Top>
        </>
    )
}

export default Article