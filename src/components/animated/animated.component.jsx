import React from 'react';
import {mainImageBG} from './animated.styles.jsx';
import './animated.styles.scss';
import computer from '../../imgs/computer.jpg';

const Animated =()=>{

    return(
    <div>
        <img className="imgban" src={computer} alt='' />
        {/* <mainImageBG src={computer} alt='f'/> */}
    </div>
    )
}

export default Animated;