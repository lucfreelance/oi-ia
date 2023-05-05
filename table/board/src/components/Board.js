import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Board = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
      .then(response => {
        setReviews(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setError('Error al cargar los datos');
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mt-4">
      <h1>Reseñas de gatos</h1>
      {reviews.map(review => (
        <div key={review.id} className="card mt-4">
          <div className="card-header">
            <h5>{review.id}</h5>
            <small>{review.created_at}</small>
          </div>
          <div className="card-body">
            <img src={review.url} alt="gato" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Board;
