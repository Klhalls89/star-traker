import React from 'react';

const Card = (props) => {
  const { poster_path, title, vote_average } = props;
  const imageUrl = `https://image.tmdb.org/t/p/w185/${poster_path}`;
  return (
    <div className="Card">
      <section>
      <p>{vote_average}/10</p>
      <button><i class="far fa-star"></i></button>
      </section>
      <img src={imageUrl}/>
    </div>
  )
}

export default Card;

