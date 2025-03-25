import {Component} from 'react'

import Navbar from '../Navbar'
import MoviesView from '../MoviesView'

import './index.css'

class TopRatedMovies extends Component {
  state = {topRatedMoviesList: []}

  componentDidMount() {
    this.getPopularMovies()
  }

  getPopularMovies = async () => {
    const apiKey = '4362c27df08506ae74bed5c135f05eb9'
    const options = {
      method: 'GET',
    }
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`

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

    this.setState({topRatedMoviesList: moviesResulsModified})
  }

  renderTopRatedMoviesView = () => {
    const {topRatedMoviesList} = this.state
    return (
      <ul className="topRatedMovies-list-container">
        {topRatedMoviesList.map(i => (
          <MoviesView key={i.id} popularMovies={i} />
        ))}
      </ul>
    )
  }

  renderMainTopRatedPage = () => (
    <div>
      <Navbar />
    </div>
  )

  render() {
    return (
      <div>
        {this.renderMainTopRatedPage()}
        <div className="topRated-movies-main-container">
          {this.renderTopRatedMoviesView()}
        </div>
      </div>
    )
  }
}

export default TopRatedMovies
