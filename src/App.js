import React from 'react';
import './App.css';
import Counter from './components/Counter'
import Mirror from './components/Mirror'
import CountProvider from './context/Count'

function App() {
  return (
    // Provider set to the application
    <CountProvider>
      <div className="App">
        <Counter />
        <hr />
        <Mirror />
      </div>
    </CountProvider>
  );
}

export default App;
