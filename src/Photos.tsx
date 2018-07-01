import * as React from 'react';
const styles = require('./Photos.css');

export interface Props {
  photos: any;
}

const Photos = ({ photos }: Props) => {
  if (photos.length === 1) {
    photos.map(item => <img src={item} className="onePhoto" />);
  } else if (photos.length > 4) {
    photos.map(item => <img src={item} className="threePhoto" />);
  } else if (photos.length === 4) {
    photos.map(item => <img src={item} className="fourPhoto" />);
  } else {
    photos.map(item => <img src={item} className="ninePhoto" />);
  }
};

export default Photos;
