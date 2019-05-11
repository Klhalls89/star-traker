import React from 'react';

const Card = (props) => {

  const { poster_path } = props;
  const imageUrl = `https://image.tmdb.org/t/p/w185/${poster_path}`
  return (
    <div>
      <img src={imageUrl}/>
    </div>
  )
}

export default Card;

