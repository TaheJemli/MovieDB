import { NavLink, Link, useNavigate, useParams   } from "react-router-dom";

import { useState, useEffect  } from 'react';

import { Card, Button, Badge, Row, Col, Container, Alert, From} from "react-bootstrap";

import movies from "../mock/mov";
import Movie from "./Movie";

const Movies = () => {

    const [listmovies, setListMovies] = useState(movies);

    const onValueChange = (e) => {
        const { value } = e.target;
        const filteredMovies = movies.filter((movie) => movie.title.includes(value));
        setListMovies(filteredMovies);  
      
      };


    return(
        <Container>
            <Row>
                <h3>Searsh with title</h3>
                <input type="text" onChange={(e) => onValueChange(e)} />

            </Row>
        <Row>
          { listmovies.map((mov, index) => (
            <Col key={index}>
              <Movie
                movie={mov}
              ></Movie>
            </Col>
          ))}
        </Row>
      </Container>
    )

}
export default Movies;