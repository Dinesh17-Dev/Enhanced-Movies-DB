import './index.css'

const MovieCastView = props => {
  const {castDetailsList} = props
  const {name, originalName, profilePath, character} = castDetailsList
  return (
    <li className="cast-list-container">
      <img
        src={`https://image.tmdb.org/t/p/w500${profilePath}`}
        alt={name}
        className="character-img"
      />
      <div className="cast-para-container">
        <p className="og-name">{originalName}</p>
        <p className="char-name">{character}</p>
      </div>
    </li>
  )
}

export default MovieCastView
