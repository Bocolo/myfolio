import React from 'react';
import { CodeHeaderContainer, 
    CodeHeaderImage,
    CodeHeaderColumns,
    CodeHeaderText,
    CodeHeaderTextColumn, 
    CodeHeaderTitle} from './code.styles';
import asteroidImg from '../../imgs/asteroids3.png';

const CodeHeader=()=>{

    return(
        <div>
            <CodeHeaderContainer>
                <CodeHeaderTextColumn>
                    
                        <CodeHeaderTitle>Title</CodeHeaderTitle>
                        <CodeHeaderText>
                        Lorum ipsums.  Lorum ipsums.  Lorum ipsums.  Lorum ipsums.
                        Lorum ipsums.  Lorum ipsums.  Lorum ipsums.  Lorum ipsums.
                        <br/><br/>
                        Lorum ipsums.  Lorum ipsums.  Lorum ipsums.  Lorum ipsums.
                        Lorum ipsums.  Lorum ipsums.  Lorum ipsums.  Lorum ipsums.
                        <br/><br/>
                        Lorum ipsums.  Lorum ipsums.  Lorum ipsums.  Lorum ipsums.
                        Lorum ipsums.
                        <br/><br/>  Lorum ipsums.  Lorum ipsums.  Lorum ipsums.
                        </CodeHeaderText>
                </CodeHeaderTextColumn>
               <CodeHeaderColumns>
               {/* <img src={asteroidImg}/> */}
               <CodeHeaderTitle>Asteroids Shooter</CodeHeaderTitle>
                      <CodeHeaderImage src={asteroidImg}/>
                   
               </CodeHeaderColumns>
               
            </CodeHeaderContainer>

        </div>
    )
}
export default CodeHeader;