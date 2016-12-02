'use strict';

import React from 'react';
import ImageScore from './image_score';

const ImageDetail = (props) => {
  return (
    <li className="media list-group-item">

      <div className="media-left">
        <img src={props.image.link}/>
      </div>

      <div className="media-body">
        <h3 className="media-heading text-center bg-info">{props.image.title}</h3>
        <p>{props.image.description}</p>
      </div>

      <ImageScore ups={props.image.ups} downs={props.image.downs}/>

    </li>
  );
}

export default ImageDetail;
