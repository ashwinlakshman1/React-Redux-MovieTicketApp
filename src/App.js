import React from "react"
import { BrowserRouter as Router, Route, } from "react-router-dom"
import LatestMovieList from './Components/LatestMovieList'
import MovieDetails from './Components/MovieDetails'
import TicketBookingDetail from "./Components/TicketBookingDetail"
import FinalBookingPage from "./Components/FinalBookingPage"
import { Navbar, Nav} from 'react-bootstrap'

function App() {


  return (
    /***** Nav bar and Routing paths*****/

    <Router>
      <div>
          <header>
                <Navbar bg="dark" variant="dark" height="10" style={{ maxHeight: '70px' }} >
                    <Nav className="mr-auto" style={{color:"white", fontSize:"15px", paddingLeft:"20px"}}>

                      <Nav.Link style={{color:"white", fontSize:"15px", paddingLeft:"20px"}}
                          href="/latestmovies">Latest Movies</Nav.Link>

                    </Nav>


                </Navbar>
            </header>
            <Route path='/' exact component={LatestMovieList} />
            <Route path='/latestmovies' exact component={LatestMovieList} />
            <Route path='/latestmovies/:id' exact component={MovieDetails}></Route>
            <Route path='/ticketbooking/:name/' exact component={TicketBookingDetail}></Route>
            <Route path='/finalconfirmation' exact component={FinalBookingPage}></Route>

      </div>
    </Router>
  )
}

export default App
