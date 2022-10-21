import React from 'react';
import './experience.css';

import {BsPatchCheckFill} from "react-icons/bs";

const Experience = () => {
    return (
        <section id="experience">
            <h5>The Skills I have</h5>
            <h2>My Experience</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Technology</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Python</h4>
                                {/*<small className="text-light">Experienced</small>*/}
                            </div>
                        </article>
                        <article className="experience__details">

                            <BsPatchCheckFill className="experience__details-icon"/>

                            <div>
                                <h4>Deep Learning & Machine Learning</h4>
                                {/*<small className="text-light">Experienced</small>*/}
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Natural Language Processing</h4>
                                {/*<small className="text-light">Experienced</small>*/}
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Cost Sensitive Learning</h4>
                                {/*<small className="text-light">Experienced</small>*/}
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Explainable AI</h4>
                                {/*<small className="text-light">Experienced</small>*/}
                            </div>

                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Rasa</h4>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Web Development - MERN Stack</h4>
                                {/*<small className="text-light">Experienced</small>*/}
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Java | R | React | JavaScript | Docker | MongoDB</h4>
                                {/*<small className="text-light">Intermediate</small>*/}
                            </div>
                        </article>
                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Management</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Entrepreneurial Thinking</h4>
                                {/*<small className="text-light">Experienced</small>*/}
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Statistics</h4>
                                {/*<small className="text-light">Experienced</small>*/}
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Management Science</h4>
                                {/*<small className="text-light">Intermediate</small>*/}
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Operations Management</h4>
                                {/*<small className="text-light">Experienced</small>*/}
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Business Development</h4>
                                {/*<small className="text-light">Experienced</small>*/}
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Pitching & Presentations</h4>
                                {/*<small className="text-light">Experienced</small>*/}
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon"/>
                            <div>
                                <h4>Human Resource Management</h4>
                                {/*<small className="text-light">Experienced</small>*/}
                            </div>
                        </article>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Experience