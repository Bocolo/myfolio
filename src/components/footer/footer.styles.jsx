import styled, { css } from 'styled-components';

export const FooterContainer = styled.div`
position: sticky;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 10%;
  background-color:${({ theme }) => theme.headFootColor};
 
  
 
 
 `;
 //#e5989b
// positon relative or fixed
export const FooterBot = styled.div`

`;
export const FooterIcon = styled.div`
padding-top:2%;
color: #3D3D3D;

text-align: center;
font-weight:bold;`;
export const FooterText = styled.div`
padding-top:2%;
color:${({ theme }) => theme.headFootColorText} ;

text-align: center;
font-weight:bold;

`;

/*
    height:100%;
    margin:0; 
    height: 50px;
margin-top: -50px;*/
//export const FooterContainer = styled.div`


// display:flex;
// justify-content:center;
// text-align:center;

//  `;


// export const FooterBot = styled.div`
// position:absolute;
// bottom:0;
// padding-bottom: 10px;

// display:flex;

// `;
// export const FooterText = styled.div`


// border-radius: 3px;
// border:2px solid palevioletred;
// border-padding-right: 50vw;
// `;




