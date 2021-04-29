import React from 'react';
import './box.styles.scss';


import bluepaint from '../../imgs/bluepaint.jpg';

// import Whatido from '../whatido/whatido.component';

const Boxx =()=>{
    const hidden=true;
    return (
        <div style={{backgroundImage:`url(${bluepaint})`  ,backgroundSize:'cover'}}  className='boxcontainz brack'>
            <div  className='boxborderz br4 '>
                
                <div className='boxtitlecont'>
                    <div className='tc ttu  titlewrap'>box xomponent title</div>
                
                    <div className='colside '>
                    
                        <div className='section3'></div>
                        <div className='section3 tc '>
                        //                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor sem maximus, porttitor neque sit amet, mollis ipsum. Donec aliquam sem non lorem tempor malesuada. Cras luctus odio eu turpis egestas, eget elementum tortor pellentesque. Mauris varius volutpat magna sit amet vestibulum. Nullam non orci libero. Etiam efficitur dui nisl, et eleifend ipsum viverra nec. Fusce accumsan metus non vulputate lobortis. Donec eu nisi accumsan, sollicitudin est ac, lobortis mi. Vestibulum consequat ultricies mauris nec pellentesque. Mauris pulvinar tincidunt tincidunt. Aenean est erat, pharetra ac quam ac, suscipit blandit nisi. Sed a elementum mi, convallis molestie erat. 
 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Boxx;

