import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { getMovieImg } from "../utils/getMovieImg";
import "../pages/MovieDetails.css"

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [añoDeLanzamiento, setAñoDeLanzamiento] = useState(null);
  const [voteAverage, setVoteAverage] = useState(null);
  const [totalDeVotos, setTotalDeVotos] = useState (null);
  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGeneros(data.genres[0]);
      setAñoDeLanzamiento(data.release_date);
      setVoteAverage(data.vote_average);
      setTotalDeVotos(data.vote_count);
        
        });
    },[movieId]);
    const imageUrl = getMovieImg(movie.poster_path, 500);

  return (<div className="detailsContainer">
    <img src={imageUrl}
    alt={movie.title} className="col movieImage"/>
    <div className="col movieDetails">
        <p>
          <strong>Promedio de votos: </strong>
          {voteAverage}
        </p>

        <p>
          <strong>Total de votos : </strong>
          {totalDeVotos}
        </p>

        <p className="title-cardIn">
            <strong></strong>{movie.title}
        </p>

        <p>
          <strong>Año de lanzamiento: </strong>
          {añoDeLanzamiento}
        </p>

        <p className="genero">
            <strong>Genero: </strong>
            {generos.name}
        </p>

        <p className="description">
            <strong>Descripción: </strong>
            {movie.overview}
        </p>

        {/* Botón de regresar */}
      <Link to="/">
        <button className="botonVolver">Regresar</button>
      </Link>  

        
    </div>
  </div>);
}
