import React from 'react';

export default function MovieDetails({ Title, Year, Poster }) {

  return (
    <article className="Movie">
      <div className="parent">
        <div className="Movie__name">{Title} ({Year})
        {/* <img className="back-poster" src={Poster} alt={`${Title}-Poster`} /> */}

        </div>
      </div>
    </article>
  );
}