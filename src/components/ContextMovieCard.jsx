import { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import { MovieCard } from "../components/MovieCard";
import "../components/ContextMovieCard.css"


export function ContextMovieCard() {
  const [movies, SetMovies] = useState([]);
useEffect(() => {
  get("/discover/movie").then((data) => {  
    SetMovies(data.results); //SetMovie modifica a la movie para hacer consultas
    console.log(data)
  });
}, []);

  return (<ul className="conteiner">
    {movies.map((movie) => (
      <MovieCard key ={movie.id} movie={movie}/>


    ))}
  </ul>);
}
