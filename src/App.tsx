import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Nav from './components/Nav'
import { StoreProvider } from './context/Provider'
import Home from './pages/Home'
import SingleEvent from './pages/SingleEvent'
import './styles/app.scss'

function App() {
  return (
    <StoreProvider>
      <Router>
        <div className="container">
          <main>
            <Link to="/">
              <h1>Weather App</h1>
            </Link>
            <Link to="/">
              <h1>Darik Hart</h1>
            </Link>
            <Nav />
            <div className="event-container">
              <Route path="/weather/:id" exact component={Home} />
              <Route path="/forecast/:id" component={SingleEvent} />
            </div>
          </main>
        </div>
      </Router>
    </StoreProvider>
  )
}

export default App
