import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Lancamento from './pages/lancamento';
import FilmeDetalhe from './pages/filmeDetalhe';
import Aluno from './pages/aluno';
import AlunoFormulario from './pages/aluno/formulario';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact component={Lancamento} path="/" />
            <Route exact component={FilmeDetalhe} path="/filmes/:id" />
            <Route exact component={Aluno} path="/alunos" />
            <Route exact component={AlunoFormulario} path="/alunos/create" />
        </BrowserRouter>
    )
}

export default Routes   