import Link from 'next/link';
import React from 'react';

const Movie = ({ title, id, poster_path, release_date }) => {
  const image = `https://image.tmdb.org/t/p/original${poster_path}`;
  return (
    <div>
      <Link href={`/${id}`}>
        <img src={image} alt={title} width={800} height={800} />
      </Link>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
    </div>
  );
};

export default Movie;
