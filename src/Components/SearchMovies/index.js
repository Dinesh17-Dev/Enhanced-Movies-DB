import {Component} from 'react'
import {withRouter} from 'react-router-dom'

import Navbar from '../Navbar'
import MoviesView from '../MoviesView'

import './index.css'

class SearchMovie extends Component {
  state = {searchMovieList: []}

  componentDidMount() {
    this.getSearchDetails()
  }

  componentDidUpdate(prevProps) {
    const {match} = this.props
    const {match: prevMatch} = prevProps
    if (prevMatch.params.query !== match.params.query) {
      this.getSearchDetails()
    }
  }

  getSearchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {query} = params
    console.log(query)

    const apiKey = '4362c27df08506ae74bed5c135f05eb9'
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1`
    const options = {
      method: 'GET',
    }

    const response = await fetch(searchUrl, options)
    const data = await response.json()

    const resultData = data.results

    const updatedData = resultData.map(i => ({
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
    console.log(updatedData)
    this.setState({searchMovieList: updatedData, searchQuery: ''})
  }

  renderSearchMovie = () => {
    const {searchMovieList} = this.state
    return (
      <ul className="searchMovies-list-container">
        {searchMovieList.map(i => (
          <MoviesView key={i.id} popularMovies={i} />
        ))}
      </ul>
    )
  }

  renderSearchMoviesPage = () => (
    <div>
      <Navbar />
      <div className="searchMovies-main-container">
        {this.renderSearchMovie()}
      </div>
    </div>
  )

  render() {
    return this.renderSearchMoviesPage()
  }
}

export default withRouter(SearchMovie)
