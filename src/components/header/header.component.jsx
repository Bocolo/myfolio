import React from 'react';


import {HeaderContainer, OptionsContainer, OptionLink, NavContainer} from './header.styles.jsx';





const Header = () =>( 


    <HeaderContainer>
        <OptionsContainer>
            <OptionLink to='/'>
                HOMEPAGE
            </OptionLink>

            <OptionLink to='/contact'>
                CONTACT
            </OptionLink>
        </OptionsContainer>
    </HeaderContainer>
    
);

export default Header;