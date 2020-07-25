import React from 'react';
import './App.css';

//Import home page component
import HomePage from "./homepage.component";

//Import Scss file styling
import './homepage.styles.scss';

function App() {
  return (
    <div>
        Hallo world
        <HomePage />
    </div>
  );
}

export default App;
