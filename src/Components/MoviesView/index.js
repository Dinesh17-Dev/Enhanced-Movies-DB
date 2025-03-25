import {Link} from 'react-router-dom'

import './index.css'

const MoviesView = props => {
  const {popularMovies} = props
  const {
    id,
    originalTitle,
    overview,
    popularity,
    posterPath,
    releaseDate,
    title,
    voteAverage,
  } = popularMovies

  return (
    <li className="popular-movies-view-container">
      <img
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={originalTitle}
        className="popular-movies-poster"
      />
      <h1 className="popular-movies-view-heading">{title}</h1>
      <p className="popular-movies-view-rating">
        Rating : <span className="spanner">{popularity}</span>
      </p>
      <p className="popular-movies-view-rating">{voteAverage}</p>
      <Link to={`/movies/${id}`}>
        <button className="pmovies-button">View Details</button>{' '}
      </Link>
    </li>
  )
}

/*   <Link to = {`/movies/${id}`}>  </Link> */

export default MoviesView
