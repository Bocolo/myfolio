import React from 'react';
import './banner.styles.scss'
import Whatido from '../whatido/whatido.component';
import Containerbox from '../containerbox/containerbox.component';
import Box from '../box/box.component';
import westwater from '../../imgs/westwater.jpg';
import computer from '../../imgs/computer.jpg';
import bluepainting from '../../imgs/bluepaint.jpg';

import designmix from '../../imgs/designmix.jpg';

import designpurple from '../../imgs/designpurple.jpg';

const Banner = () => {
    return (

   
    <div className='image brack'>
        <img className='picture ' src={bluepainting} alt='item' />
       <div className='boxinpic'><Box/></div> 
        {/* <div  className='picture'> */}
            {/* <Containerbox  /> */}
            {/* </div> */}
   
        
    </div>
  
    )
}
//'https://i.ibb.co/GCCdy8t/womens.png'

export default Banner;