import React from 'react';
import Keywords from "./Keywords";


function Rasa(props) {

    return (
        <div>

            <h3 className="portfolio__modal-subheading">Internship: Builduing an AI-Based Chatbot and Question-Answering System for Front-Business Support.</h3>


            <div className="portfolio__modal-para">
                <Keywords words={props.words}/>
            </div>

            <div className="portfolio__modal-para">

                <h4 className="portfolio__modal-heading">Project Setting:</h4>
                <p>
                    This project was done during an Internship. Hence I cannot share any Code.
                </p>

            </div>

            <div className="portfolio__modal-para">


            <h4 className="portfolio__modal-heading">Goal:</h4>
            <p>
                Within this project we built an ai-based Chatbot with Rasa to support front-business. The task included the development of the chatbot itself, as well as providing a question answering system based on deepset.ai haystack.
                Therefore we built up a pipeline for extracting the right answers from a set of documents managed with elasticsearch.
                If you want to know more, feel free to contact me :)
            </p>

            </div>



        </div>
    );
}

export default Rasa;