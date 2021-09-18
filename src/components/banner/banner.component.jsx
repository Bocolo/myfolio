import React from 'react';
import './banner.styles.scss';
import Box from '../box/box.component';
import bluepainting from '../../imgs/bluepaint.jpg';



const Banner1 = () => {
    return (

   
    <div className='image brack'>
        <img className='picture ' src={bluepainting} alt='item' />
       <div className='boxinpic'><Box/></div> 

   
        
    </div>
  
    )
}
//'https://i.ibb.co/GCCdy8t/womens.png'

export default Banner1;