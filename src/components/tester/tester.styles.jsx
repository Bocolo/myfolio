import styled from 'styled-components';


export const ProjectContainer =styled.div`
display: flex;
flex-direction: column;

align-items: center;
margin-bottom: 4%;
`;
export const ProjectTitle =styled.div`
font-size: 40px;
margin:50px;
text-align: center;
`;
export const ProjectItems=styled.div`
display: grid;
grid-template-columns: 1fr 1fr ;

grid-gap: 80px 250px;

@media screen and (max-width: 800px) {
    align-items: center;

    display: grid;
    grid-template-columns:1fr 1fr;
    grid-gap: 15px;
}
@media screen and (max-width: 1024px) {
    align-items: center;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 35px;
}
`;

export const ProjectItemContainer = styled.div`
width: 22vw;
display: flex;
flex-direction: column;
height: 350px;
align-items: center;
position: relative;


`;
export const ProjectImage = styled.img`
width: 100%;
height: 90%;
background-size: cover;
background-position: center;
margin-bottom: 5px;

`;
export const ProjectFooter = styled.div`
width: 100%;
height: 5%;
display: flex;
flex-direction: row;
justify-content: space-between;
font-size: 18px;`;

export const ProjectDetails =styled.span`
width: 100%;
margin-bottom: 15px;
margin-top: ${props => props.marginTop || ''};
`;