import React from "react";

export default function MovieCard(props) {
  const { movie } = props;
  return (
    <>
      <div className="card">
        <div className="card--image">
          <img
            style={{ margin: "5px" }}
            src={movie.i.imageUrl}
            alt={movie.l}
            height="300px"
          />
        </div>
        <div className="card--content">
          <h1>{movie.l}</h1>
          <h2>
            Genere: <span className="upperCase">{movie.q}</span>
          </h2>
          <h2>
            Rank: <span className="upperCase">{movie.rank}</span>
          </h2>
          <h2>
            Year: <span className="upperCase">{movie.y}</span>
          </h2>
          <h2>
            Cast: <span className="upperCase">{movie.s}</span>
          </h2>
        </div>
      </div>
    </>
  );
}
