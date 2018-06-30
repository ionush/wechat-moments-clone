import * as React from 'react';
import data from './data.ts';
import './App.css';
import clouds from './assets/clouds.jpeg';

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <header className="header">
          <h1>test</h1>
        </header>
        <img src={require('./assets/clouds.jpeg')} />
        <nav className="navbar" />
        <h1>wechat moments clone</h1>
      </div>
    );
  }
}
