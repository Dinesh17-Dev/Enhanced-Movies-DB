import {BrowserRouter, Route, Switch} from 'react-router-dom'

import PopularMovies from './Components/PopularMovies/index.js'
import TopRatedMovies from './Components/TopRatedMovies/index.js'
import UpcomingMovies from './Components/UpcomingMovies/index.js'
import MovieDetails from './Components/MovieDetails/index.js'
import SearchMovie from './Components/SearchMovies/index.js'

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
