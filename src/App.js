import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import './App.css';
import AboutUs from './components/AboutUs';
import AccountReq from './components/AccountReq';
import Announcements from './components/Announcements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import Logout from './components/Logout';
import Main from './components/Main';
import News from './components/News';
import Planets from './components/Planets';
import Videos from './components/Videos';
import { selectUser } from './redux/userSlice';


function App() {
  const user = useSelector(selectUser);
  const [search, setSearch] = useState("") 
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
        <Route path="/Planets" >
          <Planets search={search} setSearch={setSearch}/>
        </Route>
        <Route path="/Videos" component={Videos}/>
        <Route path="/AccountRequest" component={AccountReq}/>
        <Route path="/Login">
        {user ? <Logout /> : <Login />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
