
import { Card, Button, Badge, Row, Col, Container, Alert, From} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
    decrement,
    increment,
    remove,
    empty,
    selectCart,
    selectTotal,
} from "../redux/slices/cartSlice";

const WishList = () => {   
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();

    const addItemToCart = (p) => {
        dispatch(increment(p));
    };
    const removeItemFromCart = (p) => {
        dispatch(decrement(p));
    };
    const deleteItem = (p) => {
        dispatch(remove(p));
    }; 
    const emptyItems = (p) => {
        dispatch(empty(p));
    }
    return (
        <>
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
            <Container className="h-100 py-5">
                <Row className="justify-content-center align-items-center h-100">
                    <Col>
                        <Card className="shopping-cart" style={{ borderRadius: "15px", width: '80%' }}>
                            <Card.Body className="text-black">
                                <Row>
                                    <Col lg="12" className="px-5 py-4">
                                        <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">
                                            WishList Cart
                                        </h3>
                                        {cart.map((item, key) => {
                                            return (
                                                <div className="d-flex align-items-center mb-5">
                                                    <div className="flex-shrink-0">
                                                        <Card.Img
                                                            src={require("../assets/" + item.img)}

                                                            style={{ width: "150px" }}
                                                            alt="Generic placeholder image"
                                                        />
                                                    </div>

                                                    <div className="flex-grow-1 ms-3">

                                                        <h5 tag="h5" className="text-primary">
                                                            {item.title}
                                                        </h5>
                                                    </div>
                                                    <button className="RemoveCart" onClick={() => deleteItem(item)}>X</button>
                                                </div>
                                            );
                                        })}

                                        <hr
                                            className="mb-4"
                                            style={{
                                                height: "2px",
                                                backgroundColor: "#1266f1",
                                                opacity: 1,
                                            }}
                                        />
                                        <button className="RemoveCart" onClick={() => emptyItems()}>Clear Wishlist</button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
    )
                                        }
                                        export  default WishList;