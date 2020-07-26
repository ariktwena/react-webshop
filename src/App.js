import React from 'react';
import './App.css';

//Import Router components
import { Switch, Route } from 'react-router'; //This is "react-router" that comes with "react-router-dom" install

//Import home page component
import HomePage from "./pages/homepage/homepage.component";


const HatsPage = () => (
    <div>
        HATS PAGE
    </div>
)

function App() {
  return (
    <div>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/shop/hats' component={HatsPage}/>
        </Switch>
    </div>
  );
}

export default App;
