import React from 'react';
import {TempContainer} from '../contact/contact.styles';
import Banner from '../../components/banner/banner.component';
import About from '../../components/about/about.component';
//import About from '../../components/about/about.component';
import './homepage.styles.scss';
import Projects from '../../components/projects/projects.component';
const HomePage = () => (
    <div>
         <Banner/>
            <div className='colside'>
                <About/>
                <About/>
            </div>
            <Projects/>
    </div>
)


export default HomePage;