import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Menu from './components/Menu';
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import { BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>

        <div className="container-fluid">
          <div className="row">
            <Menu/>
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <Route path={"/"} exact component={Dashboard}/>
                <Route path={"/users"} component={Users}/>
              
            </main>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
