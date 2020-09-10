import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from '../components/GifGridItem';

export const GifGrid = ({ category }) => {
  const {data:images, loading} = useFetchGifs(category);
  //console.log(category);

  return (
    <>
      <h2>{category}</h2>

      { loading && <p>loading...</p>}

      <div className="card-grid">
        <ol>
          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </ol>
      </div>
    </>
  );
}
