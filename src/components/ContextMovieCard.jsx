import React, { useEffect, useState } from "react";
import { getGenres, getMoviesWithFilter } from "../data/httpClient";
import { MovieCard } from "../components/MovieCard";
import "../components/ContextMovieCard.css";

export function ContextMovieCard() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    fetchMovies();
    fetchGenres();
  }, [currentPage, selectedGenre, sortBy]);

  const fetchGenres = () => {
    getGenres().then((data) => setGenres(data));
  };

  const fetchMovies = () => {
    getMoviesWithFilter(currentPage, selectedGenre, sortBy).then((data) => {
      setMovies(data.results);
      setTotalPages(data.total_pages);
    });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleGenreChange = (genreId) => {
    setSelectedGenre(genreId);
    setCurrentPage(1); // Reset page when changing genre
  };

  const handleSortByChange = (sortOption) => {
    setSortBy(sortOption);
    setCurrentPage(1); // Reset page when changing sort option
  };

  return (
    <div>
      {/* Filtrado */}
      <div className="filter-container">
        <label htmlFor="genreDropdown" className="filter-label">
          SELECCIONAR POR GÉNERO:
        </label>
        <select
          id="genreDropdown"
          onChange={(e) => handleGenreChange(e.target.value)}
          value={selectedGenre || ""}
          className="filter-dropdown"
        >
          <option value="">TODOS LOS GENEROS</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>

        {/*Ordenamiento */}

        <label htmlFor="sortDropdown" className="filter-label">
          ORDENAR POR:
        </label>
        <select
          id="sortDropdown"
          onChange={(e) => handleSortByChange(e.target.value)}
          value={sortBy || ""}
          className="filter-dropdown"
        >
          <option value="">ORDENAR</option>
          <option value="popularity.desc">Popularidad Descendente</option>
          <option value="popularity.asc">Popularidad Ascendente</option>
          {/* Agrega otras opciones de ordenamiento según la documentación de TMDb */}
        </select>
      </div>

      {/* Lista de películas y paginación */}
      <ul className="container">
        {movies.map((movie) => (
          <li key={movie.id} className="movie-card">
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>

      {/* Sección de paginación con botones Anterior y Siguiente */}
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>Página {currentPage} de {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Siguiente
        </button>
      </div>
    </div>
  );
}
