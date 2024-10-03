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
                            <p>Impacts of</p>
                            {/* <h1>Climate Change</h1> */}
                            <div class="wrapper">
                                <img src="https://svgshare.com/i/An7.svg" alt="water icon" />
                                <h1>Climate <span class="mask">Change</span></h1>
                            </div>
                            <div class="byline">Rising Sea Levels</div>
                        </div>
                        <div class="image3"></div>
                    </div>
                    <div class="neo-video-player">
                        <iframe
                            src="https://www.youtube.com/embed/WadD54Ywvz4?si=KlehYEUFva4pCycT">
                        </iframe>
                    </div>

                    <div class="article-text">

                        <p class='first'>
                            Sea level rise is a direct consequence of climate change, primarily driven by the expansion of seawater as it warms and the melting of land-based ice, such as glaciers and ice sheets. As the Earth's temperature increases due to greenhouse gas emissions, the oceans absorb much of this excess heat. This causes the seawater to expand, taking up more space. Additionally, the melting of glaciers and ice sheets, particularly in Greenland and Antarctica, adds more water to the oceans, further contributing to sea level rise. The combined effect of these processes is leading to a gradual increase in sea levels, which has significant implications for coastal communities, ecosystems, and infrastructure around the world.
                        </p>
                        <h1>
                            <span class="material-symbols-outlined">
                                cyclone
                            </span>
                            Causes of sea level rise
                        </h1>
                        <p>
                            The primary causes include:
                        </p>
                        <p>
                            I.	Thermal Expansion: As ocean waters warm due to rising global temperatures, they expand, leading to a rise in sea levels.
                        </p>
                        <p>
                            II.	Glacier and Ice Sheet Melting: The melting of glaciers and ice sheets, particularly in Greenland and Antarctica, contributes significantly to sea level rise.
                        </p>
                        <h1>
                            <span class="material-symbols-outlined">
                                cyclone
                            </span>
                            Impacts on coastal communities and ecosystems
                        </h1>
                        <p>
                            Rising sea levels have far-reaching consequences for coastal communities and ecosystems. Some of the key impacts include:
                        </p>
                        <p>
                            	Coastal Erosion: Rising sea levels increase the rate of coastal erosion, threatening beaches, infrastructure, and coastal properties. For example, in Bangladesh, coastal erosion has led to the loss of thousands of acres of land and the displacement of millions of people.
                        </p>
                        <p>
                            	Coastal Flooding: More frequent and severe coastal flooding is a direct result of rising sea levels. This can lead to property damage, infrastructure disruption, and contamination of freshwater supplies.
                        </p>
                        <p>
                            	Saltwater Intrusion: Rising sea levels can cause saltwater to intrude into freshwater aquifers, making it difficult to access clean drinking water. This is a major concern in many coastal regions, particularly in developing countries.
                        </p>
                        <p>
                            	Habitat Loss: Many coastal ecosystems, such as wetlands, mangroves, and coral reefs, are highly vulnerable to rising sea levels. These ecosystems provide important habitats for a variety of plant and animal species, and their loss can have devastating consequences for biodiversity.
                        </p>
                        <p>
                            	Displacement of Communities: As sea levels rise, coastal communities may be forced to relocate. This can lead to significant social and economic disruption, as well as cultural heritage loss.
                        </p>
                        <h1>
                            <span class="material-symbols-outlined">
                                cyclone
                            </span>
                            Real-world examples:
                        </h1>
                        <p>
                            	Miami, Florida: Miami Beach has experienced significant coastal flooding in recent years due to rising sea levels. The city has implemented various adaptation measures, such as elevating streets and installing pumps, to mitigate the impacts of flooding.
                        </p>
                        <p>
                            	Bangladesh: Bangladesh is particularly vulnerable to sea level rise due to its low-lying coastal geography. Rising sea levels are exacerbating coastal erosion, flooding, and saltwater intrusion, affecting millions of people.
                        </p>
                        <p>
                            	Small Island States: Small island states, such as the Maldives and Kiribati, are facing an existential threat from rising sea levels. These countries may become uninhabitable if sea levels continue to rise at a rapid pace.
                        </p>

                        •	Lesson 2: Extreme Weather Events
                        Extreme weather events are becoming increasingly frequent and intense due to climate change. These events can have devastating consequences for communities, ecosystems, and economies.
                        	Types of extreme weather events (e.g., hurricanes, droughts, heatwaves)
                        	Hurricanes: Powerful storms that form over warm ocean waters. Climate change is increasing the intensity and frequency of hurricanes. For example, Hurricane Katrina in 2005 was one of the most destructive hurricanes on record, causing widespread damage and loss of life.
                        	Droughts: Periods of abnormally dry conditions that can lead to water shortages, crop failures, and wildfires. Climate change is making droughts more frequent and severe. For example, the drought in California from 2012 to 2016 was the worst in the state's history.
                        	Heatwaves: Periods of unusually hot weather that can have serious health consequences, especially for vulnerable populations. Climate change is increasing the frequency and intensity of heat waves. For example, the heatwave in Europe in 2019 led to thousands of deaths.
                        	Floods: Events where water overflows its normal boundaries, causing damage to property and infrastructure. Climate change is increasing the risk of flooding due to rising sea levels and changes in precipitation patterns. For example, the floods in Pakistan in 2022 were the worst in the country's history.
                        	Wildfires: Uncontrolled fires that can burn large areas of land, destroying property and releasing harmful pollutants into the atmosphere. Climate change is making wildfires more frequent and intense. For example, the wildfires in Australia in 2019-2020 were the worst wildfires on record.
                        	The link between climate change and extreme weather
                        Climate change is increasing the frequency and intensity of extreme weather events in several ways:
                        	Warming temperatures: Warmer temperatures lead to more evaporation, which can lead to more intense rainfall and flooding. Warmer temperatures also create conditions that are more conducive to wildfires and heatwaves.
                        	Rising sea levels: Rising sea levels increase the risk of coastal flooding and storm surges.
                        	Changes in atmospheric circulation: Climate change is altering atmospheric circulation patterns, which can lead to changes in weather patterns and the frequency and intensity of extreme weather events.
                        	Real-world examples:
                        	Hurricane Harvey in 2017: This hurricane caused catastrophic flooding in Houston, Texas, resulting in widespread damage and loss of life. The intensity of Hurricane Harvey was likely influenced by climate change.
                        	California wildfires: The wildfires in California in 2018 and 2019 were the largest and most destructive in the state's history. These fires were fueled by dry conditions and high temperatures, which were exacerbated by climate change.
                        	Heatwave in Europe in 2019: This heatwave led to thousands of deaths across Europe. The intensity and duration of the heatwave were likely influenced by climate change.
                        	Activity: Analyze historical weather data to identify trends
                        	Reference: National Oceanic and Atmospheric Administration (NOAA), National Centers for Environmental Prediction (NCEP): https://www.ncep.noaa.gov/
                        •	Lesson 3: Impacts on Ecosystems and Biodiversity
                        	Changes in Ecosystems Due to Climate Change
                        Climate change is significantly impacting ecosystems worldwide. Here are some key changes:
                        o	Temperature rise: Increasing temperatures are altering the timing of plant growth and animal behavior. For example, earlier spring blooms and shifts in migration patterns are being observed.
                        o	Precipitation changes: Shifts in rainfall patterns, including more frequent droughts and floods, are affecting ecosystems. Droughts can lead to water shortages and habitat loss, while floods can disrupt ecosystems and displace species.
                        o	Ocean acidification: Rising carbon dioxide levels in the atmosphere are increasing the acidity of oceans, harming marine organisms like corals and shellfish.
                        o	Sea level rise: Coastal ecosystems are particularly vulnerable to sea level rise, which can lead to habitat loss, saltwater intrusion into freshwater sources, and increased erosion.
                        	Loss of Biodiversity and Its Consequences
                        Biodiversity, the variety of life on Earth, is essential for the health and functioning of ecosystems. Climate change is a major driver of biodiversity loss, with severe consequences:
                        o	Habitat destruction: Climate change can lead to habitat loss and fragmentation, making it difficult for species to survive. For example, melting glaciers and rising sea levels are threatening polar bear habitats and coastal ecosystems.
                        o	Species extinction: Many species are unable to adapt to the rapid pace of climate change and face extinction. For example, the golden toad, once abundant in Costa Rica, is believed to have gone extinct due to climate change.
                        o	Disruption of food webs: Changes in ecosystems can disrupt food webs, leading to cascading effects on other species. For example, the decline of pollinators due to climate change can negatively impact plants that rely on them for reproduction.
                        o	Reduced ecosystem services: Biodiversity is essential for providing ecosystem services like pollination, water purification, and climate regulation. Loss of biodiversity can compromise these services, impacting human well-being and the economy.
                        	Real-world examples:
                        o	Coral bleaching: Rising ocean temperatures are causing coral reefs to bleach, leading to the loss of biodiversity and affecting marine ecosystems.
                        o	Polar bear decline: Melting sea ice is threatening the survival of polar bears, as they rely on sea ice for hunting and habitat.
                        o	Amazon rainforest deforestation: Climate change is increasing the frequency and intensity of droughts and fires in the Amazon rainforest, leading to deforestation and biodiversity loss.
                        	Activity: Create a food web and discuss how climate change can disrupt it
                        	Reference: World Wildlife Fund (WWF), Climate Change and Biodiversity
                        •	Lesson 4: Impacts on Human Health and Well-being
                        Climate change poses significant risks to human health, both directly and indirectly. Here are some key impacts:
                        o	Heat-related illnesses: Rising temperatures can lead to heatwaves, increasing the risk of heat-related illnesses such as heatstroke, dehydration, and cardiovascular problems.
                        o	Respiratory problems: Air pollution, exacerbated by climate change, can trigger or worsen respiratory conditions like asthma, bronchitis, and chronic obstructive pulmonary disease (COPD).
                        o	Waterborne diseases: Climate change can affect water quality and availability, increasing the risk of waterborne diseases like cholera, typhoid, and diarrhea.
                        o	Vector-borne diseases: Changes in temperature and precipitation patterns can influence the range and prevalence of mosquito-borne diseases like malaria, dengue fever, and Zika virus.
                        o	Mental health impacts: Climate change-related disasters, such as floods and droughts, can lead to stress, anxiety, depression, and post-traumatic stress disorder (PTSD).
                        o	Food insecurity: Climate change can disrupt agricultural production, leading to food shortages and malnutrition.
                        •	Lesson 5: Economic Consequences of Climate Change
                        Climate change has significant economic implications, affecting various sectors and regions. Here are some key economic consequences:
                        o	Agriculture: Changes in temperature, precipitation, and extreme weather events can disrupt agricultural production, leading to crop failures, reduced yields, and increased food prices.
                        o	Infrastructure: Rising sea levels, coastal erosion, and extreme weather events can damage infrastructure, such as roads, bridges, and buildings, leading to costly repairs and reconstruction.
                        o	Tourism: Climate change can impact tourism destinations, affecting industries like hospitality, transportation, and recreation. For example, changes in weather patterns or sea levels can make certain tourist destinations less attractive.
                        o	Public health: The health impacts of climate change, discussed in Lesson 4, can place a significant burden on healthcare systems, leading to increased healthcare costs.
                        o	Energy: Climate change can affect energy production and demand. For example, droughts can reduce hydropower generation, while rising temperatures can increase energy consumption for cooling.


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
                            </ul>
                        </div>

                    </div>
                </article>
            </div>
            <div class="arrowBtn">
                <Link to='/article/2' class="previousBtn">
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
                <Link to='/article/4' class="nextBtn">
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