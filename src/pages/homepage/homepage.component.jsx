import React from 'react';
import {TempContainer} from '../contact/contact.styles';
import Banner from '../../components/banner/banner.component';
import About from '../../components/about/about.component';
import Skills from '../../components/skills/skills.component';
import Projects from '../../components/projects/projects.component';
import Me from '../../components/me/me.component.jsx';
import Skillbox from '../../components/skillbox/skillbox.component';
import Projectbox from '../../components/projectbox/projectbox.component';
import Containerbox from '../../components/containerbox/containerbox.component';
import Sample from '../../components/sample/sample.component';
import Box from '../../components/box/box.component';
//import About from '../../components/about/about.component';
import Projectcontainer from '../../components/projectcontainer/projectcontainer.component';
import Game from '../../components/game/game.component';
import TesterCollection from '../../components/tester/tester-collection.component';


import './homepage.styles.scss';
const HomePage = () => (
    <div>
        {/* <Banner/> */}
       <Box/>
        <Me/>
        {/* <Sample/> */}
        <TesterCollection/>
        <Game/>
        <Projectcontainer />
        <Projects/>
            
    </div>
)


export default HomePage;