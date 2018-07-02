import * as React from 'react';
const styles = require('./Photos.css');

export interface Props {
  photos: Array<string>;
}

const Photos = (props: Props) => {
  let photos;
  if (props.photos.length === 1) {
    photos = (
      <div className="grid-container">
        {props.photos.map(item => <img src={item} className="onePhoto" />)}
      </div>
    );
  } else if (props.photos.length < 4) {
    photos = (
      <div className="grid-container">
        {props.photos.map(item => <img src={item} className="threePhoto" />)}
      </div>
    );
  } else if (props.photos.length === 4) {
    photos = (
      <div className="grid-container-four">
        {props.photos.map(item => <img src={item} className="fourPhoto" />)}
      </div>
    );
  } else {
    photos = (
      <div className="grid-container-nine">
        {props.photos.map(item => <img src={item} className="ninePhoto" />)}
      </div>
    );
  }

  return photos;
};

export default Photos;
