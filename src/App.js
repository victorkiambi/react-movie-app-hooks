import {useState, useEffect } from 'react';
import axios from "axios";
import {Row, Col, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [movies, setMovies] = useState([]);

  const fetchData = () => {
      let url = "https://api.themoviedb.org/3/discover/movie?api_key=b1422e7b80cff3571090be90e6544244&sort_by=popularity.desc&page=1"
      axios.get(url)
          .then(response => {
              console.log(response.data.results)
              setMovies(response.data.results)
          })
          .catch(error => {
              console.log(error)
          });
  }

  useEffect(() => {
     fetchData();
  }, [])

  return (
      <Row>
          {movies.map((movie, index) => (
                  <Col key={index} sm={4} md={4} lg={3}>
                      <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src={"http://image.tmdb.org/t/p/w300//"+movie.poster_path} />
                          <Card.Body>
                              <Card.Title>{movie.title}</Card.Title>
                              <Card.Text>
                                  {movie.overview}
                              </Card.Text>
                          </Card.Body>
                      </Card>
                  </Col>
              )
          )}
      </Row>
  )
}

export default App;
