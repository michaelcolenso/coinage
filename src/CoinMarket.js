import React, { Component } from 'react';

const urlForCurrency = currency =>
  `https://api.coinmarketcap.com/v1/ticker/${currency}/`

const urlForTicker = () =>
  `https://www.cryptocompare.com/api/data/coinlist/`

class CoinMarket extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false
    }
  }

  componentDidMount() {
    fetch(urlForTicker())
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }

        return response
      })
      .then(d => d.json())
      .then(d => {
        this.setState({
          coinData: d
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  render() {

    if (this.state.requestFailed) return <p>Failed!</p>
    if (!this.state.coinData) return <p>Loading...</p>

    const dataArray = new Array;
    for(var o in this.state.coinData['Data']) {
      dataArray.push(this.state.coinData['Data'][o]);
    }

    return (
      <div>
        <ul>
          {dataArray.map(item => <li>{item.CoinName}</li>)}
          </ul>
        </div>
    )
  }
}

export default CoinMarket;

