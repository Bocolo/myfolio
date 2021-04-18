import React from 'react';
import './icons.styles.scss';

const Icons = ({image, iname})=> {
    return(
        
        <div className='iconcontainer  grow'>
            <img  className='imagesizer'src={image} alt={iname}/>
        
            <div className='icontext'>{iname}</div>
        </div>
    )
}

export default Icons;

   
            {/* <svg baseProfile="tiny" className='imagesizer' height="512px" version="1.1" viewBox="0 0 512 512" 
            width="512px"  xmlns="http://www.w3.org/2000/svg" fill='blue'>
                <g id="Layer_7"><g>
                <path d="M253.806,1.783c-20.678,0.098-40.426,1.859-57.803,4.935c-51.187,9.044-60.48,27.97-60.48,62.877v46.103    h120.963v15.366H135.522H90.126c-35.155,0-65.937,21.13-75.563,61.325c-11.107,46.075-11.603,74.83,0,122.939    c8.599,35.808,29.13,61.324,64.286,61.324h41.589v-55.269c0-39.921,34.544-75.143,75.564-75.143h120.822    c33.632,0,60.479-27.689,60.479-61.466V69.594c0-32.776-27.653-57.406-60.479-62.877C296.045,3.257,274.483,1.684,253.806,1.783z     M188.391,38.86c12.494,0,22.699,10.37,22.699,23.12c0,12.705-10.205,22.982-22.699,22.982c-12.542,0-22.699-10.277-22.699-22.982    C165.692,49.23,175.849,38.86,188.391,38.86z" id="path1948_1_"/>
                <path d="M392.387,131.062v53.712c0,41.648-35.303,76.692-75.562,76.692H196.002    c-33.094,0-60.48,28.327-60.48,61.469v115.186c0,32.777,28.503,52.063,60.48,61.463c38.291,11.259,75.004,13.3,120.822,0    c30.451-8.812,60.479-26.561,60.479-61.463v-46.105H256.485v-15.364h120.817h60.479c35.157,0,48.26-24.519,60.482-61.324    c12.629-37.895,12.093-74.335,0-122.939c-8.687-34.993-25.281-61.325-60.482-61.325H392.387z M324.438,422.75    c12.539,0,22.698,10.269,22.698,22.975c0,12.749-10.159,23.124-22.698,23.124c-12.493,0-22.696-10.375-22.696-23.124    C301.741,433.019,311.944,422.75,324.438,422.75z" id="path1950_1_"/>
                </g></g>
            </svg> */}