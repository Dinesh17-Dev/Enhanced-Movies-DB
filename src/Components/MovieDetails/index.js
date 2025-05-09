import {Component} from 'react'

import Navbar from '../Navbar'
import MovieCastView from '../MovieCastView/index'

import './index.css'

class MovieDetails extends Component {
  state = {movieSingleDetails: [], castDetailsList: []}

  componentDidMount() {
    this.getMovieDetails()
  }

  getMovieDetails = async () => {
    const apiKey = '4362c27df08506ae74bed5c135f05eb9'
    const {match} = this.props

    const {params} = match
    const {id} = params
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()

    const castResponse = await fetch(castUrl, options)
    const castData = await castResponse.json()

    const castDetails = castData.cast
    console.log(castDetails)

    const updatedCastDetails = castDetails.map(i => ({
      name: i.name,
      originalName: i.original_name,
      profilePath: i.profile_path,
      id: i.id,
      character: i.character,
    }))

    console.log(updatedCastDetails)

    const details = {
      title: data.original_title,
      moviePoster: data.poster_path,
      movieRating: data.popularity,
      movieGenre: data.genres,
      movieReleaseDate: data.release_date,
      movieOverView: data.overview,
      backdropPath: data.backdrop_path,
    }

    this.setState({
      movieSingleDetails: details,
      castDetailsList: updatedCastDetails,
    })
  }

  renderMoviesSingleDetails = () => {
    const {movieSingleDetails} = this.state

    const {
      title,
      moviePoster,
      movieRating,
      movieGenre,
      movieReleaseDate,
      movieOverView,
    } = movieSingleDetails

    return (
      <div className="movies-single-render-container">
        <img
          src={`https://image.tmdb.org/t/p/w500${moviePoster}`}
          alt={title}
        />
        <div className="text-movies-container">
          <h1 className="movies-page-title">{title}</h1>
          <p>{movieReleaseDate}</p>

          {movieGenre && Array.isArray(movieGenre) && (
            <div className="genres-container">
              {movieGenre.map(genre => (
                <p key={genre.id} className="genre-item">
                  {genre.name}
                </p>
              ))}
            </div>
          )}
          <p>Rating: {movieRating}</p>
          <h2>Overview</h2>
          <p>{movieOverView}</p>
        </div>
      </div>
    )
  }

  renderCastDetials = () => {
    const {castDetailsList} = this.state
    return (
      <div className="cast-deatils-container">
        <h1 className="cast-details-heading">Movie Cast</h1>
        <ul className="cast-details-list-container">
          {castDetailsList.map(i => (
            <MovieCastView key={i.id} castDetailsList={i} />
          ))}
        </ul>
      </div>
    )
  }

  renderMoviesDetails = () => (
    <div className="movies-details-main-container">
      <Navbar />
      <div>
        {this.renderMoviesSingleDetails()}
        {this.renderCastDetials()}
      </div>
    </div>
  )

  render() {
    return this.renderMoviesDetails()
  }
}

export default MovieDetails
