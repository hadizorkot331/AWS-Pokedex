import Pokemon from "@/model/pokemon";
import { Row, Col, Container, Image, ListGroup } from 'react-bootstrap';


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
                    Pokémon Properties
                </Col>
            </Row>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>
                    <p>Attack</p>
                    {pokemon.attack}
                </ListGroup.Item>
                <ListGroup.Item>
                    <p>Defense</p>
                    {pokemon.defense}
                </ListGroup.Item>
                <ListGroup.Item>
                    <p>Health</p>
                    {pokemon.healthPoints}
                </ListGroup.Item>
            </ListGroup>
        </Container>
    );
}
