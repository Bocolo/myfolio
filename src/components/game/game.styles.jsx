import styled from 'styled-components';


export const GameContainer=styled.div`
width:540px; 
height:960px;
padding:0px;
margin:0px auto; 
position:relative;


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