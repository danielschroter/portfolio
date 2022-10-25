import React from 'react';
import {BsPatchCheckFill} from "react-icons/bs";

function Keywords(props) {
    return (
        <div>
            <div className="portfolio__modal-keywords">
                {
                    props.words.map(function(item){
                        return(
                        <article className="portfolio__modal-details">
                            <BsPatchCheckFill className="portfolio__modal-details-icon"/>
                            <div>
                                <h5>{item}</h5>
                            </div>
                        </article>)
                    } )
                }

                {/*<article className="portfolio__modal-details">*/}
                {/*    <BsPatchCheckFill className="portfolio__modal-details-icon"/>*/}
                {/*    <div>*/}
                {/*        <h4>CRISP-DM</h4>*/}
                {/*    </div>*/}
                {/*</article>*/}
                {/*<article className="portfolio__modal-details">*/}
                {/*    <BsPatchCheckFill className="portfolio__modal-details-icon"/>*/}
                {/*    <div>*/}
                {/*        <h4>Machine Learning</h4>*/}
                {/*    </div>*/}
                {/*</article>*/}
                {/*<article className="portfolio__modal-details">*/}
                {/*    <BsPatchCheckFill className="portfolio__modal-details-icon"/>*/}
                {/*    <div>*/}
                {/*        <h4>Business Process</h4>*/}
                {/*    </div>*/}
                {/*</article>*/}
                {/*<article className="portfolio__modal-details">*/}
                {/*    <BsPatchCheckFill className="portfolio__modal-details-icon"/>*/}
                {/*    <div>*/}
                {/*        <h4>t-sne</h4>*/}
                {/*    </div>*/}
                {/*</article>*/}
                {/*<article className="portfolio__modal-details">*/}
                {/*    <BsPatchCheckFill className="portfolio__modal-details-icon"/>*/}
                {/*    <div>*/}
                {/*        <h4>random forest</h4>*/}
                {/*    </div>*/}
                {/*</article>*/}
                {/*<article className="portfolio__modal-details">*/}
                {/*    <BsPatchCheckFill className="portfolio__modal-details-icon"/>*/}
                {/*    <div>*/}
                {/*        <h4>xgBoost</h4>*/}
                {/*    </div>*/}
                {/*</article>*/}
                {/*<article className="portfolio__modal-details">*/}
                {/*    <BsPatchCheckFill className="portfolio__modal-details-icon"/>*/}
                {/*    <div>*/}
                {/*        <h4>cost-sensitive learning</h4>*/}
                {/*    </div>*/}
                {/*</article>*/}
            </div>
        </div>
    );
}

export default Keywords;