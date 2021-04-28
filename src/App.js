import logo from './logo.svg';
import React ,{useState,useEffect} from'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import './App.scss';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/homepage/homepage.component';
import ContactPage from './pages/contact/contact.component';
import {ThemeProvider} from 'styled-components';
import {GlobalStyles} from './components/theme/globalstyle.styles';
import {pinkTheme,darkTheme} from './components/theme/theme.styles';
import {useDarkMode} from './components/theme/usedarkmode';
import Toggler from './components/toggler/toggler';





const App=() =>{
  const [theme, themeToggler, mountedComponent] =useDarkMode();
  const themeMode =
    theme === 'pink' ? pinkTheme:darkTheme;
  if(!mountedComponent) return<div/>
  return (

   <ThemeProvider theme={themeMode}>
     <>
     <GlobalStyles/>
     <div  className='flextest'>
       <Header/>
     
       <Toggler theme={theme} toggleTheme={themeToggler}/>
       <button onClick={themeToggler}>This is a button</button>
       <Switch>
         <Route exact path='/' component={HomePage} />
         <Route path='/contact' component={ContactPage} />
       </Switch>
       <Footer/>
     </div>
     </>
   </ThemeProvider>

  );
}

export default App;
