import React from 'react';

import Regera from '../carApi/Regera.jpg'
import Tesla from '../carApi/tesla.jpg'

export default class Hybrid extends React.Component{
    render(){
        return(
            <div>
                <img className="i" style={{width:"650px"}} src={Regera}/>
                    <br/>
                    <button>Add to cart</button>
                    <p>The Koenigsegg Regera is a limited production, plug-in hybrid sports car manufactured by Swedish high-performance sports carmaker Koenigsegg. It was unveiled at the 2015 Geneva Motor Show. The name Regera is a Swedish verb, meaning "to reign" or "to rule." Only 80 units will be built, of which 40 have already been sold as of March 2016. Koenigsegg states that the Regera will be the most powerful and fastest accelerating production car ever.</p><br/>

                    <img className="j" style={{width:"650px"}} src={Tesla}/>
                    <br/>
                    <button>Add to cart</button>
                    <p>The Tesla Model S is a full-sized all-electric five-door, luxury liftback, produced by Tesla, Inc., and introduced on 22 June 2012.[14] It scored a perfect 5.0 NHTSA automobile safety rating.[15] The EPA official range for the 2017 Model S 100D,[16] which is equipped with a 100 kWh (360 MJ) battery pack, is 335 miles (539 km), higher than any other electric car.The Model S has a top speed of 155 mph (250 km/h) and it accelerates from 0 to 60 miles per hour (0 to 97 km/h) in 2.8 seconds, despite the lower total motor power, in part due to the improved traction of the all-wheel drive powertrain. </p><br/>
            </div>
        )
    }
}