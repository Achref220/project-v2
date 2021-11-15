import { Route, Switch } from 'react-router';
import './App.css';
import AboutUs from './components/AboutUs';
import Announcements from './components/Announcements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import News from './components/News';
import Planets from './components/Planets';
import TextBox from './components/TextBox';
import Videos from './components/Videos';


function App() {
  return (
    <div className="App">
      <Route exact path="/" >
        <Header />
        <AboutUs />
        <Announcements />
        <Main />
        <Contact />
        <Footer />
      </Route>
      <Switch>
        <Route path="/News" component={News} />
        <Route path="/Planets" component={Planets}/>
        <Route path="/Videos" component={Videos}/>
      </Switch>
    </div>
  );
}

export default App;
