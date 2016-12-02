'use strict';
//import react1
import React from 'react';
import ImageDetail from './image_detail';

//crate component
const ImageList = (props) => {
  //display RenderedImages using {} brackets because it is an array.
  const RenderedImages = props.images.map(image => {
    //passing info to image detail
    if (!image.is_album) {
      return <ImageDetail key={image.title} image={image}/>
    }
  });

  return (
    <ul className="media-list list-group">
      { RenderedImages }
    </ul>
  );
};

//export ImageList
export default ImageList;
