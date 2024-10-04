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
                            <p>Introduction to </p>
                            {/* <h1>Climate Change</h1> */}
                            <div class="wrapper">
                                <img src="https://svgshare.com/i/1B4M.svg" alt="class icon" />
                                <h1 class="waviy">Adaptation <span>Strategies</span></h1>
                            </div>
                            <div class="byline">Preparing for Climate-Related Impacts</div>
                        </div>
                        <div class="image5"></div>
                    </div>
                    <div class="neo-video-player">
                        <iframe
                            src="https://www.youtube.com/embed/fmBDZKOdbkY?si=WWcuzhtPEoE2ebaT">
                        </iframe>
                    </div>

                    <div class="article-text">
                        <p class='first'>
                            While mitigation efforts aim to reduce greenhouse gas emissions, climate change is already happening, and we need to adapt to its impacts. Adaptation strategies involve taking actions to reduce the vulnerability of communities and ecosystems to climate change.
                        </p>
                        <strong>
                            Importance of Climate Change Adaptation
                        </strong>
                        <p>
                            <strong>o	Reducing Vulnerability: </strong>Adaptation can help reduce the negative impacts of climate change on communities, infrastructure, and ecosystems.
                        </p>
                        <p>
                            <strong>o	Protecting Human Health: </strong>Adaptation measures can protect human health by reducing the risk of heat-related illnesses, waterborne diseases, and other health hazards.
                        </p>
                        <p>
                            <strong>o	Ensuring Economic Resilience: </strong>Adaptation can help ensure the long-term sustainability of economies by protecting critical infrastructure and industries.
                        </p>
                        <strong>
                            Strategies for Preparing for Climate-Related Impacts
                        </strong>
                        <p>
                            <strong>o	Infrastructure Development: </strong>Investing in climate-resilient infrastructure, such as flood-resistant buildings, seawalls, and storm water management systems.
                        </p>
                        <p>
                            <strong>o	Early Warning Systems: </strong>Developing and implementing early warning systems for extreme weather events, such as hurricanes, floods, and droughts.
                        </p>
                        <p>
                            <strong>o	Emergency Preparedness: </strong>Preparing emergency plans and evacuation routes to respond effectively to climate-related disasters.
                        </p>
                        <p>
                            <strong>o	Water Resource Management: </strong>Ensuring access to clean water and developing strategies for managing water resources in the face of changing rainfall patterns.
                        </p>
                        <p>
                            <strong>o	Coastal Protection: </strong>Implementing measures to protect coastal areas from sea level rise, such as beach nourishment and building setbacks.
                        </p>
                        <div class="byline">
                            Part 2: Building Resilience in Communities
                        </div>
                        <p class="first">
                            Building resilience in communities is essential for coping with the impacts of climate change. Community-based adaptation strategies can empower local communities to adapt to changing conditions and reduce their vulnerability.
                        </p>
                        <strong>
                            Community-Based Adaptation Strategies
                        </strong>
                        <p>
                            <strong>o	Participatory Planning: </strong>Involving community members in planning and decision-making processes to ensure that adaptation measures are tailored to local needs and priorities.
                        </p>
                        <p>
                            <strong>o	Early Warning Systems: </strong>Developing and implementing community-based early warning systems to alert residents of impending hazards.
                        </p>
                        <p>
                            <strong>o	Disaster Preparedness: </strong>Preparing emergency plans and evacuation routes to respond effectively to climate-related disasters.
                        </p>
                        <p>
                            <strong>o	Community-Based Infrastructure: </strong>Investing in community-based infrastructure, such as rainwater harvesting systems, community gardens, and solar energy projects.
                        </p>
                        <p>
                            <strong>o	Knowledge Sharing and Capacity Building: </strong>Providing training and education to community members on climate change adaptation and disaster preparedness.
                        </p>
                        <strong>
                            Promoting Sustainable Development
                        </strong>
                        <p>
                            Sustainable development is essential for building resilience to climate change. It involves meeting the needs of the present without compromising the ability of future generations to meet their own needs. Sustainable development strategies can include:
                        </p>
                        <p>
                            <strong>o	Economic Diversification: </strong>Promoting economic diversification to reduce dependence on climate-sensitive sectors.
                        </p>
                        <p>
                            <strong>o	Social Inclusion: </strong>Ensuring that all community members have access to resources and opportunities.
                        </p>
                        <p>
                            <strong>o	Environmental Protection: </strong>Protecting natural ecosystems and biodiversity.
                        </p>
                        <div class="byline">
                            Part 3: Climate-Smart Agriculture and Forestry
                        </div>
                        <p class="first">
                            Agriculture and forestry are vital sectors that play a crucial role in food security, livelihoods, and climate regulation. Climate-smart agriculture and forestry practices can help ensure the sustainability of these sectors in the face of climate change.
                        </p>
                        <strong>
                            Sustainable Farming and Forestry Practices
                        </strong>
                        <p>
                            <strong>o	Agro-forestry: </strong>Integrating trees with crops to enhance biodiversity, improve soil health, and reduce erosion.
                        </p>
                        <p>
                            <strong>o	Conservation Agriculture: </strong>Minimizing soil disturbance, maintaining crop cover, and using cover crops to improve soil health and reduce greenhouse gas emissions.
                        </p>
                        <p>
                            <strong>o	Precision Agriculture: </strong>Using technology to optimize agricultural practices, reduce inputs, and improve yields.
                        </p>
                        <p>
                            <strong>o	Sustainable Forest Management: </strong>Managing forests in a way that balances economic, social, and environmental objectives.
                        </p>
                        <p>
                            <strong>o	Climate-Smart Land Use Planning: </strong>Developing land use plans that consider climate change impacts and promote sustainable practices.
                        </p>
                        <strong>
                            Adapting to Changing Climate Conditions
                        </strong>
                        <p>
                            <strong>o	Drought Tolerance: </strong>Developing drought-tolerant crop varieties and implementing water-saving irrigation practices.
                        </p>
                        <p>
                            <strong>o	Heat Stress Management: </strong>Protecting crops and livestock from heat stress through shade, irrigation, and genetic selection.
                        </p>
                        <p>
                            <strong>o	Pest and Disease Management: </strong>Adapting pest and disease control strategies to changing climate conditions.
                        </p>
                        <p>
                            <strong>o	Climate-Smart Livestock Management: </strong>Implementing sustainable livestock practices that reduce greenhouse gas emissions and improve animal welfare.
                        </p>
                        <div class="byline">
                            Part 4: Disaster Risk Reduction
                        </div>
                        <p class="first">
                            Disaster risk reduction (DRR) involves taking proactive measures to reduce the impact of disasters on communities. By implementing DRR strategies, we can protect lives, property, and livelihoods from climate-related hazards.
                        </p>
                        <strong>
                            Importance of Disaster Risk Reduction
                        </strong>
                        <p>
                            <strong>o	Saving Lives: </strong>DRR can help prevent loss of life and injuries during disasters.
                        </p>
                        <p>
                            <strong>o	Protecting Property and Infrastructure: </strong>DRR can reduce damage to property, infrastructure, and livelihoods.
                        </p>
                        <p>
                            <strong>o	Ensuring Economic Recovery: </strong>DRR can facilitate faster and more effective recovery from disasters.
                        </p>
                        <strong>
                            Strategies for Disaster Risk Reduction
                        </strong>
                        <p>
                            <strong>o	Early Warning Systems: </strong>Developing and implementing effective early warning systems to alert communities of impending disasters.
                        </p>
                        <p>
                            <strong>o	Land Use Planning: </strong>Ensuring that land use plans consider disaster risks and promote sustainable development.
                        </p>
                        <p>
                            <strong>o	Infrastructure Resilience: </strong>Building infrastructure that is resilient to disasters, such as flood-resistant buildings and storm-resistant infrastructure.
                        </p>
                        <p>
                            <strong>o	Community Preparedness: </strong>Empowering communities to prepare for and respond to disasters through training, education, and drills.
                        </p>
                        <p>
                            <strong>o	Disaster Risk Assessment: </strong>Conduct regular assessments to identify vulnerabilities and prioritize risk reduction measures.
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
                                    <a href='https://pbskids.org/games/nature/' target='_blank'>Nature</a>
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
                <Link to='/article/4' class="previousBtn">
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
                <Link to='/article/6' class="nextBtn">
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