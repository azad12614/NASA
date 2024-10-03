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
                                <img src="https://svgshare.com/i/1B2W.svg" alt="O2 icon" />
                                <h1>Mitigation <span class="mask">Strategies</span></h1>
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
                        •	Lesson 1: Reducing Greenhouse Gas Emissions
                        Greenhouse gas emissions are the primary driver of climate change. In this lesson, we will examine the main sources of these emissions and discuss strategies to reduce them.
                        	Sources of Greenhouse Gas Emissions
                        •	Burning Fossil Fuels: The combustion of fossil fuels (coal, oil, natural gas) for electricity, transportation, and heating releases carbon dioxide, a major greenhouse gas.
                        •	Agriculture: Agricultural activities, such as livestock farming and rice cultivation, release methane, a potent greenhouse gas.
                        •	Deforestation: Clearing forests for agriculture, logging, and development reduces their ability to absorb carbon dioxide from the atmosphere.
                        •	Industrial Processes: Industrial activities, such as manufacturing and construction, emit various greenhouse gases, including carbon dioxide and nitrous oxide.
                        	Strategies for Reducing Greenhouse Gas Emissions
                        •	Energy Efficiency: Improving energy efficiency in homes, businesses, and industries can reduce the demand for fossil fuels. This can be achieved through measures such as upgrading appliances, insulating buildings, and using energy-efficient lighting.
                        •	Renewable Energy: Transitioning to renewable energy sources, such as solar, wind, hydro, and geothermal power, can reduce greenhouse gas emissions from the energy sector.
                        •	Transportation: Promoting electric vehicles, public transportation, and active transportation (walking, biking) can reduce emissions from the transportation sector.
                        •	Sustainable Agriculture and Forestry: Adopting sustainable agricultural practices and protecting forests can help reduce greenhouse gas emissions and enhance carbon sequestration.
                        •	Policy and Regulations: Governments can implement policies and regulations to promote clean energy, reduce emissions from industries, and encourage sustainable practices.
                        	Activity: Calculate your carbon footprint
                        	Reference: Environmental Protection Agency (EPA), Greenhouse Gas Emissions: [invalid URL removed]
                        •	Lesson 2: Transitioning to Renewable Energy
                        Renewable energy sources are derived from natural resources that are constantly replenished. By transitioning to renewable energy, we can reduce our reliance on fossil fuels and mitigate climate change.
                        	Types of Renewable Energy Sources
                        	Solar Energy: Harnessing the power of the sun to generate electricity through solar panels.
                        	Wind Energy: Converting the kinetic energy of the wind into electricity using wind turbines.
                        	Hydropower: Generating electricity from the force of flowing water.
                        	Biomass Energy: Converting organic matter (e.g., wood, agricultural waste) into energy through combustion or fermentation.
                        	Geothermal Energy: Utilizing the heat from the Earth's interior to generate electricity or heat.
                        	Tidal and Wave Energy: Harnessing the energy from tides and waves to generate electricity.
                        	Benefits of Renewable Energy
                        	Environmental Benefits:
                        o	Reduces greenhouse gas emissions
                        o	Minimizes air and water pollution
                        o	Protects biodiversity
                        	Economic Benefits:
                        o	Creates jobs in renewable energy industries
                        o	Reduces energy costs in the long term
                        o	Increases energy security
                        	Social Benefits:
                        o	Improves energy access in rural areas
                        o	Contributes to sustainable development
                        	Activity: Design a renewable energy system for your school or community
                        	Reference: International Renewable Energy Agency (IRENA), Renewable Energy: https://www.irena.org/
                        •	Lesson 3: Carbon Capture and Storage
                        Carbon capture and storage (CCS) is a technology that can capture carbon dioxide emissions from industrial processes and store them underground. It is considered a potential tool for mitigating climate change.
                        	How Carbon Capture and Storage Works
                        	Capture: Carbon dioxide is captured from industrial sources, such as power plants and steel mills. This can be done through various methods, including chemical absorption, physical adsorption, and membrane separation.
                        	Transport: The captured carbon dioxide is transported to a storage site, often a depleted oil or gas field or a deep saline formation.
                        	Storage: The carbon dioxide is injected into underground reservoirs, where it is trapped and prevented from escaping into the atmosphere.
                        	Potential Benefits of Carbon Capture and Storage
                        	Reduces greenhouse gas emissions: CCS can significantly reduce greenhouse gas emissions from industrial processes, contributing to climate change mitigation.
                        	Enables continued use of fossil fuels: CCS can allow for the continued use of fossil fuels while reducing their environmental impact.
                        	Promotes economic development: CCS can create jobs in the energy sector and support economic growth.
                        	Challenges of Carbon Capture and Storage
                        	High costs: Implementing CCS technology can be expensive, especially for large-scale projects.
                        	Technological limitations: There are still technological challenges associated with capturing, transporting, and storing carbon dioxide at a large scale.
                        	Environmental concerns: Some concerns have been raised about the potential environmental impacts of CCS, such as leakage of carbon dioxide into the atmosphere or contamination of groundwater.
                        	Activity: Research and debate the pros and cons of carbon capture and storage
                        	Reference: Global Carbon Project: https://www.globalcarbonproject.org/
                        •	Lesson 4: Sustainable land use practices
                        Land use practices play a significant role in climate change. Sustainable land use practices can help mitigate greenhouse gas emissions, protect biodiversity, and ensure the long-term sustainability of our planet.
                        	Importance of Sustainable Land Use
                        	Climate Change Mitigation: Forests and other natural ecosystems absorb carbon dioxide from the atmosphere, helping to mitigate climate change. Sustainable land use practices protect these ecosystems and enhance their carbon sequestration capacity.
                        	Biodiversity Conservation: Sustainable land use practices can help protect biodiversity by preserving habitats for plants and animals.
                        	Soil Health: Sustainable land management practices can improve soil health, which is essential for agricultural productivity and ecosystem resilience.
                        	Water Resources Management: Sustainable land use practices can help manage water resources effectively, preventing soil erosion, water pollution, and flooding.
                        	Strategies for Sustainable Land Use
                        	Reforestation and Afforestation: Planting trees to restore forests and increase carbon sequestration.
                        	Sustainable Agriculture: Adopting sustainable farming practices that minimize soil erosion, reduce water pollution, and conserve biodiversity.
                        	Protected Areas: Establishing protected areas, such as national parks and wildlife sanctuaries, to conserve natural ecosystems.
                        	Urban Planning: Promoting sustainable urban development that reduces sprawl, encourages public transportation, and incorporates green spaces.
                        	Land Use Planning: Developing land use plans that consider environmental, social, and economic factors.


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
                                    <a href='' target='_blank'>hello</a>
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