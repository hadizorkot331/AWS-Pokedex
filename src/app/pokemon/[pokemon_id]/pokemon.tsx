import Pokemon from "@/model/pokemon";
import { Row, Col, Container, Image, ListGroup, ProgressBar, Badge } from 'react-bootstrap';

type Props = {
    pokemon: Pokemon;
}


export default function PokemonComponent(props: Props) {
    const { pokemon } = props;


    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto"><h1>{pokemon.pokemonName}</h1></Col>
            </Row>
            <Row>
                <Col>
                    <Image src={pokemon.mainImage} thumbnail />
                </Col>
                <Col>
                    <Row>
                        Pokémon Properties
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>
                                <p>Attack</p>
                                <ProgressBar variant="danger" now={pokemon.attack} label={`${pokemon.attack}`} />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>Defense</p>
                                <ProgressBar variant="info" now={pokemon.defense} label={`${pokemon.defense}`} />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>Speed</p>
                                <ProgressBar variant="warning" now={pokemon.speed} label={`${pokemon.speed}`} />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>Health</p>
                                <ProgressBar variant="success" max={300} now={pokemon.healthPoints} label={`${pokemon.healthPoints}`} />
                            </ListGroup.Item>
                        </ListGroup>
                    </Row>
                    <br />
                    <Row>
                        <ListGroup>
                            <ListGroup.Item> <b>Evolation Family</b> </ListGroup.Item>
                            <ListGroup.Item>
                                {pokemon.devolution} <Badge bg="danger">Devolution</Badge>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {pokemon.pokemonName} <Badge bg="info">Current</Badge>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {pokemon.evolution} <Badge bg="success">Evolution</Badge>
                            </ListGroup.Item>

                        </ListGroup>
                    </Row>
                </Col>
            </Row>

        </Container>
    );
}
