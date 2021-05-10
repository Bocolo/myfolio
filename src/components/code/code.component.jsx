import React from 'react';
import {CodeContainer,CodeHeaderTitle} from './code.styles';

const Code=()=>{
 const text ='using System.Collections.Generic;\\n \n using UnityEngine;'
    return(
        <div>
            <CodeHeaderTitle textAlign='Left'> title s</CodeHeaderTitle>
            <CodeContainer>
                <code>
                    
                </code>
                  

            </CodeContainer>
        </div>
    )
}
export default Code;