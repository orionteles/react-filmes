import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { Row, Col, Card, Image } from 'react-bootstrap';
import { FiThumbsUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const FilmeDetalhe = ({match}) => {

    const [filme, setFilme] = useState({})

    useEffect(()=>{
        api.get('movie/' + match.params.id + '?language=pt-BR').then(response=>{
            console.log(response.data);
            
            setFilme(response.data)
        })
    }, [])

    return (
        <div>
            <Row className="mt-3">
                <Col md={3}>
                    <Image src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} fluid />
                </Col>
                <Col>
                    <h1>{filme.title}</h1>
                    <h3>{filme.tagline}</h3>
                    <p>{filme.overview}</p>
                </Col>
            </Row>
        </div>
    )
}

export default FilmeDetalhe