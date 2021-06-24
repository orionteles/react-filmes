import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { Row, Col, Card } from 'react-bootstrap';
import { FiThumbsUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Lancamento = () => {

    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        api.get('movie/upcoming?language=pt-BR').then(response=>{
            setFilmes(response.data.results)
        })
    }, [])

    return (
        <div>
            <h1>Filmes</h1>
            <Row>
            {filmes.map((filme)=>(
                <Col md={3} key={filme.id}>
                    <Card className="mb-2">
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${filme.backdrop_path}`} />
                        <Card.Body>
                        <Card.Title>
                            <Link to={`/filmes/${filme.id}`}>{filme.title}</Link>
                        </Card.Title>
                        <Card.Text><FiThumbsUp color="red" />{filme.vote_average} ({filme.vote_count} votos)</Card.Text>
                        <Card.Text>Lançamento: {filme.release_date}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>
        </div>
    )
}

export default Lancamento   