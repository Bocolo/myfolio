import React,{Component} from 'react';
import './skillbox.styles.scss';
import Icons from '../icons/icons.component';
//import pythonicon from '../../imgs/pythonicon.png';
import pythonico from '../../imgs/pythonico.svg';
import cssico from '../../imgs/cssico.svg';
import jsico from '../../imgs/jsico.svg';
import htmlico from '../../imgs/htmlico.svg';
import vsico from '../../imgs/vsico.svg';
// class Skillbox extends Component{
// render(){
    //white-90
//white-50
const Skillbox =()=>{
    return (
        <div className='bordercontainer tc '>
            <div className='skillstitle ttu f3 f2-m f1-l fw2  mv3'>Skills</div>
            
        <div className='boxborder tc br4 grow'>
            {/* <div className='skillstitle f3 f2-m f1-l fw2  mv3'>Skills</div> */}
            <div className=' f4 f6-m pa2  lh-copy'>
                
                <div id='skills'>
                    <div>
                    <Icons  image={pythonico} iname='Python' />
                    <Icons  image={cssico} iname='CSS' />
                    <Icons  image={pythonico} iname='C#' />
                    <Icons  image={cssico} iname='JavaScript' />
                    <Icons  image={cssico} iname='Node.js' />
                    </div>
                    <div>
                    <Icons  image={pythonico} iname='IBM SPSS' />
                    <Icons  image={cssico} iname='ReactJS' />
                    <Icons  image={pythonico} iname='HTML5' />
                    <Icons  image={cssico} iname='SQL' />
                    <Icons  image={cssico} iname='Krita' />
                   </div>
                 
                </div>
                {/* <div className=' iconscontainer flex-grid'>
                
                    <Icons  image={pythonico} iname='Pytho1n' />
                    <Icons  image={cssico} iname='CSS1' />
                    
                    </div>
                    <div className=' iconscontainer flex-grid'>
                    <Icons  image={cssico} iname='CS1S' />
                    <Icons  image={cssico} iname='CSS12' />
                    </div>
                <div className='  flex-grid'>
                  <Icons  image={pythonico} iname='Python' />
                   <Icons  image={cssico} iname='CSS' />
               </div> */}
                  {/* <div className='flexparent'>
                    <Icons image={jsico} iname='JavaScript' />
                    <Icons image={htmlico} iname='HTML5' />
                    <Icons  image={pythonico} iname='Python' />
                    <Icons  image={cssico} iname='CSS' />
                    <Icons image={jsico} iname='ReactJS' />
                    <Icons image={htmlico} iname='C#' />
                    <Icons  image={pythonico} iname='Unity' />
                    <Icons  image={cssico} iname='SPSS' />
                </div>  */}
                
            </div>
           
            

        </div>
        </div>
    )
}

export default Skillbox;

 {/* <div className='  iconscontainer'>
                    <Icons image={jsico} iname='JavaScript' />
                    <Icons image={htmlico} iname='HTML5' />
                    <Icons  image={pythonico} iname='Python' />
                    <Icons  image={cssico} iname='CSS' />
                    
                </div>
            
            
            
              <div>
                    <Icons  image={pythonico} iname='.Net Framework' />
                    <Icons  image={cssico} iname='PostgreSQL' />
                    <Icons  image={pythonico} iname='Postman API' />
                    <Icons  image={cssico} iname='Jupyter Notebook' />
                    <Icons  image={cssico} iname='pgAdmin' />
                   </div>
            */}