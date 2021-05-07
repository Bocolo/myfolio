import React from 'react';

import {ReactComponent as CSharp} from '../../svgs/csharp.svg';
import {ReactComponent as CSS} from '../../svgs/css.svg';
import {ReactComponent as HTML} from '../../svgs/html.svg';
import {ReactComponent as JavaScript} from '../../svgs/javascript.svg';
import {ReactComponent as Python} from '../../svgs/python.svg';
import {ReactComponent as Reacti} from '../../svgs/react.svg';
import {SvgJS,SvgPy,SvgStyle,
    SvgCSS, SvgHTML, SvgReact, IconContainer} from '../icons/icons.styles.jsx';





const Languages =() => {

    return(
        <IconContainer>
            <SvgStyle><CSharp/></SvgStyle>
            <SvgJS><JavaScript/></SvgJS>
            <SvgPy><Python/></SvgPy>
            <SvgReact><Reacti/></SvgReact>
            <SvgCSS><CSS/></SvgCSS>
            <SvgHTML><HTML/></SvgHTML>
           
            
           
        </IconContainer>
    
    );
}

export default Languages;