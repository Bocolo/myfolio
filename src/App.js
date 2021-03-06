
import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.scss';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/homepage/homepage.component';
import ContactPage from './pages/contact/contact.component';
import AsteroidPage from './pages/code/asteroidcodepage.component';
import {ThemeProvider} from 'styled-components';
import {ThemeButtonContainer, ThemeContainer} from './components/sectionstyles/sectionstyles.styles';
import {GlobalStyles} from './components/theme/globalstyle.styles';
import {pinkTheme,darkTheme, whiteTheme} from './components/theme/theme.styles';
import {useDarkMode} from './components/theme/usedarkmode';
import Toggler from './components/toggler/toggler';






const App=() =>{
  const [theme, themeToggler,themePink,themeDark, themeWhite,mountedComponent] =useDarkMode();
  
  let themeMode =pinkTheme;
  if(theme === 'pink'){
    themeMode = pinkTheme
  }
  if(theme === 'dark'){
    themeMode = darkTheme
  }
  if(theme === 'white'){
    themeMode = whiteTheme
  };

  if(!mountedComponent) return<div/>
  return (

   <ThemeProvider theme={themeMode}>
     <>
     <GlobalStyles/>
     <div  className='flextest'>
       <Header/>
     
       {/* <Toggler theme={theme} toggleTheme={themeToggler}/> */}
       <ThemeContainer>
         
         <ThemeButtonContainer>
           
           <Toggler theme={theme} toggleTheme={themePink} text={'Switch to Pink'} background={'#ffcdb2'}/>
           <Toggler theme={theme} toggleTheme={themeDark} text={'Switch to Dark'} background={'#575F75'}/>
           <Toggler theme={theme} toggleTheme={themeWhite} text={'Switch to White'} background={'#eaeaea'}/>
         </ThemeButtonContainer>
       </ThemeContainer>
       {/* <button onClick={themeToggler}>This is a button</button> */}
       <Switch>
         <Route exact path='/' component={HomePage} />
         <Route path='/myfolio' component={HomePage} />
         <Route path='/contact' component={ContactPage} />
         <Route path='/asteroidcode' component={AsteroidPage} />
       </Switch>
       <Footer/>
     </div>
     </>
   </ThemeProvider>

  );
}

export default App;
