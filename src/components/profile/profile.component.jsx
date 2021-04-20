import React from 'react';
import designmix from  '../../imgs/designmix.jpg';
import './profile.styles.scss';


const Profile =()=>{


    return(
        <div className='profilecontainer profileflex'>
            <img className='profilepic' id='profileimg' src={designmix}/>
            <div className='tc'>
            This will be a section that has options or introduces something smalls
            </div>
        </div>
    )
}

export default Profile;