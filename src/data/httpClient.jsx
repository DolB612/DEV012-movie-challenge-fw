const API = "https://api.themoviedb.org/3";
export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}

export function getGenres() {
  return get("/genre/movie/list").then((data) => data.genres);
}

export function getMoviesWithFilter(page = 1, genreId, sortBy) {
  let url = `/discover/movie?page=${page}`;

  if (genreId) {
    url += `&with_genres=${genreId}`;
  }

  if (sortBy) {
    url += `&sort_by=${sortBy}`;
  }

  return get(url);
}
