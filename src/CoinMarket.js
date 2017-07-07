import React, { Component } from 'react';

const urlForCurrency = currency =>
  `https://api.coinmarketcap.com/v1/ticker/${currency}/`

class CoinMarket extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false
    }
  }

  componentDidMount() {
    fetch(urlForCurrency(this.props.currency))
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }

        return response
      })
      .then(d => d.json())
      .then(d => {
        this.setState({
          coinMarketData: d[0]
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  render() {

    if (this.state.requestFailed) return <p>Failed!</p>
    if (!this.state.coinMarketData) return <p>Loading...</p>
    return (
      <div>
        <h2>{this.state.coinMarketData.name}</h2>
        <h3>{this.state.coinMarketData.rank}</h3>
        <h3>${this.state.coinMarketData.price_usd}</h3>

      </div>
    )
  }
}

export default CoinMarket;

