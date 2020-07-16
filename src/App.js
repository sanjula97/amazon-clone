import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function App() {

  const [{basket,user},dispatch] = useStateValue();

  //UseEffect hook
  //code which runs on a given condition
  const unsubscribe = useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        //loged in
        dispatch({
          type:"SET__USER",
          user:authUser
        })
      }else{
        //logged out
        dispatch({
          type:"SET__USER",
          user:null
        })
      }
    })

    return() => {
      unsubscribe();
    }
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
