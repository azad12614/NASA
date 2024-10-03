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

                        	Lesson 0: The Scientific Consensus
                        The Overwhelming Scientific Agreement on Climate Change
                        	Climate change is a well-established scientific fact. There is a strong consensus among the vast majority of climate scientists that global warming is real and primarily caused by human activities. This consensus is based on decades of research and evidence from numerous studies.
                        	The Intergovernmental Panel on Climate Change (IPCC), a leading international body for assessing the science related to climate change, has consistently concluded that human activities are the main cause of observed global warming.
                        	Scientific organizations worldwide, including the American Association for the Advancement of Science (AAAS), the National Academy of Sciences, and the Royal Society, have endorsed the scientific consensus on climate change.
                        The Role of Scientists in Studying and Addressing Climate Change
                        	Research and data collection: Scientists play a crucial role in studying climate change by collecting and analyzing data from various sources, such as temperature records, ice cores, and satellite observations. This data helps them understand the causes, impacts, and potential future consequences of climate change.
                        	Modeling and prediction: Climate scientists use computer models to simulate the Earth's climate system and predict future climate changes. These models help us understand how different factors, such as greenhouse gas emissions and ocean currents, influence climate.
                        	Developing solutions: Scientists are also working to develop solutions to address climate change, such as renewable energy technologies, carbon capture and storage, and climate adaptation strategies.
                        Activity: Debate: Is Climate Change a Natural Phenomenon or Caused by Human Activities?
                        Reference: American Association for the Advancement of Science (AAAS), What is Climate Change?
                        	The AAAS is a leading scientific society that has published numerous resources on climate change. Their website provides comprehensive information on the causes, impacts, and solutions to climate change.
                        	Visit the AAAS website to learn more about climate change and access their resources: https://www.aaas.org/news/aaas-climate-change-resources

                        •	Lesson 1: The Paris Agreement
                        The Paris Agreement is a landmark international agreement that aims to combat climate change by reducing greenhouse gas emissions and promoting sustainable development. It was adopted by 196 countries in 2015 and entered into force in 2016.
                        Goals and Objectives of the Paris Agreement
                        •	Hold global temperature increase to well below 2 degrees Celsius above pre-industrial levels and pursue efforts to limit it to 1.5 degrees Celsius.
                        •	Increase the ability of countries to adapt to the adverse impacts of climate change.
                        •	Make finance flows consistent with a pathway towards low greenhouse gas emissions and climate-resilient development.
                        Progress Made and Challenges Faced
                        •	Increased Ambition: Many countries have submitted updated national climate plans (Nationally Determined Contributions, or NDCs) with more ambitious emissions reduction targets.
                        •	Global Climate Action: A range of climate initiatives and partnerships have been launched to support countries in achieving their climate goals.
                        •	Challenges:
                        o	Insufficient Ambition: Despite progress, current NDCs are not sufficient to meet the Paris Agreement's temperature goals.
                        o	Financial Gap: There is a significant financial gap between the resources needed to implement climate action and the resources currently available.
                        o	Implementation Challenges: Many countries face challenges in implementing their climate policies and actions.
                        	Activity: Analyze the key provisions of the Paris Agreement
                        	Reference: United Nations Framework Convention on Climate Change (UNFCCC), Paris Agreement: https://unfccc.int/paris-agreement
                        •	Lesson 2: National Climate Policies
                        Countries around the world have adopted a variety of climate policies to address climate change. These policies can vary in scope, ambition, and effectiveness. In this lesson, we will examine national climate policies and assess their impact on greenhouse gas emissions and climate resilience.
                        Climate Policies in Different Countries
                        •	Carbon Pricing: Implementing carbon pricing mechanisms, such as carbon taxes or emissions trading schemes, to put a price on carbon emissions.
                        •	Renewable Energy Targets: Setting ambitious targets for renewable energy deployment and providing incentives for renewable energy projects.
                        •	Energy Efficiency Standards: Enacting energy efficiency standards for buildings, appliances, and vehicles to reduce energy consumption.
                        •	Transportation Policies: Promoting sustainable transportation options, such as public transit, cycling, and walking, and encouraging the adoption of electric vehicles.
                        •	Land Use Planning: Implementing land use policies that protect forests, promote sustainable agriculture, and reduce the risk of natural disasters.
                        •	Climate Adaptation: Developing and implementing climate adaptation strategies to prepare for and respond to the impacts of climate change.
                        Effectiveness of National Climate Actions
                        •	Emissions Reductions: Assessing the effectiveness of climate policies in reducing greenhouse gas emissions.
                        •	Climate Resilience: Evaluating the extent to which climate policies contribute to building climate resilience.
                        •	Economic Impacts: Analyzing the economic impacts of climate policies, including job creation, economic growth, and competitiveness.
                        •	Social Equity: Assessing the distributional impacts of climate policies and ensuring that they do not disproportionately burden vulnerable populations.
                        	Activity: Compare and contrast climate policies of different countries
                        	Reference: Climate Action Tracker: https://climateactiontracker.org/
                        •	Lesson 3: The Role of Businesses and Corporations
                        Businesses and corporations have a significant role to play in addressing climate change. Corporate social responsibility (CSR) is a framework that encourages companies to consider the social and environmental impacts of their operations. By adopting sustainable business practices, businesses can contribute to climate mitigation and adaptation.
                        Corporate Social Responsibility and Climate Action
                        •	Climate Leadership: Businesses can demonstrate leadership on climate change by setting ambitious emissions reduction targets and implementing sustainable practices.
                        •	Supply Chain Management: Companies can work with suppliers to reduce their environmental footprint and ensure that their supply chains are sustainable.
                        •	Product Stewardship: Designing and producing products that are more energy efficient and have a lower environmental impact.
                        •	Community Engagement: Engaging with communities to address climate change-related challenges and support sustainable development.
                        Sustainable Business Practices
                        •	Renewable Energy: Investing in renewable energy sources to reduce greenhouse gas emissions.
                        •	Energy Efficiency: Implementing energy-efficient practices to reduce energy consumption.
                        •	Waste Reduction and Recycling: Minimizing waste generation and recycling materials to conserve resources.
                        •	Sustainable Sourcing: Sourcing materials and products from suppliers that prioritize sustainability.
                        •	Climate Risk Management: Assessing and managing climate-related risks to business operations.
                        	Activity: Research and evaluate the environmental performance of major corporations
                        	Reference: CDP: https://www.cdp.net/


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
                                <li>
                                    <span class="material-symbols-outlined">
                                        strategy
                                    </span>
                                    <a href='https://scied.ucar.edu/interactive/albedo-brightness' target='_blank'>Albedo</a>
                                </li>
                                <li>
                                    <span class="material-symbols-outlined">
                                        strategy
                                    </span>
                                    <a href='https://jeopardylabs.com/play/climate-change-quiz-game' target='_blank'>Quiz Game</a>
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