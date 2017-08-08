import React from 'react';

import Buggati from '../carApi/2017-Bugatti-Chiron-Sports-Car.jpg'
import Trion from '../carApi/2017-Trion-Nemesis-Front.jpg'
import Ferrari from '../carApi/ferrari-480x320.jpg'
import Koenigsegg from '../carApi/koenigsegg.jpg'
import Mclaren from '../carApi/mclaren-675lt-longtail-0822.0.0.png'
import Porsche from '../carApi/Porsche-Boxster-Spyder-front-xlarge_trans_NvBQzQNjv4BqB1FoUxnpzDgOvWx5yBOTWenjwzLTge-EHCkJ66RZ6Cg.jpg'
import Pagani from '../carApi/pugani.jpg'
import Regera from '../carApi/Regera.jpg'

export default class Twoseat extends React.Component{
    render(){
        return(
            <div className="twoseater">
                    <img className="a" style={{width:"650px"}} src={Buggati}/>
                    <br/>
                    <button>Add to cart</button>
                    
                    <p>Bugattis are noticeably focused on design. Engine blocks were hand scraped to ensure that the surfaces were so flat that gaskets were not required for sealing, many of the exposed surfaces of the engine compartment featured guilloché (engine turned) finishes on them, and safety wires had been threaded through almost every fastener in intricately laced patterns. Rather than bolt the springs to the axles as most manufacturers did, Bugatti's axles were forged such that the spring passed though a carefully sized opening in the axle, a much more elegant solution requiring fewer parts. He famously described his arch competitor Bentley's cars as "the world's fastest lorries" for focusing on durability. According to Bugatti, "weight was the enemy".</p><br/>

                    <img className="b" style={{width:"650px"}} src={Trion}/>
                    <br/>
                    <button>Add to cart</button>
                    <p>The Nemesis RR is a mid-engine four wheel drive supercar. The Trion Nemesis RR will be powered by a 9.0L twin turbo charged V8 engine capable of producing 2000 hp. Power will be channelled to all four wheels via an eight-speed sequential transmission. This will be a fully loaded model, complete with all wheel drive, traction management system and 10 speaker JBL infotainment. The Trion Nemesis RR would be competing with the likes of Bugatti Veyron and the Koenigsegg One:1.</p><br/>

                    <img className="c" style={{width:"650px"}} src={Ferrari}/>
                    <br/>
                    <button>Add to cart</button>
                    <p>LaFerrari is the first mild hybrid from Ferrari, providing the highest power output of any Ferrari whilst decreasing fuel consumption by 40 percent.[26] LaFerrari's internal combustion engine is a mid-rear mounted Ferrari F140 65° V12 with a 6.3-litre. Ferrari states that the car has a top speed exceeding 217 mph (349 km/h), similar to the Enzo's top speed, however, it is capable of reaching 100 km/h (62 mph) in 2.4 seconds</p><br/>

                    <img className="e" style={{width:"650px"}} src={Koenigsegg}/>
                    <br/>
                    <button>Add to cart</button>
                    <p>The Koenigsegg has the name One:1 which comes from the power (1360 PS) to weight (1360 kg) ratio giving the car 1 bhp per 1 kg weight. The 1341 bhp power output is the equivalent of one megawatt, which Koenigsegg claims makes the One:1 the ‘world's first megacar’.</p><br/>


                    <img className="f" style={{width:"650px"}} src={Mclaren}/>
                    <br/>
                    <button>Add to cart</button>
                    <p>The McLaren F1 GTR was a racing variant of the McLaren F1 sports car first produced in 1995 for grand touring style racing, such as the BPR Global GT Series, FIA GT Championship, JGTC, and British GT Championship. It is most famous for its overall victory at the 1995 24 Hours of Le Mans where it won against faster purpose-built prototypes. McLaren F1 GTRs raced internationally until 2005 when the final race chassis was retired.</p><br/>

                    <img className="g" style={{width:"650px"}} src={Porsche}/>
                    <br/>
                    <button>Add to cart</button>
                    <p>The Porsche 911 (pronounced Nine Eleven or German: Neunelfer) is a two-door, 2+2 high performance classic German sports cars made since 1963 by Porsche AG of Stuttgart, Germany. It has a rear-mounted six cylinder boxer engine and all round independent suspension. It has undergone continuous development, though the basic concept has remained little changed. The engines were air-cooled until the introduction of the Type 996 in 1998, with Porsche's "993" series, produced in model years 1994–1998, being the last of the air-cooled Porsches.In the 1999 international poll for the award of Car of the Century, the 911 came fifth.[5] It is one of two in the top five that had remained continuously in production.</p><br/>
                    
                    <img className="h" style={{width:"650px"}} src={Pagani}/>
                    <br/>
                    <button>Add to cart</button>
                    <p>The Pagani Zonda is a mid-engined sports car built by the Italian manufacturer Pagani. It debuted in 1999, and production ended in 2011, with three special edition cars, the Zonda 760RS, Zonda 760LH and the Zonda 764 Passione, being produced in 2012, and another special edition car, the Zonda 760RSJX, being produced at the end of 2014.The Pagani Zonda has a top speed of 218 mph (350.8 km/h), accelerates to 0 to 60 mph (0.0 to 96.6 km/h) in less than 2.7 seconds, can brake from 60 to 0 mph (96.6 to 0.0 km/h) in 96.0 ft (29.3 m), and corners at 1.62g</p><br/>

                    <img className="i" style={{width:"650px"}} src={Regera}/>
                    <br/>
                    <button>Add to cart</button>
                    <p>The Koenigsegg Regera is a limited production, plug-in hybrid sports car manufactured by Swedish high-performance sports carmaker Koenigsegg. It was unveiled at the 2015 Geneva Motor Show. The name Regera is a Swedish verb, meaning "to reign" or "to rule." Only 80 units will be built, of which 40 have already been sold as of March 2016. Koenigsegg states that the Regera will be the most powerful and fastest accelerating production car ever.</p><br/>
            </div>
        )
    }
}