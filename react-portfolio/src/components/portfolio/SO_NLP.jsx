import React from 'react';
import Keywords from "./Keywords";
import Model_img from "../../assets/architecture_so-nlp.png";


function SoNLP(props) {

    return (
        <div>

            <div className='porfolio__modal-btn'>
                <a href={props.git} className='btn btn-secondary' target="_blank">Github</a>
            </div>

            <div className="portfolio__modal-para">
                {/*<h4 className="portfolio__modal-heading">Keywords:</h4>*/}
                <Keywords words={props.words}/>

            </div>

            <div className="portfolio__modal-para" style={{"margin-top": "5rem"}}>

                <h3 className="portfolio__modal-heading">The "Presentation" Pipeline</h3>

                <p>
                    We have created a jupyter notebook containing a data-processing/training/evaulation pipeline that
                    can be used for presentational
                    purposes and also acts as an entry point to understand the structure and processes of the remaining
                    notebooks.
                    Please have a look at <a
                    href="https://github.com/danielschroter/so_nlp/blob/master/presentation_pipeline.ipynb"
                    target="_blank">presentation_pipeline.ipynb</a> to achieve a better understanding of the steps if
                    necessary.
                </p>

            </div>

            <div className="portfolio__modal-para" style={{"margin-top": "3rem"}}>

                <h3 className="portfolio__modal-heading">The Architecture</h3>

                <p>
                    We present the different model architectures in this project. Each of the three model architectures
                    has an associated notebook that leads through the data processing and model training process.
                    You can find those notebooks in the Github Repo. The most sophisticated solution shall be briefly
                    presented here.
                </p>


                <h4 className="portfolio__modal-heading">3. Linear LSTM model for Title OR Body</h4>

                <p>
                    This model is a variation of the Linear LSTM model for Title OR Body which takes in both
                    question title and question body as inputs. These two inputs will be masked and passed into two
                    separate LSTM layers (we use separate layers to allow them to individually discern between
                    stylistic / syntactical differences in title and body). Their outputs are concatenated and
                    processed as in the linear LSTM.</p>
                <p style={{"margin-top": "1rem"}}>
                    We provide a visualization of the model architecture below. For this visual example, we go with the
                    following properties:
                </p>

                <div className="so_nlp_img">
                    <img src={Model_img} alt="so_nlp_img"/>
                </div>


            </div>

            <div className="portfolio__modal-para" style={{"margin-top": "3rem"}}>

                <h3 className="portfolio__modal-heading">The Results</h3>

                <p>
                    Our metric for model evaluation is the micro f1 score, calculated over all samples in the validation
                    set. In contrast to multilabel single-class classification problems, we cannot just pick the
                    predicted target label with the highest score, since we want to predict multiple labels.
                </p>

                <p >
                    This means that we have to set some threshold that dictates how high a tag's score must be for us to
                    consider it set. Since we don't know the best threshold in advance, we iterate over all 100 possible
                    thresholds from 0.00, 0.01, 0.02 ... 0.99, 1.00 and select the one resulting in the best f1 score.
                </p>

                <div className="so__nlp-results">
                    <table>
                        <tbody>
                        <tr>
                            <td>&nbsp;model</td>
                            <td>f1 score</td>
                            <td>precision</td>
                            <td>recall</td>
                            <td>threshold</td>
                        </tr>
                        <tr>
                            <td>&nbsp;bow</td>
                            <td>&nbsp;0.622</td>
                            <td>0.667</td>
                            <td>0.582</td>
                            <td>0.3</td>
                        </tr>
                        <tr>
                            <td>&nbsp;qb</td>
                            <td>&nbsp;0.605</td>
                            <td>0.675</td>
                            <td>0.548</td>
                            <td>0.35</td>
                        </tr>
                        <tr>
                            <td>&nbsp;qbt</td>
                            <td>&nbsp;0.647</td>
                            <td>0.74</td>
                            <td>0.575</td>
                            <td>0.38</td>
                        </tr>
                        </tbody>
                    </table>
                    <article>
                        <ul className="list-results">
                            <li> <i>bow:</i> bag of words model, not optimized</li>
                            <li> <i>qb:</i> question body model with 1 intermediary dense layer, not optimized</li>
                            <li> <i>qbt:</i> question body and title model optimized via gridsearch</li>
                        </ul>
                    </article>
                </div>



            </div>


        </div>
    );
}

export default SoNLP;