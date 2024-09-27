import React from 'react';
import Footer from '../components/Footer.jsx';
import Nav from '../components/Nav.jsx';
import Top from '../components/Top.jsx';
import './Plan.css'

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
                <h1>Outline</h1>
                <div class="tabs">
                    <div class="tab">
                        <input class="tab-radio" type="radio" id="tab-1" name="tab-group-1" checked />
                        <label class="tab-label" for="tab-1"><span class="word-span">Lesson</span> 1</label>

                        <div class="tab-panel">
                            <div class="tab-content">
                                <h2>Introduction to Climate Change</h2>
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
                                <h2>Climate Data</h2>
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
                                <h2>Impacts of Climate Change</h2>
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
                                        &nbsp; Chapter 4: Economic Consequences
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
                                <h2>Chapter</h2>
                                <p>Combine milk with vinegar in a medium bowl and set aside for 5 minutes to "sour".</p>
                                <p>Combine flour, sugar, baking powder, baking soda, and salt in a large mixing bowl. Whisk egg and butter into "soured" milk. Pour the flour mixture into the wet ingredients and whisk until lumps are gone.</p>
                                <p>Heat a large skillet over medium heat, and coat with cooking spray. Pour 1/4 cupfuls of batter onto the skillet, and cook until bubbles appear on the surface. Flip with a spatula, and cook until browned on the other side.</p>
                            </div>
                        </div>
                    </div>

                    <div class="tab">
                        <input class="tab-radio" type="radio" id="tab-5" name="tab-group-1" checked />
                        <label class="tab-label" for="tab-5"><span class="word-span">Lesson</span> 5</label>

                        <div class="tab-panel">
                            <div class="tab-content">
                                <h2>Chapter</h2>
                                <p>Preheat oven to 350 degrees F (175 degrees C). Grease and flour an 8-inch square pan.</p>
                                <p>In a large saucepan, melt 1/2 cup butter. Remove from heat, and stir in sugar, eggs, and 1 teaspoon vanilla. Beat in 1/3 cup cocoa, 1/2 cup flour, salt, and baking powder. Spread batter into prepared pan.</p>
                                <p>Bake in preheated oven for 25 to 30 minutes. Do not overcook.</p>
                                <p>To Make Frosting: Combine 3 tablespoons softened butter, 3 tablespoons cocoa, honey, 1 teaspoon vanilla extract, and 1 cup confectioners' sugar. Stir until smooth. Frost brownies while they are still warm.</p>
                            </div>
                        </div>
                    </div>

                    <div class="tab">
                        <input class="tab-radio" type="radio" id="tab-6" name="tab-group-1" checked />
                        <label class="tab-label" for="tab-6"><span class="word-span">Lesson</span> 6</label>

                        <div class="tab-panel">
                            <div class="tab-content">
                                <h2>Chapter</h2>
                                <p>Preheat oven to 350 degrees F (175 degrees C).</p>
                                <p>Cream together the butter, white sugar, and brown sugar until smooth. Beat in the eggs one at a time, then stir in the vanilla. </p>
                                <p>Dissolve baking soda in hot water. Add to batter along with salt. Stir in flour, chocolate chips, and nuts. Drop by large spoonfuls onto ungreased pans.</p>
                                <p>Bake for about 10 minutes in the preheated oven, or until edges are nicely browned.</p>
                            </div>
                        </div>
                    </div>

                    <div class="tab">
                        <input class="tab-radio" type="radio" id="tab-7" name="tab-group-1" checked />
                        <label class="tab-label" for="tab-7"><span class="word-span">Overview</span> #</label>

                        <div class="tab-panel">
                            <div class="tab-content">
                                <h2>Climate Action: Using NASA Data to Uncover Trends</h2>
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