import { NavLink, Link, useNavigate, useParams  } from "react-router-dom";

import { Card, Button, Badge, Row, Col, Container, Alert, From} from "react-bootstrap";
import { useState, useEffect } from 'react';
const NotFound = () => {

    const [isWelcome, setIsWelcome] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setIsWelcome(false);
        }, 3000);
      }, []);

    return (
        <Container>
                              { isWelcome && (
        <Alert style={{ width: "70%", marginTop: 20 }} variant="success">
          {" "}
          Redirect to Movie Page
        </Alert>
      )}
        </Container>
        
    )

}
export default NotFound;