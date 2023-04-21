import { NavLink, Link, useNavigate, useParams   } from "react-router-dom";

import { useState, useEffect  } from 'react';

import { Card, Button, Badge, Row, Col, Container, Alert, From} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/slices/cartSlice";

const Movie = (props) => {
    const dispatch = useDispatch();
    const [isadded,setIsAdded] = useState(false);

    const addToCart = (p) => {
        dispatch(increment(p));
      };

      const handleAdded = () => {
        setIsAdded(true);
        setTimeout(()=>{
            setIsAdded(false);
        }, 2000);
    }

    return(
        <Card style={{ width: '18rem' }}>
                        {
                isadded && (
                <Alert style={{ width: '70%', marginTop: 20 }} variant='primary'>
                    added to wishlist
                </Alert>
                )
                }
        <Card.Img variant="top" src={require(`../assets/${props.movie.img}`)} />
        <Card.Body>
        <NavLink to={`/movies/${props.movie.title}`}>
        <Card.Title>{props.movie.title}</Card.Title>
      </NavLink>    
          <Card.Text><Badge bg="warning" text="dark">year :</Badge>&nbsp;{props.movie.year}</Card.Text>
          <Card.Text><Badge bg="warning" text="dark">Genre :</Badge>&nbsp;{props.movie.genre}</Card.Text>
          <Card.Text>{props.movie.description}</Card.Text>
        </Card.Body>
        <Row>
                        <Col md={12}>
                            <Button variant="success" onClick={() => addToCart(props.movie)}>
                            ADD TO WishList +
                            </Button>
                        </Col>
                    </Row>
      </Card>
    )

}
export default Movie;