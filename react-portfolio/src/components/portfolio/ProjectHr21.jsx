import React from 'react';
import Keywords from "./Keywords";
import {IoIosRocket} from "react-icons/io";
import P21IMG from "../../assets/ProjectHR21-Skills.jpg";
import DASHBOARD from "../../assets/ProjectHR21-Dashboard.jpg";



function Projecthr21(props) {

    return (
        <div>

            <div className='porfolio__modal-btn'>
                <a href="https://projecthr-21.herokuapp.com/" target="_blank" className='btn btn-tertiary'>Demo</a>
                <a href={props.git} className='btn btn-secondary' target="_blank">Github</a>
            </div>

            <div className="portfolio__modal-para">
                <Keywords words={props.words}/>

            </div>

            <div className="portfolio__modal-para">

                <h3 className="portfolio__modal-heading">Problem:</h3>
                <p>
                    I am working on a sentiment twitter model with python...
                </p>
                <p>
                    <b> Who in my organization can help me? </b>
                </p>
                <p style={{"margin-top": "1rem"}}>
                    <b> In times of remote work, covid19, and flexible working models we loose track of the competencies
                        that our colleagues have!</b>
                </p>

            </div>

            <div className="portfolio__modal-para">

                <h3 className="portfolio__modal-heading">Goal:</h3>
                <p>
                    Creating direct horizontal <b>collaboration links</b>.
                    Meeting the demands that our "new work" world requires.
                    People are the most crucial asset to adapt to fast changing environments and remaining
                    competitive...
                    Lets help our <b>workforce</b> to exploit their <b>full potential</b>.
                </p>

            </div>

            <div className="portfolio__modal-p21-features">


                <article className="portfolio__modal-details">
                    <IoIosRocket className="portfolio__modal-details-icon"/>
                    <div>
                        <h4>Secure</h4>
                    </div>
                </article>
                <article className="portfolio__modal-details">
                    <IoIosRocket className="portfolio__modal-details-icon"/>
                    <div>
                        <h4>Automated</h4>
                    </div>
                </article>
                <article className="portfolio__modal-details">
                    <IoIosRocket className="portfolio__modal-details-icon"/>
                    <div>
                        <h4>Easy</h4>
                    </div>
                </article>


            </div>

            <div className="portfolio__modal-para">

                <h3 className="portfolio__modal-heading">Example:</h3>

                <div className="porfolio__modal-para-grid">


                    <div className="porfolio__modal-image-div">
                        <img className="portfolio__modal-image" src={P21IMG} alt=""/>
                    </div>


                    <div className="portfolio__modal-para-grid-text">
                        <h4 style={{"text-align":"center"}} >Analysis of my thesis</h4>
                        <p style={{"margin-top":"1rem"}}>
                            1. Machine Learning within a production line

                        </p>
                        <p>
                            2. Reinforcement Learning in a serial supply chain
                        </p>

                        <div style={{"margin-top":"4rem"}} className="porfolio__modal-image-div">
                            <img className="portfolio__modal-image" src={DASHBOARD} alt=""/>
                        </div>
                    </div>


                </div>

            </div>


            <div className="portfolio__modal-para">

                <h3 className="portfolio__modal-heading">Solution:</h3>

                <p>
                    Using NLP we extract competencies from the daily textual work.
                    Each employee receives an private profile to monitor their skills.
                    They can then decide, whether they want to be found within the organization as the expert that they are!
                </p>

                <div className="porfolio__modal-btn">
                <a className="btn btn-primary" href="https://projecthr-21.herokuapp.com/" target="_blank">Try it out!</a>
                </div>
            </div>


        </div>
    );
}

export default Projecthr21;