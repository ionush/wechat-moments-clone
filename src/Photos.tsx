import * as React from 'react';
const styles = require('./Photos.css');

export interface Props {
  photos: Array<string>;
}

const Photos = (props: Props) => {
  if (props.photos.length === 1) {
    props.photos.map(item => <img src={item} className="onePhoto" />);
  } else if (props.photos.length > 4) {
    props.photos.map(item => <img src={item} className="threePhoto" />);
  } else if (props.photos.length === 4) {
    props.photos.map(item => <img src={item} className="fourPhoto" />);
  } else {
    props.photos.map(item => <img src={item} className="ninePhoto" />);
  }
};

export default Photos;
