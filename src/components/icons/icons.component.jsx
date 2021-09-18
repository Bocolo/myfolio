import React from 'react';
import {IconContainer, 
        ImageSizer
} from './icons.styles.jsx';


const Icons = ({image, iname})=> {
    return(
        <IconContainer>
            <ImageSizer src={image} alt={iname}/>
            <div>{iname}</div>
        </IconContainer>
        
      
    )
}

export default Icons;

   
         