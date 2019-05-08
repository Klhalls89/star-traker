import React from 'react';

const Card = (props) => {
  console.log(props, "card props")
  const { poster_path } = props;
  const imageUrl = `https://image.tmdb.org/t/p/w185/${poster_path}`
  return (
    <div>
      <img src={imageUrl}/>
    </div>
  )
}

export default Card;

