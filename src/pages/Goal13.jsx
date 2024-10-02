import React from 'react';

import T1 from "../assets/Target/13.1.png";
import T2 from "../assets/Target/13.2.png";
import T3 from "../assets/Target/13.3.png";
import T4 from "../assets/Target/13.A.png";
import T5 from "../assets/Target/13.B.png";
import goal13 from "../assets/goal 13.png";

import Cards from '../components/Cards.jsx';
import Footer from '../components/Footer.jsx';
import Nav from '../components/Nav.jsx';
import Top from '../components/Top.jsx';
import './Goal13.css';

const Goal13 = () => {
  const Cards_info = [
    {
      img: T1,
      to: '/',
      title: '',
      span: 'Enhancing Climate Resilience and Adaptation',
      text: 'Strengthening Global Capacity to Cope with Climate-Related Hazards and Disasters',
      show: 'show',
      show2: 'none',
    },
    {
      img: T2,
      to: '/',
      title: '',
      span: 'Climate Change Integration',
      text: 'Embracing Climate Resilience and Sustainability',
      show: 'none',
      show2: 'show',
    },
    {
      img: T3,
      to: '/',
      title: '',
      span: 'Building Knowledge and Capacity',
      text: 'Empowering communities through education and awareness.',
      show: 'show',
      show2: 'none',
    },
    {
      img: T4,
      to: '/',
      title: '',
      span: 'Implementing the UN Framework',
      text: `Mobilizing Climate Finance and Promoting Mitigation Actions`,
      show: 'none',
      show2: 'show',
    },
    {
      img: T5,
      to: '/',
      title: '',
      span: 'Empowering Vulnerable Communities for Climate Resilience',
      text: 'Enhancing Planning and Management Capacity in Underdeveloped Nations',
      show: 'show',
      show2: 'none',
    },
    {
      img: goal13,
      to: 'https://www.globalgoals.org/goals/13-climate-action/',
      title: 'Goal 13: Climate Action',
      span: 'Official Website',
      text: 'Take Urgent Action T0 Combat Climate Change And Its Impacts.',
      show: 'none',
      show2: 'show',
      target: '_blank'
    },
  ];

  return (
    <>
      <Nav></Nav>
      <div class="goal">
        <div class="goal-contain">
          <h2>
            Goal 13: Climate Action
          </h2>
          <p>
            Take urgent action to combat climate change and its impacts.
          </p>
        </div>
        <h1>
          Targets
        </h1>
        <Cards cards_info={Cards_info}></Cards>
        <h1>
          Things To Do
        </h1>
        <ul>
          <li><span class="material-symbols-outlined">
            volunteer_activism
          </span>
            <strong>Support a Goal 13 charity:</strong> Every donation, no matter how small, can contribute to climate action.
          </li>
          <li><span class="material-symbols-outlined">
            recycling
          </span>
            <strong>Recycle:</strong> Reduce waste by recycling paper, glass, plastic, metal, and electronics.
          </li>
          <li><span class="material-symbols-outlined">
            compost
          </span>
            <strong>Compost:</strong> Turn food scraps into nutrient-rich compost to reduce waste and improve soil health.
          </li>
          <li><span class="material-symbols-outlined">
            forward_10
          </span>
            <strong>Choose reusable products:</strong> Opt for eco-bags, reusable water bottles, and cups to minimize plastic waste.
          </li>
          <li><span class="material-symbols-outlined">
            eco
          </span>
            <strong>Buy eco-friendly products:</strong> Look for products made sustainably and with minimal environmental impact.
          </li>
          <li><span class="material-symbols-outlined">
            directions_car
          </span>
            <strong>Reduce car use:</strong> Walk, bike, or take public transport to decrease carbon emissions.
          </li>
          <li><span class="material-symbols-outlined">
            set_meal
          </span>
            <strong>Cut back on meat:</strong> Consider becoming vegetarian for one day a week to reduce your environmental footprint.
          </li>
          <li><span class="material-symbols-outlined">
            newspaper
          </span>
            <strong>Use less paper:</strong> Minimize printing and opt for digital alternatives.
          </li>
          <li><span class="material-symbols-outlined">
            pets
          </span>
            <strong>Pet Adopt:</strong> Support local animal shelters and avoid contributing to pet overpopulation.
          </li>
          <li><span class="material-symbols-outlined">
            co2
          </span>
            <strong>Offset your carbon emissions:</strong> Calculate your carbon footprint and purchase climate credits.
          </li>
          <li><span class="material-symbols-outlined">
            info
          </span>
            <strong>Stay informed:</strong> Follow climate news and engage with the Global Goals online or through social media.
          </li>
        </ul>
      </div>
      <Footer></Footer>
      <Top></Top>
    </>
  )
}

export default Goal13