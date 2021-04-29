import React , {useState}from 'react';
import Projects from '../../components/projects/projects.component';
import Game from '../../components/game/game.component';
import Banner from '../../components/banners/banners.component';
import Personal from '../../component/personal/personal.component';


import './homepage.styles.scss';
const HomePage = () => {
    const [display, setDisplay] = useState(true);
    window.addEventListener('touchstart', function userTouch(){setDisplay(false);})
 
    return(
        <div>
            <Banner/>
            {/* <Personal/> */}
            {display?(<Game/>):(<></>)}
            <Projects/> 
    
        </div>  
    );
}
    

export default HomePage;
    
        
       
        {/* 
            
            
            import {TempContainer} from '../contact/contact.styles';

import Box from '../../components/box/box.component';
   import Tester from '../../components/tester/tester.component';
import TesterCollection from '../../components/tester/tester-collection.component';


            <Personal/>
        <Banner2/>
            
        <Me/>
        <Sample/>
        <Tester/>
        <TesterCollection/>
        
        <Projectcontainer  />
        <Projects/> */}
  {/* <Banner/>
       <Box/>
        <Me/>
        <Sample/>
        <TesterCollection/>
        <Game/>
        <Projectcontainer  />
        <Projects/>
    
    import {TempContainer} from '../contact/contact.styles';
import Banner from '../../components/banner/banner.component';
import About from '../../components/about/about.component';
import Skills from '../../components/skills/skills.component';
    import Me from '../../components/me/me.component.jsx';
import Skillbox from '../../components/skillbox/skillbox.component';
import Projectbox from '../../components/projectbox/projectbox.component';
import Containerbox from '../../components/containerbox/containerbox.component';
import Sample from '../../components/sample/sample.component';
import Box from '../../components/box/box.component';
//import About from '../../components/about/about.component';
import Projectcontainer from '../../components/projectcontainer/projectcontainer.component';
    import Tester from '../../components/tester/tester.component';
import TesterCollection from '../../components/tester/tester-collection.component';
    */}