import {Component} from 'react'

import Navbar from '../Navbar'
import MoviesView from '../MoviesView'

import './index.css'

class UpcomingMovies extends Component {
  state = {UpcomingMoviesMoviesList: []}

  componentDidMount() {
    this.getPopularMovies()
  }

  getPopularMovies = async () => {
    const apiKey = '4362c27df08506ae74bed5c135f05eb9'
    const options = {
      method: 'GET',
    }
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`

    const response = await fetch(url, options)
    const data = await response.json()
    const movieResult = data.results

    const moviesResulsModified = movieResult.map(i => ({
      adult: i.adult,
      backdropPath: i.backdrop_path,
      genreIds: i.genre_ids,
      id: i.id,
      originalLanguage: i.original_language,
      originalTitle: i.original_title,
      overview: i.overview,
      popularity: i.popularity,
      posterPath: i.poster_path,
      releaseDate: i.release_date,
      title: i.title,
      video: i.video,
      voteAverage: i.vote_average,
      voteCount: i.vote_count,
    }))

    this.setState({UpcomingMoviesMoviesList: moviesResulsModified})
  }

  renderUpcomingMoviesView = () => {
    const {UpcomingMoviesMoviesList} = this.state
    return (
      <ul className="upcomingMovies-list-container">
        {UpcomingMoviesMoviesList.map(i => (
          <MoviesView key={i.id} popularMovies={i} />
        ))}
      </ul>
    )
  }

  renderMainUpcomingPage = () => (
    <div>
      <Navbar />
    </div>
  )

  render() {
    return (
      <div>
        {this.renderMainUpcomingPage()}
        <div className="upcoming-movies-main-container">
          {this.renderUpcomingMoviesView()}
        </div>
      </div>
    )
  }
}

export default UpcomingMovies
