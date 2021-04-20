import React from 'react';
import Skills from '../skills/skills.component';
import './projectcontainer.styles.scss';

const Projectcontainer = () => {

    return (
        <div className='pcontainer'>
            <div className='f3 f2-m f1-l fw2  ttu tc lh-copy pt5'>Past Projects</div>
            <Skills />
        </div>
    )
}

export default Projectcontainer;