import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiSave, FiArrowLeft } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import apiAcademico from '../../services/api-academico';
import alunoValidator from '../../validator/alunoValidator';
import { cpfMask, telefoneMask, cepMask } from '../../validator/masks';

const AlunoFormulario = (props) => {

    const { register, handleSubmit, errors} = useForm();
    const [dados, setDados] = useState({})

    const onSubmit = (data, event) => {
        const form = event.target;

        console.log(data);
        
        apiAcademico.post('alunos', data).then(response=>{
            console.log(response);
        }).catch(error => {
            console.log(error.response, errors)
        });
    }

    function handleMasks(event)
    {
        let {name, value} = event.target 

        switch(name){
            case 'cpf': value = cpfMask(value); break;
            case 'telefone': value = telefoneMask(value); break;
            case 'cep': value = cepMask(value); break;
        }
        
        setDados({...dados, [name]: value})
    }

    return (
        <>
        <h1>Aluno</h1>

        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>Dados Gerais</Card.Header>
                        <Card.Body>
                            <Form.Group controlId="nome">
                                <Form.Label>Nome: </Form.Label>
                                <Form.Control type="text"  name="nome" ref={register(alunoValidator.nome)} isInvalid={errors.nome} />
                                {errors.nome && 
                                    <Form.Control.Feedback type="invalid">{errors.nome?.message}</Form.Control.Feedback>
                                }
                            </Form.Group>
                            <Form.Group controlId="cpf">
                                <Form.Label>CPF: </Form.Label>
                                <Form.Control 
                                    type="text" name="cpf" 
                                    ref={register(alunoValidator.cpf)} isInvalid={errors.cpf} 
                                    onChange={handleMasks} value={dados.cpf} 
                                />
                                {errors.cpf && 
                                    <Form.Control.Feedback type="invalid">{errors.cpf?.message}</Form.Control.Feedback>
                                }
                            </Form.Group>
                            <Form.Group controlId="matricula">
                                <Form.Label>Matricula: </Form.Label>
                                <Form.Control type="text" name="matricula"  ref={register(alunoValidator.matricula)} isInvalid={errors.matricula} />
                                {errors.matricula && 
                                    <Form.Control.Feedback type="invalid">{errors.matricula?.message}</Form.Control.Feedback>
                                }
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>E-mail: </Form.Label>
                                <Form.Control type="email" name="email"  ref={register(alunoValidator.email)} isInvalid={errors.email}  />
                                {errors.email && 
                                    <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
                                }
                            </Form.Group>
                            <Form.Group controlId="telefone">
                                <Form.Label>Telefone: </Form.Label>
                                <Form.Control 
                                    type="text" name="telefone" 
                                     ref={register(alunoValidator.telefone)} isInvalid={errors.telefone} 
                                    onChange={handleMasks} value={dados.telefone} 
                                />
                                {errors.telefone && 
                                    <Form.Control.Feedback type="invalid">{errors.telefone?.message}</Form.Control.Feedback>
                                }
                            </Form.Group>
                        </Card.Body>
                    </Card>

                </Col>
                <Col>

                    <Card>
                        <Card.Header>Endereço</Card.Header>
                        <Card.Body>
                            <Form.Group controlId="cep">
                                <Form.Label>CEP: </Form.Label>
                                <Form.Control 
                                    type="text" name="cep" 
                                     ref={register(alunoValidator.cep)} isInvalid={errors.cep} 
                                    onChange={handleMasks} value={dados.cep} 
                                 />        
                                {errors.cep && 
                                    <Form.Control.Feedback type="invalid">{errors.cep?.message}</Form.Control.Feedback>
                                }                        
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Form.Group controlId="uf">
                                        <Form.Label>UF: </Form.Label>
                                        <Form.Control type="text" name="uf"  ref={register(alunoValidator.uf)} isInvalid={errors.uf}  />
                                        {errors.uf && 
                                            <Form.Control.Feedback type="invalid">{errors.uf?.message}</Form.Control.Feedback>
                                        }                        
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="municipio">
                                        <Form.Label>Município: </Form.Label>
                                        <Form.Control type="text" name="municipio"  ref={register(alunoValidator.municipio)} isInvalid={errors.municipio}  />
                                        {errors.municipio && 
                                            <Form.Control.Feedback type="invalid">{errors.municipio?.message}</Form.Control.Feedback>
                                        }                        
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Form.Group controlId="logradouro">
                                <Form.Label>Logradouro: </Form.Label>
                                <Form.Control type="text" name="logradouro"  ref={register(alunoValidator.logradouro)} isInvalid={errors.logradouro}  />
                                {errors.logradouro && 
                                    <Form.Control.Feedback type="invalid">{errors.logradouro?.message}</Form.Control.Feedback>
                                }                        
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Form.Group controlId="complemento">
                                        <Form.Label>Complemento: </Form.Label>
                                        <Form.Control type="text" name="complemento"  ref={register(alunoValidator.complemento)} isInvalid={errors.complemento}  />
                                        {errors.complemento && 
                                            <Form.Control.Feedback type="invalid">{errors.complemento?.message}</Form.Control.Feedback>
                                        }                        
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="numero">
                                        <Form.Label>Número: </Form.Label>
                                        <Form.Control type="text" name="numero"  ref={register(alunoValidator.numero)} isInvalid={errors.numero}  />
                                        {errors.numero && 
                                            <Form.Control.Feedback type="invalid">{errors.numero?.message}</Form.Control.Feedback>
                                        }                        
                                    </Form.Group>
                                </Col>
                            </Row>
                            
                            <Form.Group controlId="bairro">
                                <Form.Label>Bairro: </Form.Label>
                                <Form.Control type="text" name="bairro"  ref={register(alunoValidator.bairro)} isInvalid={errors.bairro}  />
                                {errors.bairro && 
                                    <Form.Control.Feedback type="invalid">{errors.bairro?.message}</Form.Control.Feedback>
                                }                        
                            </Form.Group>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
            <div className="text-center mt-3 mb-2">
                <Button variant="primary" type="submit"><FiSave /> Enviar</Button>
                <Link to="/alunos" className="btn btn-danger ml-2"><FiArrowLeft /> Voltar</Link>
            </div>
        </Form>

        </>
    )
}

export default AlunoFormulario