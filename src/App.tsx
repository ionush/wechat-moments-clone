import * as React from 'react';
import data from './data.ts';
// import * as s from './App.css';
const styles = require('./App.css');
import clouds from './assets/clouds.jpeg';
import { hot } from 'react-hot-loader';
import Post from './Post.tsx';
import { IoChevronLeft, IoIosCameraOutline } from 'react-icons/lib/io/';

interface State {
  currentScrollHeight: number;
  coverImageHeight: number;
}

class App extends React.Component<{}, {}> {
  state: State = {
    currentScrollHeight: 0,
    coverImageHeight: 0
  };

  componentDidMount() {
    window.onscroll = () => {
      console.log(window.scrollY);
      this.setState({ ...this.state, currentScrollHeight: window.scrollY });
    };
  }

  onImgLoad = ({ target: img }) => {
    console.log('img', img.offsetHeight);
    this.setState({ ...this.state, coverImageHeight: img.offsetHeight });
  };

  render() {
    const { currentScrollHeight, coverImageHeight } = this.state;
    const navOpacity = Math.min(100 / currentScrollHeight, 1);
    const headerOpacity =
      currentScrollHeight > coverImageHeight * 0.7
        ? currentScrollHeight / 1000
        : 0;
    console.log('headerOpacity', headerOpacity);
    console.log('navOpacity', navOpacity);

    return (
      <div className="app">
        <header className="header" style={{ opacity: headerOpacity }}>
          moments
        </header>
        <nav style={{ opacity: navOpacity }}>
          <ul className="navbar">
            <li className="item item-1">
              <IoChevronLeft color="white" size={24} />
            </li>
            <li className="item item-2">
              <IoIosCameraOutline color="white" size={30} />
            </li>
          </ul>
        </nav>
        <div className="userProfile">
          <div className="headerPicture">
            <img
              onLoad={this.onImgLoad}
              src={require('./assets/clouds.jpeg')}
            />
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
        {data.map((item, i) => {
          return <Post post={item} />;
        })}
      </div>
    );
  }
}

export default hot(module)(App);
