import React, {useState} from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'


import {AiOutlineClose} from "react-icons/ai";

import BaBwl from "./BA_BWL";
import BaCS from "./BA_CS";

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Predictive Maintenance within a production line',
        github: 'https://github.com/danielschroter/predictive_main_bosch',
        subheading: "Bachelor Thesis: Applying machine learning algorithms for predictive maintenance in a production line.",
        keywords: ["R", "Machine Learning", "CRISP-DM", "Business Process", "t-sne", "random forest", "xgBoost", "cost sensitive learning"]
    },
    {
        id: 2,
        image: IMG2,
        title: 'Reinforcment Learning to optimize cost within a multi-agent supply chain',
        github: 'https://github.com/danielschroter/thesis_cs_rl',
        subheading: "Bachelor Thesis: Training an agent with Reinforcement Learning Algorithms to optimize cost in a serial multi-agent supply chain.",
        keywords: ["Reinforcement Learning", "DDPG", "Policy Gradient", "Multi Agent Supply Chain", "Cost Optimization", "Open AI Gym"],
    },
    {
        id: 3,
        image: IMG3,
        title: 'Builduing a chatbot with RASA',
        github: 'https://github.com',
        more: '#',
    },
    {
        id: 4,
        image: IMG4,
        title: 'Builduing an autonomous Crane',
        github: 'https://github.com',
        more: '#',
    },
    {
        id: 5,
        image: IMG5,
        title: 'Peerroulette - Connecting with like minded people in video chats',
        github: 'https://github.com',
        more: '#',
    },
    {
        id: 6,
        image: IMG6,
        title: 'ProjectHR21 - Creating an NLP-Web-Application to transform the way we work together',
        github: 'https://github.com',
        more: '#',
    },
]

const Portfolio = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {data.map(({id, image, title, github, subheading, keywords}) => {
                    return (< >
                        <div key={id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={title}/>
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} className="btn" target='_blank'>Github</a>
                                <a className="btn btn-primary" onClick={() => toggleTab(id)}>Read More</a>
                            </div>
                        </div>
                        <div className={toggleState === id ? "portfolio__modal active-modal" : "portfolio__modal"}>
                            <div className="portfolio__modal-content">
                                <AiOutlineClose className="portfolio__modal-close" onClick={() => toggleTab(0)}/>
                                <h2 className="portfolio__modal-title">{title}</h2>
                                <div className="portfolio__modal-subheading">
                                    <h3>
                                        {subheading}
                                    </h3>
                                </div>
                                {id === 1 ? <BaBwl git={github} words={keywords}/> :
                                    (id === 2 ? <BaCS git={github} words={keywords}/> : null)}
                            </div>
                        </div>


                    </>)
                })}

            </div>
        </section>
    )
}

export default Portfolio