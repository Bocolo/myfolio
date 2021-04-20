import React from 'react';
import './box.styles.scss';
import Skillbox from '../skillbox/skillbox.component';
import Skills from '../skills/skills.component';
import About from '../about/about.component';

const Box =()=>{
    return (
        <div className='boxcontainz '>
            <div className='boxborderz br4 '>
             {/* Place row flex box here  
             one side picture and description
             one sided extra details
             
             on samll screen  turn to columns /stacked*/}
             <div className='colside '>
                {/* <Skillbox/>
                <Skillbox/> */}
                 
                 <div className='section3 f3'>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor sem maximus, porttitor neque sit amet, mollis ipsum. Donec aliquam sem non lorem tempor malesuada. Cras luctus odio eu turpis egestas, eget elementum tortor pellentesque. Mauris varius volutpat magna sit amet vestibulum. Nullam non orci libero. Etiam efficitur dui nisl, et eleifend ipsum viverra nec. Fusce accumsan metus non vulputate lobortis. Donec eu nisi accumsan, sollicitudin est ac, lobortis mi. Vestibulum consequat ultricies mauris nec pellentesque. Mauris pulvinar tincidunt tincidunt. Aenean est erat, pharetra ac quam ac, suscipit blandit nisi. Sed a elementum mi, convallis molestie erat. 
                 </div>
                 <div className='section3 f3'>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor sem maximus, porttitor neque sit amet, mollis ipsum. Donec aliquam sem non lorem tempor malesuada. Cras luctus odio eu turpis egestas, eget elementum tortor pellentesque. Mauris varius volutpat magna sit amet vestibulum. Nullam non orci libero. Etiam efficitur dui nisl, et eleifend ipsum viverra nec. Fusce accumsan metus non vulputate lobortis. Donec eu nisi accumsan, sollicitudin est ac, lobortis mi. Vestibulum consequat ultricies mauris nec pellentesque. Mauris pulvinar tincidunt tincidunt. Aenean est erat, pharetra ac quam ac, suscipit blandit nisi. Sed a elementum mi, convallis molestie erat. 
                 </div>
             </div>
            </div>
            
        </div>
    )
}

export default Box;


// <div className='bantextx f3 lh-copy ttu'>Title</div>
// <br></br>
// <div className='bantextx f4 lh-copy'>Placing image here ?</div>