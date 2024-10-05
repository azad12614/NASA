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
            question: "What is the primary driver of climate change, according to the scientific consensus?",
            answers: [
                { text: "A. Natural variations in Earth's climate", correct: false },
                { text: "B. Human activities", correct: true },
                { text: "C. Solar radiation", correct: false },
                { text: "D. Volcanic eruptions", correct: false }
            ]
        },
        {
            question: "Which of the following organizations has endorsed the scientific consensus on climate change?",
            answers: [
                { text: "A. American Association for the Advancement of Science (AAAS)", correct: true },
                { text: "B. Flat Earth Society", correct: false },
                { text: "C. Tobacco Industry Research Group", correct: false },
                { text: "D. Fossil Fuel Industry Association", correct: false }
            ]
        },
        {
            question: "What is the primary role of scientists in addressing climate change?",
            answers: [
                { text: "A. Spreading misinformation", correct: false },
                { text: "B. Promoting fossil fuel use", correct: false },
                { text: "C. Researching and developing solutions", correct: true },
                { text: "D. Denying the existence of climate change", correct: false }
            ]
        },
        {
            question: "What is the primary goal of the Paris Agreement?",
            answers: [
                { text: "A. Increasing greenhouse gas emissions", correct: false },
                { text: "B. Promoting fossil fuel use", correct: false },
                { text: "C. Limiting global temperature increase to well below 2 degrees Celsius", correct: true },
                { text: "D. Denying the existence of climate change", correct: false }
            ]
        },
        {
            question: "Which of the following is NOT a challenge faced in implementing the Paris Agreement?",
            answers: [
                { text: "A. Sufficient ambition in emissions reduction targets", correct: false },
                { text: "B. Financial gap to support climate action", correct: false },
                { text: "C. Lack of scientific consensus on climate change", correct: true },
                { text: "D. Implementation challenges in individual countries", correct: false }
            ]
        },
        {
            question: "What is the primary purpose of national climate policies?",
            answers: [
                { text: "A. Promoting fossil fuel use", correct: false },
                { text: "B. Denying the existence of climate change", correct: false },
                { text: "C. Addressing climate change through various strategies", correct: true },
                { text: "D. Increasing greenhouse gas emissions", correct: false }
            ]
        },
        {
            question: "Which of the following is NOT a potential benefit of corporate social responsibility (CSR) in addressing climate change?",
            answers: [
                { text: "A. Increased greenhouse gas emissions", correct: true },
                { text: "B. Enhanced reputation and brand image", correct: false },
                { text: "C. Improved relationships with stakeholders", correct: false },
                { text: "D. Reduced environmental impact", correct: false }
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
                            <p>International Cooperation and </p>
                            {/* <h1>Climate Change</h1> */}
                            <div class="wrapper">
                                <img src="https://svgshare.com/i/1B4m.svg" alt="un icon" />
                                <h1>Climate <span class="mask">Policy</span></h1>
                            </div>
                            <div class="byline">The Scientific Consensus</div>
                        </div>
                        <div class="image6"></div>
                    </div>
                    <div class="neo-video-player">
                        <iframe
                            src="https://www.youtube.com/embed/BJQz0ZeVFUM?si=UpzS3AFGGxdSRm9W">
                        </iframe>
                    </div>

                    <div class="article-text">
                        <strong>
                            The Overwhelming Scientific Agreement on Climate Change
                        </strong>
                        <p>
                            <strong>o	</strong>Climate change is a well-established scientific fact. There is a strong consensus among the vast majority of climate scientists that global warming is real and primarily caused by human activities. This consensus is based on decades of research and evidence from numerous studies.
                        </p>
                        <p>
                            <strong>o	</strong>The Intergovernmental Panel on Climate Change (IPCC), a leading international body for assessing the science related to climate change, has consistently concluded that human activities are the main cause of observed global warming.
                        </p>
                        <p>
                            <strong>o	</strong>Scientific organizations worldwide, including the American Association for the Advancement of Science (AAAS), the National Academy of Sciences, and the Royal Society, have endorsed the scientific consensus on climate change.
                        </p>
                        <strong>
                            The Role of Scientists in Studying and Addressing Climate Change
                        </strong>
                        <p>
                            <strong>•	Research and data collection: </strong>Scientists play a crucial role in studying climate change by collecting and analyzing data from various sources, such as temperature records, ice cores, and satellite observations. This data helps them understand the causes, impacts, and potential future consequences of climate change.
                        </p>
                        <p>
                            <strong>•	Modeling and prediction: </strong>Climate scientists use computer models to simulate the Earth's climate system and predict future climate changes. These models help us understand how different factors, such as greenhouse gas emissions and ocean currents, influence climate.
                        </p>
                        <p>
                            <strong>•	Developing solutions: </strong>Scientists are also working to develop solutions to address climate change, such as renewable energy technologies, carbon capture and storage, and climate adaptation strategies.
                        </p>
                        <div class='byline'>
                            Part 2: The Paris Agreement
                        </div>
                        <p class="first">
                            The Paris Agreement is a landmark international agreement that aims to combat climate change by reducing greenhouse gas emissions and promoting sustainable development. It was adopted by 196 countries in 2015 and entered into force in 2016.
                        </p>
                        <strong>
                            Goals and Objectives of the Paris Agreement
                        </strong>
                        <p>
                            <strong>o	</strong>Hold global temperature increase to well below 2 degrees Celsius above pre-industrial levels and pursue efforts to limit it to 1.5 degrees Celsius.
                        </p>
                        <p>
                            <strong>o	</strong>Increase the ability of countries to adapt to the adverse impacts of climate change.
                        </p>
                        <p>
                            <strong>o	</strong>Make finance flows consistent with a pathway towards low greenhouse gas emissions and climate-resilient development.
                        </p>
                        <strong>
                            Progress Made and Challenges Faced
                        </strong>
                        <p>
                            <strong>•	Increased Ambition: </strong>Many countries have submitted updated national climate plans (Nationally Determined Contributions, or NDCs) with more ambitious emissions reduction targets.
                        </p>
                        <p>
                            <strong>•	Global Climate Action: </strong>A range of climate initiatives and partnerships have been launched to support countries in achieving their climate goals.
                        </p>
                        <strong>
                            Challenges
                        </strong>
                        <p>
                            <strong>•	Insufficient Ambition: </strong>Despite progress, current NDCs are not sufficient to meet the Paris Agreement's temperature goals.
                        </p>
                        <p>
                            <strong>•	Financial Gap: </strong>There is a significant financial gap between the resources needed to implement climate action and the resources currently available.
                        </p>
                        <p>
                            <strong>•	Implementation Challenges: </strong>Many countries face challenges in implementing their climate policies and actions.
                        </p>
                        <div class="byline">
                            Part 3: National Climate Policies
                        </div>
                        <p class='first'>
                            Countries around the world have adopted a variety of climate policies to address climate change. These policies can vary in scope, ambition, and effectiveness. In this lesson, we will examine national climate policies and assess their impact on greenhouse gas emissions and climate resilience.
                        </p>
                        <strong>
                            Climate Policies in Different Countries
                        </strong>
                        <p>
                            <strong>•	Carbon Pricing: </strong>Implementing carbon pricing mechanisms, such as carbon taxes or emissions trading schemes, to put a price on carbon emissions.
                        </p>
                        <p>
                            <strong>•	Renewable Energy Targets: </strong>Setting ambitious targets for renewable energy deployment and providing incentives for renewable energy projects.
                        </p>
                        <p>
                            <strong>•	Energy Efficiency Standards: </strong>Enacting energy efficiency standards for buildings, appliances, and vehicles to reduce energy consumption.
                        </p>
                        <p>
                            <strong>•	Transportation Policies: </strong>Promoting sustainable transportation options, such as public transit, cycling, and walking, and encouraging the adoption of electric vehicles.
                        </p>
                        <p>
                            <strong>•	Land Use Planning: </strong>Implementing land use policies that protect forests, promote sustainable agriculture, and reduce the risk of natural disasters.
                        </p>
                        <p>
                            <strong>•	Climate Adaptation: </strong>Developing and implementing climate adaptation strategies to prepare for and respond to the impacts of climate change.
                        </p>
                        <strong>
                            Effectiveness of National Climate Actions
                        </strong>
                        <p>
                            <strong>•	Emissions Reductions: </strong>Assessing the effectiveness of climate policies in reducing greenhouse gas emissions.
                        </p>
                        <p>
                            <strong>•	Climate Resilience: </strong>Evaluating the extent to which climate policies contribute to building climate resilience.
                        </p>
                        <p>
                            <strong>•	Economic Impacts: </strong>Analyzing the economic impacts of climate policies, including job creation, economic growth, and competitiveness.
                        </p>
                        <p>
                            <strong>•	Social Equity: </strong>Assessing the distributional impacts of climate policies and ensuring that they do not disproportionately burden vulnerable populations.
                        </p>
                        <div class='byline'>
                            Part 4: The Role of Businesses and Corporations
                        </div>
                        <p class='first'>
                            Businesses and corporations have a significant role to play in addressing climate change. Corporate social responsibility (CSR) is a framework that encourages companies to consider the social and environmental impacts of their operations. By adopting sustainable business practices, businesses can contribute to climate mitigation and adaptation.
                        </p>
                        <strong>
                            Corporate Social Responsibility and Climate Action
                        </strong>
                        <p>
                            <strong>•	Climate Leadership: </strong>Businesses can demonstrate leadership on climate change by setting ambitious emissions reduction targets and implementing sustainable practices.
                        </p>
                        <p>
                            <strong>•	Supply Chain Management: </strong>Companies can work with suppliers to reduce their environmental footprint and ensure that their supply chains are sustainable.
                        </p>
                        <p>
                            <strong>•	Product Stewardship: </strong>Designing and producing products that are more energy efficient and have a lower environmental impact.
                        </p>
                        <p>
                            <strong>•	Community Engagement: </strong>Engaging with communities to address climate change-related challenges and support sustainable development.
                        </p>
                        <strong>
                            Sustainable Business Practices
                        </strong>
                        <p>
                            <strong>•	Renewable Energy: </strong>Investing in renewable energy sources to reduce greenhouse gas emissions.
                        </p>
                        <p>
                            <strong>•	Energy Efficiency: </strong>Implementing energy-efficient practices to reduce energy consumption.
                        </p>
                        <p>
                            <strong>•	Waste Reduction and Recycling: </strong>Minimizing waste generation and recycling materials to conserve resources.
                        </p>
                        <p>
                            <strong>•	Sustainable Sourcing: </strong>Sourcing materials and products from suppliers that prioritize sustainability.
                        </p>
                        <p>
                            <strong>•	Climate Risk Management: </strong>Assessing and managing climate-related risks to business operations.
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
                                    <a href='https://jeopardylabs.com/play/climate-change-quiz-game' target='_blank'>Quiz Game</a>
                                </li>
                                <li>
                                    <span class="material-symbols-outlined">
                                        strategy
                                    </span>
                                    <a href='https://climatekids.nasa.gov/coral-bleaching/' target='_blank'>Coral Bleaching</a>
                                </li>
                                <li>
                                    <span class="material-symbols-outlined">
                                        strategy
                                    </span>
                                    <a href='https://climatekids.nasa.gov/cubesat-builder-game/' target='_blank'>Spacecraft Builder</a>
                                </li>
                                <li>
                                    <span class="material-symbols-outlined">
                                        strategy
                                    </span>
                                    <a href='https://spaceplace.nasa.gov/ocean-currents/en/' target='_blank'>Flow with Ocean</a>
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
                                <li>
                                    <span class="material-symbols-outlined">
                                        strategy
                                    </span>
                                    <a href='https://worldview.earthdata.nasa.gov/' target='_blank'>World View</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </article>
            </div>
            <div class="arrowBtn">
                <Link to='/article/5' class="previousBtn">
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
                <Link to='/article/7' class="nextBtn">
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