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
            question: "What is the primary goal of mitigation strategies in addressing climate change?",
            answers: [
                { text: "A. Adapting to the impacts of climate change", correct: false },
                { text: "B. Reducing greenhouse gas emissions", correct: true },
                { text: "C. Increasing renewable energy sources", correct: false },
                { text: "D. Promoting sustainable development", correct: false }
            ]
        },
        {
            question: "Which of the following is NOT a key source of greenhouse gas emissions?",
            answers: [
                { text: "A. Deforestation", correct: false },
                { text: "B. Renewable energy", correct: true },
                { text: "C. Industrial processes", correct: false },
                { text: "D. Agriculture", correct: false }
            ]
        },
        {
            question: "What is the primary benefit of transitioning to renewable energy sources?",
            answers: [
                { text: "A. Increasing dependence on fossil fuels", correct: false },
                { text: "B. Reducing greenhouse gas emissions", correct: true },
                { text: "C. Decreasing energy efficiency", correct: false },
                { text: "D. Promoting deforestation", correct: false }
            ]
        },
        {
            question: "Which of the following is a challenge associated with carbon capture and storage (CCS) technology?",
            answers: [
                { text: "A. Low costs", correct: false },
                { text: "B. Technological advancements", correct: false },
                { text: "C. Environmental concerns", correct: true },
                { text: "D. Increased greenhouse gas emissions", correct: false }
            ]
        },
        {
            question: "How can sustainable land use practices help mitigate climate change?",
            answers: [
                { text: "A. Increasing deforestation", correct: false },
                { text: "B. Reducing carbon sequestration", correct: false },
                { text: "C. Promoting soil erosion", correct: false },
                { text: "D. Protecting forests and other natural ecosystems", correct: true }
            ]
        },
        {
            question: "Which of the following is NOT a key strategy for reducing greenhouse gas emissions from the transportation sector?",
            answers: [
                { text: "A. Promoting electric vehicles", correct: false },
                { text: "B. Increasing reliance on fossil fuels", correct: true },
                { text: "C. Encouraging public transportation", correct: false },
                { text: "D. Promoting active transportation", correct: false }
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
                            <p>
                                Introduction to </p>
                            {/* <h1>Climate Change</h1> */}
                            <div class="wrapper">
                                <img src="https://svgshare.com/i/1B2W.svg" alt="O2 icon" />
                                <h1 class='waviy'>Mitigation <span>Strategies</span></h1>
                            </div>
                            <div class="byline">Reducing Greenhouse Gas Emissions</div>
                        </div>
                        <div class="image4"></div>
                    </div>
                    <div class="neo-video-player">
                        <iframe
                            src="https://www.youtube.com/embed/fmBDZKOdbkY?si=WWcuzhtPEoE2ebaT">
                        </iframe>
                    </div>

                    <div class="article-text">
                        <p>
                            Greenhouse gas emissions are the primary driver of climate change. In this lesson, we will examine the main sources of these emissions and discuss strategies to reduce them.
                        </p>
                        <h1>
                            <span class="material-symbols-outlined">
                                cyclone
                            </span>
                            Sources of Greenhouse Gas Emissions
                        </h1>
                        <p>
                            <strong>o	Burning Fossil Fuels: </strong>The combustion of fossil fuels (coal, oil, natural gas) for electricity, transportation, and heating releases carbon dioxide, a major greenhouse gas.
                        </p>
                        <p>
                            <strong>o	Agriculture: </strong>Agricultural activities, such as livestock farming and rice cultivation, release methane, a potent greenhouse gas.
                        </p>
                        <p>
                            <strong>o	Deforestation: </strong>Clearing forests for agriculture, logging, and development reduces their ability to absorb carbon dioxide from the atmosphere.
                        </p>
                        <p>
                            <strong>o	Industrial Processes: </strong>Industrial activities, such as manufacturing and construction, emit various greenhouse gases, including carbon dioxide and nitrous oxide.
                        </p>
                        <h1>
                            <span class="material-symbols-outlined">
                                cyclone
                            </span>
                            Strategies for Reducing Greenhouse Gas Emissions
                        </h1>
                        <p>
                            <strong>o	Energy Efficiency: </strong>Improving energy efficiency in homes, businesses, and industries can reduce the demand for fossil fuels. This can be achieved through measures such as upgrading appliances, insulating buildings, and using energy-efficient lighting.
                        </p>
                        <p>
                            <strong>o	Renewable Energy: </strong>Transitioning to renewable energy sources, such as solar, wind, hydro, and geothermal power, can reduce greenhouse gas emissions from the energy sector.
                        </p>
                        <p>
                            <strong>o	Transportation: </strong>Promoting electric vehicles, public transportation, and active transportation (walking, biking) can reduce emissions from the transportation sector.
                        </p>
                        <p>
                            <strong>o	Sustainable Agriculture and Forestry: </strong>Adopting sustainable agricultural practices and protecting forests can help reduce greenhouse gas emissions and enhance carbon sequestration.
                        </p>
                        <p>
                            <strong>o	Policy and Regulations: </strong>Governments can implement policies and regulations to promote clean energy, reduce emissions from industries, and encourage sustainable practices.
                        </p>
                        <div class="byline">
                            Part 2: Transitioning to Renewable Energy
                        </div>
                        <p>
                            Renewable energy sources are derived from natural resources that are constantly replenished. By transitioning to renewable energy, we can reduce our reliance on fossil fuels and mitigate climate change.
                        </p>

                        <h1>
                            <span class="material-symbols-outlined">
                                cyclone
                            </span>
                            Types of Renewable Energy Sources
                        </h1>
                        <p>
                            <strong>o	Solar Energy: </strong>Harnessing the power of the sun to generate electricity through solar panels.
                        </p>
                        <p>
                            <strong>o	Wind Energy: </strong>Converting the kinetic energy of the wind into electricity using wind turbines.
                        </p>
                        <p>
                            <strong>o	Hydropower: </strong>Generating electricity from the force of flowing water.
                        </p>
                        <p>
                            <strong>o	Biomass Energy: </strong>Converting organic matter (e.g., wood, agricultural waste) into energy through combustion or fermentation.
                        </p>
                        <p>
                            <strong>o	Geothermal Energy: </strong>Utilizing the heat from the Earth's interior to generate electricity or heat.
                        </p>
                        <p>
                            <strong>o	Tidal and Wave Energy: </strong>Harnessing the energy from tides and waves to generate electricity.
                        </p>
                        <h1>
                            <span class="material-symbols-outlined">
                                cyclone
                            </span>
                            Benefits of Renewable Energy
                        </h1>
                        <strong>Environmental Benefits:</strong>
                        <p>
                            <ul>
                                <li>
                                    o	Reduces greenhouse gas emissions
                                </li>
                                <li>
                                    o	Minimizes air and water pollution
                                </li>
                                <li>
                                    o	Protects biodiversity
                                </li>
                            </ul>
                        </p>
                        <strong>Economic Benefits:</strong>
                        <p>
                            <ul>
                                <li>
                                    o	Creates jobs in renewable energy industries
                                </li>
                                <li>
                                    o	Reduces energy costs in the long term
                                </li>
                                <li>
                                    o	Increases energy security
                                </li>
                            </ul>
                        </p>
                        <strong>Social Benefits:</strong>
                        <p>
                            <ul>
                                <li>
                                    o	Improves energy access in rural areas
                                </li>
                                <li>
                                    o	Contributes to sustainable development
                                </li>
                            </ul>
                        </p>
                        <div class="byline">
                            Part 3: Carbon Capture and Storage
                        </div>
                        <p>
                            Carbon capture and storage (CCS) is a technology that can capture carbon dioxide emissions from industrial processes and store them underground. It is considered a potential tool for mitigating climate change.
                        </p>
                        <strong>
                            How Carbon Capture and Storage Works
                        </strong>
                        <p>
                            <strong>o	Capture: </strong>Carbon dioxide is captured from industrial sources, such as power plants and steel mills. This can be done through various methods, including chemical absorption, physical adsorption, and membrane separation.
                        </p>
                        <p>
                            <strong>o	Transport: </strong>The captured carbon dioxide is transported to a storage site, often a depleted oil or gas field or a deep saline formation.
                        </p>
                        <p>
                            <strong>o	Storage: </strong>The carbon dioxide is injected into underground reservoirs, where it is trapped and prevented from escaping into the atmosphere.
                        </p>
                        <strong>
                            Potential Benefits of Carbon Capture and Storage
                        </strong>
                        <p>
                            <strong>o	Reduces greenhouse gas emissions: </strong>CCS can significantly reduce greenhouse gas emissions from industrial processes, contributing to climate change mitigation.
                        </p>
                        <p>
                            <strong>o	Enables continued use of fossil fuels: </strong>CCS can allow for the continued use of fossil fuels while reducing their environmental impact.
                        </p>
                        <p>
                            <strong>o	Promotes economic development: </strong>CCS can create jobs in the energy sector and support economic growth.
                        </p>
                        <strong>
                            Challenges of Carbon Capture and Storage
                        </strong>
                        <p>
                            <strong>o	High costs: </strong>Implementing CCS technology can be expensive, especially for large-scale projects.
                        </p>
                        <p>
                            <strong>o	Technological limitations: </strong>There are still technological challenges associated with capturing, transporting, and storing carbon dioxide at a large scale.
                        </p>
                        <p>
                            <strong>o	Environmental concerns: </strong>Some concerns have been raised about the potential environmental impacts of CCS, such as leakage of carbon dioxide into the atmosphere or contamination of groundwater.
                        </p>
                        <div class="byline">
                            Part 4: Sustainable land use practices
                        </div>
                        <p>
                            Land use practices play a significant role in climate change. Sustainable land use practices can help mitigate greenhouse gas emissions, protect biodiversity, and ensure the long-term sustainability of our planet.
                        </p>
                        <strong>
                            Importance of Sustainable Land Use
                        </strong>
                        <p>
                            <strong>o	Climate Change Mitigation: </strong>Forests and other natural ecosystems absorb carbon dioxide from the atmosphere, helping to mitigate climate change. Sustainable land use practices protect these ecosystems and enhance their carbon sequestration capacity.
                        </p>
                        <p>
                            <strong>o	Biodiversity Conservation: </strong>Sustainable land use practices can help protect biodiversity by preserving habitats for plants and animals.
                        </p>
                        <p>
                            <strong>o	Soil Health: </strong>Sustainable land management practices can improve soil health, which is essential for agricultural productivity and ecosystem resilience.
                        </p>
                        <p>
                            <strong>o	Water Resources Management: </strong>Sustainable land use practices can help manage water resources effectively, preventing soil erosion, water pollution, and flooding.
                        </p>
                        <strong>
                            Strategies for Sustainable Land Use
                        </strong>
                        <p>
                            <strong>o	Reforestation and Afforestation: </strong>Planting trees to restore forests and increase carbon sequestration.
                        </p>
                        <p>
                            <strong>o	Sustainable Agriculture: </strong>Adopting sustainable farming practices that minimize soil erosion, reduce water pollution, and conserve biodiversity.
                        </p>
                        <p>
                            <strong>o	Protected Areas: </strong>Establishing protected areas, such as national parks and wildlife sanctuaries, to conserve natural ecosystems.
                        </p>
                        <p>
                            <strong>o	Urban Planning: </strong>Promoting sustainable urban development that reduces sprawl, encourages public transportation, and incorporates green spaces.
                        </p>
                        <p>
                            <strong>o	Land Use Planning: </strong>Developing land use plans that consider environmental, social, and economic factors.
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
                                <li>
                                    <span class="material-symbols-outlined">
                                        strategy
                                    </span>
                                    <a href='https://kids.nationalgeographic.com/games/action-adventure/article/recycle-roundup-new' target='_blank'>National Geographic KIDS</a>
                                </li>
                            </ul>
                        </div>

                    </div>

                </article>
            </div>
            <div class="arrowBtn">
                <Link to='/article/3' class="previousBtn">
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
                <Link to='/article/5' class="nextBtn">
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