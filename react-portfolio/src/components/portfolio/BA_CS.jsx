import React from 'react';
import Keywords from "./Keywords";
import Thesis_CS from "../../assets/BA_Daniel_Schroter_final.pdf";


function BaCS(props) {

    return (
        <div>

            <div className='porfolio__modal-btn'>
                <a href={Thesis_CS} download className='btn btn-tertiary'>Download Paper</a>
                <a href={props.git} className='btn btn-secondary' target="_blank">Github</a>
            </div>

            <div className="portfolio__modal-para">
                <Keywords words={props.words}/>

            </div>

            <div className="portfolio__modal-para">

            <h4 className="portfolio__modal-heading">Goal:</h4>
            <p>
                Within this thesis I applied RL-algorithms to train an agent for optimizing cost within a serial supply chain.
                Where usually the Bullwhip effect leads to high inventory holding cost, I could show that an artificial agent is capable of reducing cost and hence increasing profitability.
                The behaviour of the other actors in the supply chain have been modelled as: random, human-like and optimal.
                Especially when other actors are modelled as human-like we could reduce the cost by 69%.
                If you are interested in the details, feel free to download the paper...

            </p>

            </div>


            <div className="portfolio__modal-para">

                <h4 className="portfolio__modal-heading">Abstract:</h4>

                <p>
                    In serial supply chains, humans tend to show irrational behaviour leading to high cost. The beer
                    distribution game is often taught in management classes to demonstrate the bullwhip effect - a
                    phenomenon describing that orders from the supplier tend to have a higher variance than sales
                    to the buyer. This distortion leads to fluctuations in inventory levels, causing unnecessary high
                    costs. The optimal ordering policy is already known, but unfortunately, humans usually tend to
                    show different behaviour. Hence, we investigate whether reinforcement learning can derive
                    better ordering policies. Thereby the co-players of our intelligent agent either act randomly,
                    optimally or human-like (Sterman formula, 1989). So far, mainly action-value reinforcement
                    learning algorithms have been implemented to solve the beer distribution game. The game is
                    originally defined as a discrete setting (discrete order quantities), which might be the reason
                    that policy-gradient algorithms have not been considered yet. However, in many economic
                    situations, a continuous version of the game is applicable. The ordered quantities, for instance,
                    are so high, that simply rounding them has no major economic impact. Policy-gradient methods
                    have features that can deliver a valuable contribution to research. They can be easily extended
                    from one-dimensional decision making to multi-dimensional decision making. Hence, they can
                    be used to improve supply chains trading multiple items. We create a discrete and continuous
                    game environment that allows a simple experimentation with reinforcement learning
                    algorithms. We further implement the policy-gradient methods REINFORCE and Deep
                    Deterministic Policy Gradient (DDPG). Within this study, we show that they perform on the
                    same level as the current state of the art action-value approaches. Thereby we create a starting
                    point for future research with policy-gradient algorithms in serial supply chains.
                </p>

            </div>




        </div>
    );
}

export default BaCS;