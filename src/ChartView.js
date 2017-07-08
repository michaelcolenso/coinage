import React, { Component } from 'react';


class ChartView extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
      data: data
    }
    }
    render() {
        return (
            <div>
                <h1>{this.state.data}</h1>
            </div>
        )
    }
}

export default ChartView;


