import"../components/MovieCard.css"
export function MovieCard({movie}) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  
  return(<li className="movieCard">
    <img width={230}
    height={345}
    src={imageUrl}
    alt={movie.title}
    className="moviImage"/>
    <div>{movie.title}</div>
  </li>);
}
