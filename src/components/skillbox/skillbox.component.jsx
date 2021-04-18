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
        <div className='bordercontainer tc ph4'>
            
        <div className='boxborder tc'>
            <div className='skillstitle f3 f2-m f1-l fw2  mv3'>Skills</div>
            <div className='textbox f5 f4-m f3-l fw2  mt0 lh-copy'>
                This is the texxt"
                
                <div className='iconscontainer '>
                   

                    <Icons image={pythonico} iname='Python' />
                    <Icons image={cssico} iname='CSS' />
                    <Icons image={jsico} iname='JavaScript' />
                    <Icons image={htmlico} iname='HTML5' />
                    <Icons image={vsico} iname='Visual Studios' />
                   </div>
                   
                
            </div>
           
            

        </div>
        </div>
    )
}

export default Skillbox;