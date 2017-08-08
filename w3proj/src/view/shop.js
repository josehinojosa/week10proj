import React from 'react';
import {Link} from 'react-router-dom';
import CSS from '../styles/index.css'
import Buggati from '../carApi/2017-Bugatti-Chiron-Sports-Car.jpg';
import Trion from '../carApi/2017-Trion-Nemesis-Front.jpg';
import Ferrari from '../carApi/ferrari-480x320.jpg';
import FordF1 from '../carApi/Ford-EcoBoost10L-01.jpg';
import Koenigsegg from '../carApi/koenigsegg.jpg';
import Mclaren from '../carApi/mclaren-675lt-longtail-0822.0.0.png';
import Porsche from '../carApi/Porsche-Boxster-Spyder-front-xlarge_trans_NvBQzQNjv4BqB1FoUxnpzDgOvWx5yBOTWenjwzLTge-EHCkJ66RZ6Cg.jpg';
import Pagani from '../carApi/pugani.jpg';
import Regera from '../carApi/Regera.jpg';
import Tesla from '../carApi/tesla.jpg';

export default class Shop extends React.Component{
    render(){
        return(
            <div className="pics">
                <Link path to = "/oneseat"><div className="single">One Seater</div></Link>
                <Link path to = "/twoseat"><div className="double">Coupe</div></Link>
                <Link path to = "/hybrid"><div className="hy">Hybrid</div></Link>
                </div>
        )
    }
}