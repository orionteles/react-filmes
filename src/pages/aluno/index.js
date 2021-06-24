import React, { useState, useEffect } from 'react';
import apiAcademico from '../../services/api-academico';
import { Table } from 'react-bootstrap';
import { FiTrash, FiEdit, FiSearch, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Aluno = () => {

    const [alunos, setAlunos] = useState([])

    useEffect(()=>{
        apiAcademico.get('alunos?qtd=1000').then(response=>{
            setAlunos(response.data.data)
        })
    }, [])

    return (
        <>
        <h1>Alunos</h1>

        <Link to="/alunos/create" className="btn btn-warning mb-3"><FiPlus/> Novo</Link>

        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Matrícula</th>
                    <th>E-mail</th>
                    <th>Telefone</th>
                </tr>
            </thead>
            <tbody>
                {alunos.map(aluno=>(
                    <tr key={aluno.id}>
                        <td nowrap="true">
                            <Link to="/aluno/edit" className="mr-2"><FiEdit /></Link>
                            <Link to="/aluno/show" className="mr-2"><FiSearch /></Link>
                            <Link to="/aluno/edit"><FiTrash /></Link>
                        </td>
                        <td>{aluno.nome}</td>
                        <td>{aluno.cpf}</td>
                        <td>{aluno.matricula}</td>
                        <td>{aluno.email}</td>
                        <td>{aluno.telefone}</td>
                    </tr>
                ))}
            </tbody>
        </Table>

        </>        
    )
}

export default Aluno