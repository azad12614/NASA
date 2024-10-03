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
                            <p>Citizen Engagement and </p>
                            {/* <h1>Climate Change</h1> */}
                            <div class="wrapper">
                                <img src="https://svgshare.com/i/1B4U.svg" alt="people icon" />
                                <h1>Climate <span class="mask">Action</span></h1>
                            </div>
                            <div class="byline">Individual Actions</div>
                        </div>
                        <div class="image"></div>
                    </div>
                    <div class="neo-video-player">
                        <iframe
                            src="https://www.youtube.com/embed/9JEqgUcnplw?si=R8DGuKd9PSV9zANV">
                        </iframe>
                    </div>

                    <div class="article-text">
                        •	Lesson 1: Individual Actions to Reduce Carbon Footprint
                        While governments and businesses have a crucial role to play in addressing climate change, individuals can also make a significant contribution by reducing their carbon footprint. In this lesson, we will discuss everyday actions that can help mitigate climate change.
                        Everyday Actions to Reduce Carbon Footprint
                        •	Energy Conservation:
                        o	Reduce energy consumption by turning off lights and appliances when not in use.
                        o	Use energy-efficient appliances and light bulbs.
                        o	Insulate your home to reduce heating and cooling costs.
                        •	Transportation:
                        o	Walk, bike, or take public transportation whenever possible.
                        o	Consider carpooling or ride-sharing.
                        o	Choose fuel-efficient vehicles.
                        •	Reduce, Reuse, Recycle:
                        o	Reduce waste generation by avoiding unnecessary purchases and consuming less.
                        o	Reuse and recycle materials whenever possible.
                        o	Compost food scraps to reduce landfill waste.
                        •	Sustainable Consumption:
                        o	Choose sustainable products and support businesses that prioritize environmental responsibility.
                        o	Reduce meat consumption, as livestock production contributes to greenhouse gas emissions.
                        •	Support Renewable Energy:
                        o	Choose renewable energy sources for your home or business.
                        o	Support policies and initiatives that promote renewable energy.
                        The Power of Individual Choices
                        While individual actions may seem small, the collective impact of millions of people taking action can be significant. By reducing our carbon footprint, we can contribute to a more sustainable future and inspire others to follow suit.
                        	Activity: Create a personal climate action plan
                        	Reference: Environmental Protection Agency (EPA), Climate Change: https://www.epa.gov/climatechange
                        •	Lesson 2: Community-Based Climate Initiatives
                        Communities around the world are taking action to address climate change through various initiatives. Community-based climate projects can be effective in reducing emissions, building resilience, and promoting sustainable development.
                        Examples of Successful Community-Based Climate Projects
                        •	Renewable Energy Communities: Communities that invest in renewable energy projects, such as solar farms or wind turbines.
                        •	Urban Gardening and Farming: Creating community gardens and urban farms to promote food security, reduce waste, and improve air quality.
                        •	Green Infrastructure: Developing green infrastructure projects, such as rain gardens, green roofs, and tree planting initiatives, to improve water quality, reduce stormwater runoff, and provide shade and cooling.
                        •	Waste Reduction and Recycling: Implementing community-wide waste reduction and recycling programs to reduce landfill waste and conserve resources.
                        •	Climate Adaptation Initiatives: Developing community-based adaptation plans to prepare for and respond to climate-related impacts.
                        How to Get Involved in Local Climate Initiatives
                        •	Identify Local Organizations: Research local environmental organizations and community groups working on climate change.
                        •	Volunteer: Offer your time and skills to support local climate initiatives.
                        •	Participate in Community Events: Attend community meetings, workshops, and events related to climate change.
                        •	Start Your Initiative: If you can't find an existing initiative, consider starting your community-based climate project.
                        •	Advocate for Policy Change: Engage with local policymakers to advocate for climate-friendly policies and investments.
                        	Activity: Organize a community clean-up or tree-planting event
                        	Reference: Climate Reality Project: https://www.climaterealityproject.org/
                        •	Lesson 3: Advocacy and Activism for Climate Justice
                        Advocacy and activism are essential for driving climate action and ensuring that the voices of marginalized communities are heard. By raising awareness, influencing policy, and mobilizing public support, individuals and organizations can play a crucial role in addressing climate change.
                        The Importance of Advocacy and Activism
                        •	Raising Awareness: Advocacy and activism can help raise public awareness of climate change and its impacts.
                        •	Influencing Policy: Advocacy can influence policymakers to adopt climate-friendly policies and investments.
                        •	Empowering Communities: Advocacy can empower communities to demand climate justice and participate in decision-making processes.
                        •	Building Social Movements: Advocacy can contribute to building social movements that can drive change on a large scale.
                        Strategies for Raising Awareness and Influencing Policy
                        •	Public Engagement: Organizing public events, such as marches, rallies, and conferences, to raise awareness and mobilize support for climate action.
                        •	Media Engagement: Engaging with media outlets to share information about climate change and advocate for policy change.
                        •	Lobbying: Meeting with policymakers to advocate for climate-friendly policies and investments.
                        •	Letter-Writing Campaigns: Organizing letter-writing campaigns to express public opinion on climate issues.
                        •	Social Media Advocacy: Using social media to raise awareness, mobilize support, and engage with policymakers.
                        	Activity: Write a letter to your elected representative advocating for climate action
                        	Reference: 350.org: https://350.org/
                        •	Lesson 4: The role of education and awareness in driving climate action

                        Education and awareness are essential for driving climate action. By educating people about climate change and its impacts, we can empower them to make informed choices and take action.
                        The Importance of Education and Awareness
                        •	Informed Decision-Making: Education and awareness enable individuals to make informed decisions about their consumption habits, energy use, and support for climate policies.
                        •	Empowerment: Education can empower individuals to take action on climate change and become agents of change.
                        •	Building Public Support: Raising awareness of climate change can build public support for climate action and encourage political leaders to take bold steps.
                        •	Inspiring Innovation: Education can inspire creativity and innovation in developing solutions to climate change.
                        Strategies for Promoting Climate Education and Awareness
                        •	Formal Education: Integrating climate change education into school curricula at all levels.
                        •	Informal Education: Providing climate change education through community programs, workshops, and public events.
                        •	Media Engagement: Using media to raise awareness of climate change and promote climate-friendly behaviors.
                        •	Citizen Science: Engaging citizens in scientific research and data collection related to climate change.
                        •	Online Resources: Utilizing online platforms and social media to share information and connect people interested in climate action.
                        Activity: Climate Change Education Campaign
                        Have students develop a climate education campaign for their school or community. They can create educational materials, organize events, or use social media to raise awareness and inspire action.
                        Discussion Questions:
                        •	Why is education and awareness important for addressing climate change?
                        •	How can education empower individuals to take action on climate change?
                        •	What are the challenges and opportunities for promoting climate education and awareness?
                        •	How can we ensure that climate education is accessible to everyone?
                        Additional Resources:
                        •	Climate Reality Project: https://www.climaterealityproject.org/
                        •	National Geographic: https://www.nationalgeographic.org/
                        •	The Nature Conservancy: https://www.nature.org/


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
                <Link to='/article/6' class="previousBtn">
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
                <Link to='/plan' class="nextBtn">
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