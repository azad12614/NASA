import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Nav from '../components/Nav.jsx';
import Top from '../components/Top.jsx';
import './Plan.css';

const Plan = () => {

    return (
        <>
            <Nav></Nav>
            <div class="Plan-main">
                <div class="main-contain">
                    <h2>
                        Lesson Plan Outline
                    </h2>
                    <p>
                        All About Climate Action
                    </p>
                </div>
                <h1>Lessons</h1>
                <div class="tabs">
                    <div class="tab">
                        <input class="tab-radio" type="radio" id="tab-1" name="tab-group-1" checked />
                        <label class="tab-label" for="tab-1"><span class="word-span">Lesson</span> 1</label>

                        <div class="tab-panel">
                            <div class="tab-content">
                                <h2>
                                    <img src="https://i.giphy.com/LqfTZllRyw3P8Yv7dF.webp" alt="icon" />
                                    <Link to="/article/1">
                                        Introduction to Climate Change
                                    </Link>
                                    <img src="https://i.giphy.com/KHKdLHnFZ8nzVExGGN.webp" alt="icon" />
                                </h2>
                                <ul>
                                    <li>
                                        <span class="material-symbols-outlined">
                                            grid_view
                                        </span>
                                        &nbsp; Chapter 1: Climate Change
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Climate vs. weather
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; What is climate change?
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Causes of climate change
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; What is Global Warming
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; The Earth's energy balance
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="tab">
                        <input class="tab-radio" type="radio" id="tab-2" name="tab-group-1" checked />
                        <label class="tab-label" for="tab-2"><span class="word-span">Lesson</span> 2</label>

                        <div class="tab-panel">
                            <div class="tab-content">
                                <h2>
                                    <img src="https://i.giphy.com/LqfTZllRyw3P8Yv7dF.webp" alt="icon" />
                                    <Link to="/article/2">
                                        Climate Data
                                    </Link>
                                    <img src="https://i.giphy.com/KHKdLHnFZ8nzVExGGN.webp" alt="icon" />
                                </h2>
                                <ul>
                                    <li>
                                        <span class="material-symbols-outlined">
                                            grid_view
                                        </span>
                                        &nbsp; Chapter 1: About Historical Climate Data
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; What is Historical Climate Data?
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Sources of Historical Climate Data
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; What is Temperature Records?
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; What is Ice Cores and Tree Rings?
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="tab">
                        <input class="tab-radio" type="radio" id="tab-3" name="tab-group-1" checked />
                        <label class="tab-label" for="tab-3"><span class="word-span">Lesson</span> 3</label>

                        <div class="tab-panel">
                            <div class="tab-content">
                                <h2>
                                    <img src="https://i.giphy.com/LqfTZllRyw3P8Yv7dF.webp" alt="icon" />
                                    <Link to="/article/3">
                                        Impacts of Climate Change
                                    </Link>
                                    <img src="https://i.giphy.com/KHKdLHnFZ8nzVExGGN.webp" alt="icon" />
                                </h2>
                                <ul>
                                    <li>
                                        <span class="material-symbols-outlined">
                                            grid_view
                                        </span>
                                        &nbsp; Chapter 1: Rising Sea Levels
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Intro on sea level rise
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Causes of sea level rise
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Impacts on coastal communities and ecosystems
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Real-world examples of sea level rise
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Activity
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span class="material-symbols-outlined">
                                            grid_view
                                        </span>
                                        &nbsp; Chapter 2: Extreme Weather Events
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Intro on Extreme Weather Events
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Types of extreme weather events
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; climate change and extreme weather
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Real-world examples
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Activity
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span class="material-symbols-outlined">
                                            grid_view
                                        </span>
                                        &nbsp; Chapter 3: Ecosystems and Biodiversity
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; What is Ecosystems and Biodiversity?
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Changes in Ecosystems
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Loss of Biodiversity
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Real-world examples
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Activity
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span class="material-symbols-outlined">
                                            grid_view
                                        </span>
                                        &nbsp; Chapter 4: Human Health and Well-being
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Intro
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Impacts on Human Health and Well-being
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Real-world examples
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Activity
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span class="material-symbols-outlined">
                                            grid_view
                                        </span>
                                        &nbsp; Chapter 5: Economic Consequences
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Intro
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Impacts on Economic
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Real-world examples
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Activity
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="tab">
                        <input class="tab-radio" type="radio" id="tab-4" name="tab-group-1" checked />
                        <label class="tab-label" for="tab-4"><span class="word-span">Lesson</span> 4</label>

                        <div class="tab-panel">
                            <div class="tab-content">
                                <h2>
                                    <img src="https://i.giphy.com/LqfTZllRyw3P8Yv7dF.webp" alt="icon" />
                                    <Link to="/article/4">
                                        Mitigation Strategies
                                    </Link>
                                    <img src="https://i.giphy.com/KHKdLHnFZ8nzVExGGN.webp" alt="icon" />
                                </h2>
                                <ul>
                                    <li>
                                        <span class="material-symbols-outlined">
                                            grid_view
                                        </span>
                                        &nbsp; Chapter 1: Reducing Greenhouse Gas Emissions
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Intro
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Sources of Greenhouse Gas Emissions
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Strategies for Reducing Greenhouse Gas Emissions
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Real-world examples
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Activity
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span class="material-symbols-outlined">
                                            grid_view
                                        </span>
                                        &nbsp; Chapter 2: Transitioning to Renewable Energy
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Intro
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Types of Renewable Energy Sources
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Benefits of Renewable Energy
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Real-world examples
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Activity
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span class="material-symbols-outlined">
                                            grid_view
                                        </span>
                                        &nbsp; Chapter 3: Carbon Capture and Storage
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Intro
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; How Carbon Capture and Storage Works?
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Potential Benefits of Carbon Capture and Storage
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Challenges of Carbon Capture and Storage
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Real-world examples
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Activity
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span class="material-symbols-outlined">
                                            grid_view
                                        </span>
                                        &nbsp; Chapter 4: Sustainable land use practices
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Intro
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Importance of Sustainable Land Use
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Strategies for Sustainable Land Use
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Real-world examples
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Activity
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="tab">
                        <input class="tab-radio" type="radio" id="tab-5" name="tab-group-1" checked />
                        <label class="tab-label" for="tab-5"><span class="word-span">Lesson</span> 5</label>

                        <div class="tab-panel">
                            <div class="tab-content">
                                <h2>
                                    <img src="https://i.giphy.com/LqfTZllRyw3P8Yv7dF.webp" alt="icon" />
                                    <Link to="/article/5">
                                        Adaptation Strategies
                                    </Link>
                                    <img src="https://i.giphy.com/KHKdLHnFZ8nzVExGGN.webp" alt="icon" />
                                </h2>
                                <ul>
                                    <li>
                                        <span class="material-symbols-outlined">
                                            grid_view
                                        </span>
                                        &nbsp; Chapter 1: Preparing for Climate-Related Impacts
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Intro
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Importance of Climate Change Adaptation
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Strategies for Preparing for Climate-Related Impacts
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Real-world examples
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Activity
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span class="material-symbols-outlined">
                                            grid_view
                                        </span>
                                        &nbsp; Chapter 2: Building Resilience in Communities
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Intro
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Community-Based Adaptation Strategies
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Promoting Sustainable Development
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Real-world examples
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Activity
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span class="material-symbols-outlined">
                                            grid_view
                                        </span>
                                        &nbsp; Chapter 3: Climate-Smart Agriculture and Forestry
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Intro
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Sustainable Farming and Forestry Practices
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Adapting to Changing Climate Conditions
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Real-world examples
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Activity
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span class="material-symbols-outlined">
                                            grid_view
                                        </span>
                                        &nbsp; Chapter 4: Disaster Risk Reduction
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Intro
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Importance of Disaster Risk Reduction
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Strategies for Disaster Risk Reduction
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Real-world examples
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Activity
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="tab">
                        <input class="tab-radio" type="radio" id="tab-6" name="tab-group-1" checked />
                        <label class="tab-label" for="tab-6"><span class="word-span">Lesson</span> 6</label>

                        <div class="tab-panel">
                            <div class="tab-content">
                                <h2>
                                    <img src="https://i.giphy.com/LqfTZllRyw3P8Yv7dF.webp" alt="icon" />
                                    <Link to="/article/6">
                                        Climate Policy and International Cooperation
                                    </Link>
                                    <img src="https://i.giphy.com/KHKdLHnFZ8nzVExGGN.webp" alt="icon" />
                                </h2>
                                <ul>
                                    <li>
                                        <span class="material-symbols-outlined">
                                            grid_view
                                        </span>
                                        &nbsp; Chapter 1: The Scientific Consensus
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Intro
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; The Overwhelming Scientific Agreement on Climate Change
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; The Role of Scientists in Studying and Addressing Climate Change
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Real-world examples
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Activity
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span class="material-symbols-outlined">
                                            grid_view
                                        </span>
                                        &nbsp; Chapter 2: The Paris Agreement
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Intro
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Goals and Objectives of the Paris Agreement
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Progress Made and Challenges Faced
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Real-world examples
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Activity
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span class="material-symbols-outlined">
                                            grid_view
                                        </span>
                                        &nbsp; Chapter 3: National Climate Policies
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Intro
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Climate Policies in Different Countries
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Effectiveness of National Climate Actions
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Real-world examples
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Activity
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span class="material-symbols-outlined">
                                            grid_view
                                        </span>
                                        &nbsp; Chapter 4: The Role of Businesses and Corporations
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Intro
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Corporate Social Responsibility and Climate Action
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Sustainable Business Practices
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Real-world examples
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Activity
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="tab">
                        <input class="tab-radio" type="radio" id="tab-7" name="tab-group-1" checked />
                        <label class="tab-label" for="tab-7"><span class="word-span">Lesson</span> 7</label>

                        <div class="tab-panel">
                            <div class="tab-content">
                                <h2>
                                    <img src="https://i.giphy.com/LqfTZllRyw3P8Yv7dF.webp" alt="icon" />
                                    <Link to="/article/7">
                                        Climate Action and Citizen Engagement
                                    </Link>
                                    <img src="https://i.giphy.com/KHKdLHnFZ8nzVExGGN.webp" alt="icon" />
                                </h2>
                                <ul>
                                    <li>
                                        <span class="material-symbols-outlined">
                                            grid_view
                                        </span>
                                        &nbsp; Chapter 1: Individual Actions to Reduce Carbon Footprint
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Intro
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Everyday Actions to Reduce Carbon Footprint
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; The Power of Individual Choices
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Real-world examples
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Activity
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span class="material-symbols-outlined">
                                            grid_view
                                        </span>
                                        &nbsp; Chapter 2: Community-Based Climate Initiatives
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Intro
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Successful Community-Based Climate Projects
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Local Climate Initiatives
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Real-world examples
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Activity
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span class="material-symbols-outlined">
                                            grid_view
                                        </span>
                                        &nbsp; Chapter 3: Advocacy and Activism for Climate Justice
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Intro
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; The Importance of Advocacy and Activism
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Strategies for Raising Awareness and Influencing Policy
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Real-world examples
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Activity
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span class="material-symbols-outlined">
                                            grid_view
                                        </span>
                                        &nbsp; Chapter 4: The role of education and awareness
                                    </li>
                                    <li>
                                        <ul>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Intro
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; The Importance of Education and Awareness
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Strategies for Promoting Climate Education and Awareness
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Real-world examples
                                            </li>
                                            <li>
                                                <span class="material-symbols-outlined">
                                                    grade
                                                </span>
                                                &nbsp; Activity
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="tab">
                        <input class="tab-radio" type="radio" id="tab-8" name="tab-group-1" checked />
                        <label class="tab-label" for="tab-8"><span class="word-span">Overview</span> #</label>

                        <div class="tab-panel">
                            <div class="tab-content">
                                <h2>
                                    <Link to="/article/1">
                                        Climate Action: Using NASA Data to Uncover Trends
                                    </Link>
                                </h2>
                                <h3>Overview</h3>
                                <p>This project aims to develop a comprehensive lesson plan for high school students to understand the impacts of climate change and the role of Earth observation data in monitoring and addressing this global challenge. By integrating climate change concepts into existing science curricula, students will be equipped with the knowledge and tools to become active participants in climate action.</p>
                                <h3>Learning Objectives</h3>
                                <p>
                                    •	Understand the basic principles of climate change, including causes, effects, and scientific consensus.
                                </p>
                                <p>
                                    •	Explore the role of Earth observation data in monitoring climate change indicators, such as temperature, sea level, and greenhouse gas concentrations.
                                </p>
                                <p>
                                    •	Learn how to use NASA's Earth Observing System (EOS) data to analyze climate trends and patterns.
                                </p>
                                <p>
                                    •	Develop critical thinking skills to evaluate information and make informed decisions about climate change.
                                </p>
                                <p>
                                    •	Recognize the importance of individual and collective actions to mitigate climate change.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            <Top></Top>
        </>
    )
}

export default Plan