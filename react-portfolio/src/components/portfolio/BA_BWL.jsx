import React from 'react';
import Thesis_BWL from "../../assets/BA_final_3.pdf";
import Keywords from "./Keywords";

function BaBwl(props) {
    return (
        <div>

            <div className='porfolio__modal-btn'>
                <a href={Thesis_BWL} download className='btn btn-tertiary'>Download Paper</a>
                <a href={props.git} className='btn btn-secondary' target="_blank">Github</a>
            </div>

            <div className="portfolio__modal-para">
                {/*<h4 className="portfolio__modal-heading">Keywords:</h4>*/}
                <Keywords words={props.words}/>
            </div>

            <div className="portfolio__modal-para">

            <h4 className="portfolio__modal-heading">Goal:</h4>
            <p>
                Within this thesis I applied various Machine Learning Techniques to solve a predictive maintenance task within a production line.
                Thereby we used data from a <a href="https://www.kaggle.com/competitions/bosch-production-line-performance/overview">BOSCH Competition on Kaggle</a>.
                The goal was to run through a standard process model (CRISP-DM) for data science and develop a case of successfully deriving a solution with a positive impact on business performance.
                Feel free to download the pdf and find out more...
            </p>

            </div>


            <div className="portfolio__modal-para">

                <h4 className="portfolio__modal-heading">Abstract:</h4>

                <p>
                    In times of industry 4.0, artificial intelligence and big data
                    the workforce needs to be well educated in applying those technologies. Within this
                    environment, a leading German manufacturing company faced the challenge of predicting
                    whether a produced part fails the internal quality control. This would enable delivering
                    high-quality products to the end user at lower costs. The target group of the developed
                    case are students with a business background.
                </p>

                <p>Therefore, I give weight to certain focal
                    points. The first one is the process of solving those challenges utilising a standard process
                    model for data mining (CRISP DM). The second one is the application of different
                    techniques from the field of machine learning. Finally, I attach weight to the
                    demonstration of how business and statistical knowledge together are needed to improve
                    the performance of a model. This study does neither aim at developing an ideal model for
                    a given dataset nor to provide the mathematical foundations of the applied techniques.
                    Within the resulting case, I present a holistic overview of developing a predictive model
                    for a real-world problem within given constraints. This includes the application of
                    creativity, inventiveness and the need for compromises during the data mining process.
                    With this purpose I recommend teaching the developed case. It is relevant for both
                    academic researches teaching Big Data cases and for decision makers dealing with the
                    topic of predictive analytics.

                </p>


            </div>




        </div>
    );
}

export default BaBwl;