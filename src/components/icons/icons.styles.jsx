import styled from 'styled-components';


export const IconContainer=styled.div`
display: flex;
`;

export const ImageSizer=styled.img`
width:35px;
  height: auto;
  margin-right: 10px;
 
  margin-bottom: 20px;
`;

export const SvgStyle= styled.div`
display:flex;

svg{
height:50px; 
width:50px;
margin:10px;
fill:#5c2b95;
}

&:hover svg{
  height:50px; 
width:50px;
margin:10px;
    fill:#b561cf;
    transform:scale(1.1);
}

`;
export const SvgJS= styled(SvgStyle)`
svg{ fill: pink;}
&:hover svg{fill:red;}
`;
export const SVGPy= styled(SvgStyle)`
svg{ fill: yellow;}
&:hover svg{fill:green;}
`;
//vscolor :#5c2b95

// csss fill none first g
// css fill="#157EFB" second g