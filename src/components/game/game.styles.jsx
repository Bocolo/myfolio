import styled from 'styled-components';


export const GameContainer=styled.div`
width:450px; 
height:800px;
padding:0px;
margin:0px auto; 
position:relative;
@media(max-width:1700px){
  width:405px; 
height:720px;
}
@media(max-width:850px){
width:360px;
height:640px;
}
@media(max-width:600px){
  width:315px; 
  height:560px;
}


`;
export const InstructionsContainer=styled.div`
border: ${props=> props.border ||'4px solid black'};
width:80%;
height:80%;
border-radius:25px;
padding:20px;
margin:0 auto;



`;
export const GameColumn=styled.div`
display:grid;
grid-template-columns:1fr ;

background:${({ theme }) => theme.boxBorderColor};

@media(max-width:900px){
    grid-template-columns:1fr;
    padding-left:0px;
padding-right:0px;

background:${({ theme }) => theme.mainBackground};

}

`;
export const GameItem=styled.div`


display: flex;
  align-items: center;
  justify-content: center;
`;