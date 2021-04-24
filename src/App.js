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

const App=() =>{
  const [theme, setTheme] =useState('pink');
  const themeToggler =()=>{
    theme === 'pink' ? setTheme('dark'):setTheme('pink')
  }
  return (

   <ThemeProvider theme={theme === 'pink'? pinkTheme:darkTheme}>
     <>
     <GlobalStyles/>
     <div  className='flextest'>
       <Header/>
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
