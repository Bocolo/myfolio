import React from 'react';
import './whatido.styles.scss';

const Whatido =({title, text})=>{

    return (
        <div className='whatidocontainer tc ph4 grow'>
            <div id='test' className='whatborder dib br4 '>
              
                {/* <div id='test' className=' whatborder whatinnerborder dib br4  '> */}
                    <div className='f3 ttu ma4 pr3'>
                            {title}
                    </div>
                    <div className='f5 lh-copy pa2 pr4 '>
                        
                       {text}
                    {/* </div> */}
                   
                </div>
            </div>

        </div>
    )
}

export default Whatido;