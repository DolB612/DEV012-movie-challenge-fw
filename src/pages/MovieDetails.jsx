import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { getMovieImg } from "../utils/getMovieImg";

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [generos, setGeneros] = useState([]);
  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGeneros(data.genres[0]);
        });
    },[movieId]);
    const imageUrl = getMovieImg(movie.poster_path, 500);

  return (<div>
    <img src={imageUrl}
    alt={movie.title}/>
    <div>
        <p>
            <strong>Titulo: </strong>{movie.title}
        </p>
        <p>
            <strong>Genero: </strong>
            {generos.name}
        </p>
        <p>
            <strong>Descripción: </strong>
            {movie.overview}
        </p>
    </div>
  </div>);
}
