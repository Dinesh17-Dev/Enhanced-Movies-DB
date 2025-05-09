import {BrowserRouter, Route, Switch} from 'react-router-dom'

import PopularMovies from './Components/PopularMovies/index'
import TopRatedMovies from './Components/TopRatedMovies/index'
import UpcomingMovies from './Components/UpcomingMovies/index'
import MovieDetails from './Components/MovieDetails/index'
import SearchMovie from './Components/SearchMovies/index'

import './App.css'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={PopularMovies} />
      <Route exact path="/top-rated" component={TopRatedMovies} />
      <Route exact path="/upcoming" component={UpcomingMovies} />
      <Route exact path="/movies/:id" component={MovieDetails} />
      <Route exact path="/search/:query" component={SearchMovie} />
    </Switch>
  </div>
)

export default App
