import * as React from 'react';
import data from './data.ts';
// import * as s from './App.css';
const styles = require('./App.css');
import clouds from './assets/clouds.jpeg';
import { hot } from 'react-hot-loader';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <header className="header" />
        <nav>
          <ul className="navbar">
            <li className="item item-1">back</li>
            <li className="item item-2">take picture</li>
          </ul>
        </nav>
        <div className="userProfile">
          <div className="headerPicture">
            <img src={require('./assets/clouds.jpeg')} />
          </div>
          <div className="usernameAndAvatar">
            <div className="username">
              <h2>Neil 李嘉棋</h2>
            </div>
            <div className="avatarPic">
              <img src="https://placeimg.com/100/100/any" />
            </div>
          </div>
        </div>
        {/* <h1>wechat moments clone</h1> */}
      </div>
    );
  }
}

export default hot(module)(App);
