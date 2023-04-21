import { useState, useEffect } from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import movies from "../mock/mov";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
    const {title} = useParams();
    const movie = movies.find((movie) => movie.title === title)

    return (<>
    {movie === undefined ? (
        <h1> Not Found </h1>
    ) : (
        <Container style={{ marginTop: "30px" }}>
        <Row>
            <Col md={4}>
                <Card.Img
                    variant="top"
                    src={require("../assets/" + movie.img)}
                    alt="movie Img"
                    height="300"
                />
            </Col>
            <Col md={8}>
                <Row>
                    <Col md={12}>
                        <h5>Description</h5>
                    </Col>
                    <Col>
                        <p style={{ marginLeft: "50px" }}>
                            {movie.description}
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <h5>Genre</h5>
                    </Col>
                    <Col>
                        <p style={{ marginLeft: "50px" }}>{movie.genre}</p>

                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <h5>Year</h5>
                    </Col>
                    <Col>
                        <p style={{ marginLeft: "50px" }}>{movie.year}</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
    )}
    </>)

}
export default MovieDetails;