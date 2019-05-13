import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './First.css';

class Root extends Component {
  render() {
    return (
      <div>
        <h1>Hola mundo desde React 123</h1>
        <div className="DottedBox">
          <p className="DottedBox_content">Get started with CSS styling</p>
        </div>
      </div>
    )
  }
}
let container = document.getElementById('app');
let component = <Root />;
ReactDOM.render(component, container);
