import React from 'react';
import CoinMarket from './CoinMarket.js';
// import ChartView from './ChartView.js';


class App extends React.Component {
  render(){
    return (
      <div className="App">
        <CoinMarket currency="litecoin"></CoinMarket>
      </div>
    )
  }
}

export default App