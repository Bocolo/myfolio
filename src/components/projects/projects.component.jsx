import React from 'react';
import './project.styles.scss';

//https://tachyons.io/components/collections/vinyl/index.html
const Projects =()=>{

    return(
        <div>
            <article className="cf">
                <div className="fl w-50 w-24-ns">
                    
                    <div className="db aspect-ratio aspect-ratio--1x1 dim">
                        <span  style={{backgroundImage:`url(http://mrmrs.github.io/photos/justice.jpg)`}} className="bg-center cover aspect-ratio--object"></span>
                    </div>

                </div>
                <div className="fl w-50 w-24-ns">
                    
                    <div className="db aspect-ratio aspect-ratio--1x1 dim">
                        <span  style={{backgroundImage:`url(http://mrmrs.github.io/photos/colouranything.jpg)`}} className="bg-center cover aspect-ratio--object"></span>
                    </div>

                </div>

            </article>
        </div>
    )
}

export default Projects;