import React from 'react';
import CoinMarket from './CoinMarket.js';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <CoinMarket currency="bitcoin"></CoinMarket>
      </div>
    )
  }
}

export default App