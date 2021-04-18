import React from 'react';
import {TempContainer} from '../contact/contact.styles';
import Banner from '../../components/banner/banner.component';
import About from '../../components/about/about.component';
import Skills from '../../components/skills/skills.component';
import Projects from '../../components/projects/projects.component';
import Skillbox from '../../components/skillbox/skillbox.component';
import Projectbox from '../../components/projectbox/projectbox.component';
//import About from '../../components/about/about.component';

import './homepage.styles.scss';
const HomePage = () => (
    <div>
         <Banner/>
            <div className='colside'>
                <About/>
                <Skillbox/>
            </div>
            <Skills/>
            
            <Projects/>
            
    </div>
)


export default HomePage;