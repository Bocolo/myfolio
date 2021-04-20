import React from 'react';
import Tester from './tester.component';
import './tester-collection.styles.scss';

const TesterCollection =()=>{


    const title = 'This is Project Title';

    return (
        <div className='brack'> 
            {/* <div className='tc project-page-title'>Project Tittle</div> */}
            <div className='project-page '>
            <div className='project-page-title tc '>{title.toUpperCase()}</div>
            <div className='items'>
                {/* item map */}
                <Tester/>
                <Tester/>
                <Tester/>
                <Tester/>
            </div>
    </div>
    </div>
    )
}

export default TesterCollection;