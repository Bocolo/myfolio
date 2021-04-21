import styled from 'styled-components';


export const ProfileImg= styled.img`
display: block;
margin:0 auto;
height: ${props => props.height || '200px'};
object-fit:cover;

`;
export const BoxContainer=styled.div`

border: 4px solid rgb(201, 34, 159, .7);
  background: ${props=> props.background ||'rgb(0,0,0)'};
  width: ${props => props.width || '300px'};
  height: ${props => props.height || '200px'};
  margin:0 auto;
  display:block;
 

 box-shadow: ${props=> props.boxShadow ||'0px 0px 30px 10px rgb(201, 34, 159)'};

`;
// background-image: ${props=> `url(${props.backgroundImage}` || ''};
//border: 4px solid rgb(201, 34, 159, .7);
// display: inline-block;
  
// padding:40px;
// margin:40px;
// background-color: rgb(0,0,0);


// box-shadow: 0px 0px 30px 10px rgb(201, 34, 159);