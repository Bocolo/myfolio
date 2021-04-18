import React from 'react';
import './skills.styles.scss';


const Skills = () => {


    return(
        <div>
            {/* align this boxes to fit width of screen "cf pa4 " : http://tachyons.io/docs/layout/grid/*/}
            {/*  fl w-50 w-25-m w-20-l pa2
            
            to go back to precios cf above for first div , remove second div and insert flw50 in 3rd
            
            This layout is temporary complete revamp required*/}
                <div className="mw9 center ph3-ns">
                <div className="cf ph2-ns">
                    <div className="fl w-100 w-50-ns pa6 ">
                   
                        <img src="http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png" alt="Frank Ocean Blonde Album Cover" className="w-100 db outline black-10"/>
                        
                    </div>
                
                    <div className="fl w-100 w-50-ns pa6  ">
                   
                        <img src="http://is4.mzstatic.com/image/thumb/Music62/v4/93/8f/75/938f7536-0188-f9ba-4585-0a77ceaebf0a/source/400x40000bb.png" alt="Frank Ocean Blonde Album Cover" className="w-100 db outline black-10"/>
                        
                    </div>
                    </div>
                </div>
                
        </div>
    )
}

export default Skills;