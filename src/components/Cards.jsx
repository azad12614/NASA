import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

function Cards({ cards_info }) {
    return (
        <>
            <div class="links">
                <div class="info">
                    {cards_info.map((card) => (
                        <div class="items">
                            <img src={card.img} alt="" class={card.show} loading="lazy" />
                            <div class="dis">
                                <Link to={card.to} target={card.target}>{card.title}</Link>
                                <span>{card.span}</span>
                                <p>{card.text}</p>
                            </div>
                            <img src={card.img} alt="" class={card.show2} loading="lazy" />
                        </div>
                    ))}
                </div>
            </div >
        </>
    );
}

export default Cards;
