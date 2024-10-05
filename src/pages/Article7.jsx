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
            question: "What is the primary goal of climate action?",
            answers: [
                { text: "A. Increasing greenhouse gas emissions", correct: false },
                { text: "B. Addressing climate change through individual, community, and collective efforts", correct: true },
                { text: "C. Denying the existence of climate change", correct: false },
                { text: "D. Promoting economic growth at any cost", correct: false }
            ]
        },
        {
            question: "Which of the following is NOT a key strategy for reducing greenhouse gas emissions at the individual level?",
            answers: [
                { text: "A. Conserving energy", correct: false },
                { text: "B. Reducing waste generation", correct: false },
                { text: "C. Increasing reliance on fossil fuels", correct: true },
                { text: "D. Supporting renewable energy", correct: false }
            ]
        },
        {
            question: "What is the primary benefit of community-based climate initiatives?",
            answers: [
                { text: "A. Increasing greenhouse gas emissions", correct: false },
                { text: "B. Promoting sustainable development and addressing climate change at the local level", correct: true },
                { text: "C. Denying the existence of climate change", correct: false },
                { text: "D. Reducing the role of individuals in climate action", correct: false }
            ]
        },
        {
            question: "Which of the following is NOT a strategy for raising awareness and influencing policy on climate change?",
            answers: [
                { text: "A. Public engagement", correct: false },
                { text: "B. Media engagement", correct: false },
                { text: "C. Lobbying", correct: false },
                { text: "D. Denying the existence of climate change", correct: true }
            ]
        },
        {
            question: "What is the primary role of governments in addressing climate change?",
            answers: [
                { text: "A. Denying the existence of climate change", correct: false },
                { text: "B. Promoting fossil fuel use", correct: false },
                { text: "C. Developing and implementing policies to reduce greenhouse gas emissions and promote sustainable development", correct: true },
                { text: "D. Increasing greenhouse gas emissions", correct: false }
            ]
        },
        {
            question: "Which of the following is NOT a key strategy for businesses to address climate change?",
            answers: [
                { text: "A. Reducing greenhouse gas emissions", correct: false },
                { text: "B. Promoting sustainable practices", correct: false },
                { text: "C. Denying the existence of climate change", correct: true },
                { text: "D. Investing in renewable energy", correct: false }
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
                            <p>Citizen Engagement and</p>
                            {/* <h1>Climate Change</h1> */}
                            <div class="wrapper">
                                <img src="https://svgshare.com/i/1B4U.svg" alt="people icon" />
                                <h1>Climate <span class="mask">Action</span></h1>
                            </div>
                            <div class="byline">Individual Actions</div>
                        </div>
                        <div class="image7"></div>
                    </div>
                    <div class="neo-video-player">
                        <iframe
                            src="https://www.youtube.com/embed/9JEqgUcnplw?si=R8DGuKd9PSV9zANV">
                        </iframe>
                    </div>

                    <div class="article-text">
                        <p class='first'>
                            While governments and businesses have a crucial role to play in addressing climate change, individuals can also make a significant contribution by reducing their carbon footprint. In this lesson, we will discuss everyday actions that can help mitigate climate change.
                        </p>
                        <strong>
                            Everyday Actions to Reduce Carbon Footprint
                        </strong>
                        <p>
                            <strong>Energy Conservation:</strong>
                            <ul>
                                <li>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    Reduce energy consumption by turning off lights and appliances when not in use.
                                </li>
                                <li>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    Use energy-efficient appliances and light bulbs.
                                </li>
                                <li>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    Insulate your home to reduce heating and cooling costs.
                                </li>
                            </ul>
                        </p>
                        <p>
                            <strong>Transportation:</strong>
                            <ul>
                                <li>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    Walk, bike, or take public transportation whenever possible.
                                </li>
                                <li>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    Consider carpooling or ride-sharing.
                                </li>
                                <li>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    Choose fuel-efficient vehicles.
                                </li>
                            </ul>
                        </p>
                        <p>
                            <strong>Reduce, Reuse, Recycle:</strong>
                            <ul>
                                <li>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    Reduce waste generation by avoiding unnecessary purchases and consuming less.
                                </li>
                                <li>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    Reuse and recycle materials whenever possible.
                                </li>
                                <li>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    Compost food scraps to reduce landfill waste.
                                </li>
                            </ul>
                        </p>
                        <p>
                            <strong>Sustainable Consumption:</strong>
                            <ul>
                                <li>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    Choose sustainable products and support businesses that prioritize environmental responsibility.
                                </li>
                                <li>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    Reduce meat consumption, as livestock production contributes to greenhouse gas emissions.
                                </li>
                            </ul>
                        </p>
                        <p>
                            <strong>Support Renewable Energy:</strong>
                            <ul>
                                <li>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    Choose renewable energy sources for your home or business.
                                </li>
                                <li>
                                    <span class="material-symbols-outlined">
                                        check
                                    </span>
                                    Support policies and initiatives that promote renewable energy.
                                </li>
                            </ul>
                        </p>
                        <p>
                            While individual actions may seem small, the collective impact of millions of people taking action can be significant. By reducing our carbon footprint, we can contribute to a more sustainable future and inspire others to follow suit.
                        </p>
                        <div class="byline">
                            Part 2: Community-Based Climate Initiatives
                        </div>
                        <p class="first">
                            Communities around the world are taking action to address climate change through various initiatives. Community-based climate projects can be effective in reducing emissions, building resilience, and promoting sustainable development.
                        </p>
                        <strong>
                            Examples of Successful Community-Based Climate Projects
                        </strong>
                        <p>
                            <strong>o	Renewable Energy Communities: </strong>Communities that invest in renewable energy projects, such as solar farms or wind turbines.
                        </p>
                        <p>
                            <strong>o	Urban Gardening and Farming: </strong>Creating community gardens and urban farms to promote food security, reduce waste, and improve air quality.
                        </p>
                        <p>
                            <strong>o	Green Infrastructure: </strong>Developing green infrastructure projects, such as rain gardens, green roofs, and tree planting initiatives, to improve water quality, reduce storm water runoff, and provide shade and cooling.
                        </p>
                        <p>
                            <strong>o	Waste Reduction and Recycling: </strong>Implementing community-wide waste reduction and recycling programs to reduce landfill waste and conserve resources.
                        </p>
                        <p>
                            <strong>o	Climate Adaptation Initiatives: </strong>Developing community-based adaptation plans to prepare for and respond to climate-related impacts.
                        </p>
                        <strong>
                            How to Get Involved in Local Climate Initiatives
                        </strong>
                        <p>
                            <strong>o	Identify Local Organizations: </strong>Research local environmental organizations and community groups working on climate change.
                        </p>
                        <p>
                            <strong>o	Volunteer: </strong>Offer your time and skills to support local climate initiatives.
                        </p>
                        <p>
                            <strong>o	Participate in Community Events: </strong>Attend community meetings, workshops, and events related to climate change.
                        </p>
                        <p>
                            <strong>o	Start Your Initiative: </strong>If you can't find an existing initiative, consider starting your community-based climate project.
                        </p>
                        <p>
                            <strong>o	Advocate for Policy Change: </strong>Engage with local policymakers to advocate for climate-friendly policies and investments.
                        </p>
                        <div class='byline'>
                            Part 3: Advocacy and Activism for Climate Justice
                        </div>
                        <p>
                            Advocacy and activism are essential for driving climate action and ensuring that the voices of marginalized communities are heard. By raising awareness, influencing policy, and mobilizing public support, individuals and organizations can play a crucial role in addressing climate change.
                        </p>
                        <strong>
                            The Importance of Advocacy and Activism
                        </strong>
                        <p>
                            <strong>o	Raising Awareness: </strong>Advocacy and activism can help raise public awareness of climate change and its impacts.
                        </p>
                        <p>
                            <strong>o	Influencing Policy: </strong>Advocacy can influence policymakers to adopt climate-friendly policies and investments.
                        </p>
                        <p>
                            <strong>o	Empowering Communities: </strong>Advocacy can empower communities to demand climate justice and participate in decision-making processes.
                        </p>
                        <p>
                            <strong>o	Building Social Movements: </strong>Advocacy can contribute to building social movements that can drive change on a large scale.
                        </p>
                        <strong>
                            Strategies for Raising Awareness and Influencing Policy
                        </strong>
                        <p>
                            <strong>o	Public Engagement: </strong>Organizing public events, such as marches, rallies, and conferences, to raise awareness and mobilize support for climate action.
                        </p>
                        <p>
                            <strong>o	Media Engagement: </strong>Engaging with media outlets to share information about climate change and advocate for policy change.
                        </p>
                        <p>
                            <strong>o	Lobbying: </strong>Meeting with policymakers to advocate for climate-friendly policies and investments.
                        </p>
                        <p>
                            <strong>o	Letter-Writing Campaigns: </strong>Organizing letter-writing campaigns to express public opinion on climate issues.
                        </p>
                        <p>
                            <strong>o	Social Media Advocacy: </strong>Using social media to raise awareness, mobilize support, and engage with policymakers.
                        </p>
                        <div class="byline">
                            Part 4: The role of education and awareness in driving climate action
                        </div>
                        <p class='first'>
                            Education and awareness are essential for driving climate action. By educating people about climate change and its impacts, we can empower them to make informed choices and take action.
                        </p>
                        <strong>
                            The Importance of Education and Awareness
                        </strong>
                        <p>
                            <strong>o	Informed Decision-Making: </strong>Education and awareness enable individuals to make informed decisions about their consumption habits, energy use, and support for climate policies.
                        </p>
                        <p>
                            <strong>o	Empowerment: </strong>Education can empower individuals to take action on climate change and become agents of change.
                        </p>
                        <p>
                            <strong>o	Building Public Support: </strong>Raising awareness of climate change can build public support for climate action and encourage political leaders to take bold steps.
                        </p>
                        <p>
                            <strong>o	Inspiring Innovation: </strong>Education can inspire creativity and innovation in developing solutions to climate change.
                        </p>
                        <strong>
                            Strategies for Promoting Climate Education and Awareness
                        </strong>
                        <p>
                            <strong>o	Formal Education: </strong>Integrating climate change education into school curricula at all levels.
                        </p>
                        <p>
                            <strong>o	Informal Education: </strong>Providing climate change education through community programs, workshops, and public events.
                        </p>
                        <p>
                            <strong>o	Media Engagement: </strong>Using media to raise awareness of climate change and promote climate-friendly behaviors.
                        </p>
                        <p>
                            <strong>o	Citizen Science: </strong>Engaging citizens in scientific research and data collection related to climate change.
                        </p>
                        <p>
                            <strong>o	Online Resources: </strong>Utilizing online platforms and social media to share information and connect people interested in climate action.
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
                                    <a href='https://scied.ucar.edu/interactive/albedo-brightness' target='_blank'>Albedo</a>
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