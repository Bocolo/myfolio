import React from 'react';
import './banner.styles.scss'
import westwater from '../../imgs/westwater.jpg';
import computer from '../../imgs/computer.jpg';
import bluepainting from '../../imgs/bluepaint.jpg';

import designmix from '../../imgs/designmix.jpg';

import designpurple from '../../imgs/designpurple.jpg';
const Banner = () => {
    return (

            
    // <div style={{backgroundImage: `url(${tree})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover' }} >
       
    //     <h1 className="f2 f-subheadline-l measure lh-title fw9">A Night Taking Photos at San Francisco’s Spooky Ruins of the Sutro Baths</h1>
    //     <h2 className="f6 fw6 black">A story by Nancy Drew</h2>
    // </div>
    <div className='image'>
        <img className='picture' src={designmix} alt='item' />
        <h1 className="text f2 f-subheadline-l measure lh-title fw9 grow ">Here we are</h1>
        
    </div>
    //no-repeat center right
    //<div style={{backgroundImage: `url('../../imgs/tree.jpg')` }}>
    )
}
//'https://i.ibb.co/GCCdy8t/womens.png'

export default Banner;