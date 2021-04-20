import React from 'react';


import {HeaderContainer, OptionsContainer, OptionLink, NavContainer} from './header.styles.jsx';


const Header = () =>( 


    <HeaderContainer>
        <OptionsContainer >
            <OptionLink className='grow' to='/'>
                HOMEPAGE
            </OptionLink>

            <OptionLink className='grow' to='/contact'>
                CONTACT
            </OptionLink>
        </OptionsContainer>
    </HeaderContainer>
    
);

export default Header;