import React from 'react';

import FordF1 from '../carApi/Ford-EcoBoost10L-01.jpg'

export default class Oneseat extends React.Component{
    render(){
        return(
            <div className="oneseater">
                <img className="d" style={{width:"650px"}} src={FordF1}/>
                    <br/>
                    <button>Add to cart</button>
                    <p>Formula Ford is an entry-level class of single seater, open-wheel formula racing. The various championships held across the world form an important step for many prospective Formula One drivers. Formula Ford has traditionally been regarded as the first major stepping stone into formula racing after karting. The series typically sees professional career minded drivers enter alongside amateurs and enthusiasts. Success in Formula Ford can lead directly to other junior formulae such as a Formula Renault 2.0 or a Formula Three seat.</p><br/>
            </div>
        )
    }
}