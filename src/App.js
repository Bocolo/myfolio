import logo from './logo.svg';
import React from'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/homepage/homepage.component';
import ContactPage from './pages/contact/contact.component';


const App=() =>{
  return (
    <div >
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/contact' component={ContactPage} />
      </Switch>
      <Footer/>
    </div>

  );
}

export default App;
