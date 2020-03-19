import React, { Component } from 'react';

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div className="container detail">
        <div className="box">
          <header className="header">详情</header>
          <div className="content">详情</div>
        </div>
        <footer>
          详情底部
        </footer>
      </div>
    )
  }
}