import React from 'react';
import Keywords from "./Keywords";
import Paper from "../../assets/key-point-analysis-and-explanations-for-quantitative-text-analysis.pdf";
import Slides from "../../assets/Final_presentation.pdf";
import {IoIosRocket} from "react-icons/io";


function ExpAI(props) {

    return (
        <div>

            <div className='porfolio__modal-btn btn-expai'>
                <a href={Paper} download className='btn btn-tertiary'>Download Paper</a>
                <a href={Slides} download className='btn btn-tertiary'>Download Presentation</a>
                <a href={props.git} className='btn btn-secondary' target="_blank">Github</a>
            </div>

            <div className="portfolio__modal-para">
                <Keywords words={props.words}/>

            </div>

            <div className="portfolio__modal-para">

                <h3 className="portfolio__modal-heading">Goal:</h3>
                <p>
                    An increasing fraction of public debates takes place online. The ability to automatically capture
                    key ideas and opinions in online communication can be a game changer for politics and
                    businesses. Argumentative texts can often be reduced to some core ideas, called key points. In this work we build models that assign arguments to their corresponding key-points and
                    thereby asking our models: "Why is a certain argument assigned to a specific keypoint?".

                </p>

            </div>

            <h3 className="portfolio__modal-heading">Performance:</h3>
            <div className="portfolio__modal-achievements">


                <article className="portfolio__modal-details">
                    <IoIosRocket className="portfolio__modal-details-icon"/>
                    <div>
                        <h4>Siamese Neural Network outperforming current solutions by up to 5%</h4>
                    </div>
                </article>
                <article className="portfolio__modal-details">
                    <IoIosRocket className="portfolio__modal-details-icon"/>
                    <div>
                        <h4>Novel Approach of Applying LIME to Siamese Neural Networks</h4>
                    </div>
                </article>


            </div>

            <div className="portfolio__modal-para">

                <h3 className="portfolio__modal-heading">Example:</h3>

                <p>
                    We modified LIME to work with Siamese Neural Networks. Thereby we get an understanding why the model
                    makes certain decisions.<br/>
                    Let's have a look at an example:
                </p>
                <p style={{"margin-top": "1rem"}}>

                    <b>The Argument:</b> The United States <span style={{"background-color":"rgba(229, 143, 0, 0.2)"}}>is</span> undoubtedly the <span style={{"background-color":"rgba(229, 143, 0, 0.35)"}}>richest</span>
                     <span style={{"background-color":"rgba(229, 143, 0, 0.2)"}}> country</span> that exists, its <span style={{"background-color":"rgba(229, 143, 0, 0.7)"}}>income</span>
                    <span style={{"background-color":"rgba(229, 143, 0, 0.2)"}}> is </span>
                    really <span style={{"background-color":"rgba(229, 143, 0, 0.3)"}}>high </span>
                    and <span style={{"background-color":"rgba(229, 143, 0, 0.3)"}}>higher</span> than that of any other <span style={{"background-color":"rgba(229, 143, 0, 0.3)"}}>country</span>,

                    apart from being one of the <span style={{"background-color":"rgba(229, 143, 0, 0.2)"}}>main</span>  <span style={{"background-color":"rgba(229, 143, 0, 0.7)"}}> productive</span>
                    <span style={{"background-color":"rgba(229, 143, 0, 0.2)"}}> countries </span>
                     on the <span style={{"background-color":"rgba(61,149,187,0.43)"}}>planet</span>.
                </p>
                <p style={{"margin-top": "1rem"}}>
                    <b>Key-Point:</b> The US has a good economy/high standard of living.
                </p>

                <p style={{"margin-top": "1rem"}}>
                    <b>Prediction probabilities:</b> <span style={{"color":"rgba(229, 143, 0, 0.8)"}}><b>Similar</b></span> 0.78 , <span style={{"color":"rgba(61,149,187, 0.8)"}}><b>Dissimilar</b></span> 0.22.
                </p>

                <p style={{"margin-top": "1rem"}}>
                    <b>Explanation:</b> The words in orange contribute to a high similarity score, whereas the blue words work against a matching. Even though the words "income" and "productive country" are not part of the key-point,
                    the model has learned that they represent concepts of a "good economoy" and a "high standard of living".
                </p>






            </div>


            <div className="portfolio__modal-para">

                <h3 className="portfolio__modal-heading">Abstract:</h3>

                <p>
                    An increasing fraction of public debates takes
                    place online. The ability to automatically capture key ideas and opinions in online communication can be a game changing for politics and
                    businesses. Argumentative texts can often be
                    reduced to some core ideas, called key points.
                    Our work addresses the research question presented in the KPA shared task 2021 of matching arguments to key points. We propose two
                    different models. The first model combines a
                    transformer based denoising autoencoder (TSDAE) with a siamese neural network. The second one enriches a transformer based siamese
                    neural network with additional features like
                    part-of-speech tags. Our evaluation shows and
                    performance improvement of 2% to 5% compared to the best performing model in prior research. On the other hand those models are
                    characterised by a highly complex architecture
                    and low interpretability. We implement different methods to answer why certain argument
                    key point pairs receive a high similarity score.
                    Furthermore, we propose a simple approach
                    on applying LIME to siamese neural networks
                    (SNNs) which is novel in literature. Hence,
                    our twofold contribution to research comprises
                    the presentation of new models for solving the
                    KPA shared task and a new approach of applying LIME to SNNs
                </p>

            </div>


        </div>
    );
}

export default ExpAI;