import React, {useState} from 'react'
import './portfolio.css'
import IMG1 from '../../assets/production.jpg'
import IMG2 from '../../assets/intelligent agent.jpg'
import IMG3 from '../../assets/chatbot.jpg'
import IMG4 from '../../assets/technology.jpg'
import IMG5 from '../../assets/ai_cropped.jpg'
import IMG6 from '../../assets/collaboration.jpg'


import {AiOutlineClose} from "react-icons/ai";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

import BaBwl from "./BA_BWL";
import BaCS from "./BA_CS";
import Rasa from "./RASA";
import SoNLP from "./SO_NLP";
import ExpAI from "./Exp_AI";
import Projecthr21 from "./ProjectHr21";

const data = [
    {
        id: 6,
        image: IMG6,
        title: 'ProjectHR21 - NLP-Web-Application to transform the way we work together',
        github: 'https://github.com',
        subheading: 'Overcoming the boundaries of personal networks and creating new ways of collaboration',
        keywords: ["Natural Language Processing", "Web-Application", "MERN-Stack", "Python", "HR-TECH", "Competence Extraction", "Skills Monitoring", "New Work"],
        more: '#',
    },
    {
        id: 5,
        image: IMG5,
        title: 'ExplainableAI - Making Neural Networks explainable for NLP',
        github: 'https://github.com/danielschroter/explainableAI',
        subheading: 'Applying "explainability" techniques to understand the motives and decisions of neural networks.',
        keywords: ["Natural Language Processing", "Deep Learning", "Explainability", "Neural Networks", "Interpretability", "Siamese Neural Networks", "Python", "LIME", "SHAP", "Key-Point Extraction"],
        more: '#',
    },

    {
        id: 2,
        image: IMG2,
        title: 'Reinforcement Learning to optimize cost within a multi-agent supply chain',
        github: 'https://github.com/danielschroter/thesis_cs_rl',
        subheading: "Bachelor Thesis: Training an agent with Reinforcement Learning Algorithms to optimize cost in a serial multi-agent supply chain.",
        keywords: ["Reinforcement Learning", "DDPG", "Policy Gradient", "Multi Agent Supply Chain", "Cost Optimization", "Open AI Gym"],
    },
    {
        id: 3,
        image: IMG3,
        title: 'Builduing a chatbot with RASA',
        github: '#',
        more: '#',
        keywords: ["RASA", "Question-Answering-Systems", "AI-based Chatbot", "FastAPI", "Python", "Elasticsearch", "Haystack"],

    },
    {
        id: 4,
        image: IMG4,
        title: 'NLP: Automatic Tagging of StackOverflow questions',
        subheading: "Applying Deep Learning to automatically tag StackOverflow questions based on Title & Body text",
        keywords: ["Natural Language Processing", "Deep Learning", "Python", "Neural Networks", "Bag of Words", "LSTM", "Word Embeddings", "Grid Search"],
        github: 'https://github.com/danielschroter/so_nlp',

    },
    {
        id: 1,
        image: IMG1,
        title: 'Predictive Maintenance within a production line',
        github: 'https://github.com/danielschroter/predictive_main_bosch',
        subheading: "Bachelor Thesis: Applying machine learning algorithms for predictive maintenance in a production line.",
        keywords: ["R", "Machine Learning", "CRISP-DM", "Business Process", "t-sne", "random forest", "xgBoost", "cost sensitive learning"]
    },


]

const Portfolio = () => {

    const {id} = useParams();


    const [toggleState, setToggleState] = useState(0);
    const [initialLoad, setInitialLoad] = useState(false);

    const toggleTab = (index) => {
        setToggleState(index);
        setInitialLoad(true);
    }

    useEffect(() => {
        if(!initialLoad) {
            switch (id) {
                case "expAI":
                    setToggleState(5);
                    break;
                case "predMain":
                    setToggleState(1);
                    break;
                case "projecthr21":
                    setToggleState(6);
                    break;
                case "autoTagging":
                    setToggleState(4);
                    break;
                case "chatbot":
                    setToggleState(3);
                    break;
                case "reinforcement":
                    setToggleState(2);
                    break;
                default:
                    setToggleState(0);
            }
        }
    })


    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {data.map(({id, image, title, github, subheading, keywords}) => {
                    return (< >
                        <div key={id} className="portfolio__item">
                            <div className="portfolio__item-image-div">
                                <img className="portfolio__item-image" src={image} alt={title}/>
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                {id === 3 ? null : <a href={github} className="btn" target='_blank'>Github</a>}

                                <a className="btn btn-primary" onClick={() => toggleTab(id)}>Read More</a>
                                {id === 6 ? <a href="https://projecthr-21.herokuapp.com/" target="_blank"
                                               className='btn btn-primary'>Demo</a> : null}
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
                                    (id === 2 ? <BaCS git={github} words={keywords}/> :
                                        (id === 3 ? <Rasa words={keywords}/> :
                                            (id === 4 ? <SoNLP words={keywords} git={github}/> :
                                                (id === 5 ? <ExpAI words={keywords} git={github}/> :
                                                    (id === 6 ?
                                                        <Projecthr21 words={keywords} git={github}/> : null)))))}

                            </div>
                        </div>


                    </>)
                })}

            </div>
        </section>
    )
}

export default Portfolio