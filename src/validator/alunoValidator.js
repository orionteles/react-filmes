import { mensagens } from "./mensagens"

const alunoValidator = {
    nome: {
        required: mensagens.required,
    },
    cpf: {
        required: mensagens.required,
        maxLength: {value: 14, message: 'O CPF deve estar no formato 999.999.999-99'},
        minLength: {value: 14, message: 'O CPF deve estar no formato 999.999.999-99'},
    },
    matricula: {
        required: mensagens.required,
        maxLength: {value: 20, message: mensagens.maxLength},
        minLength: {value: 5, message: mensagens.minLength},
    },
    email: {
        maxLength: {value: 100, message: mensagens.maxLength},
    },
    telefone: {
        maxLength: {value: 15, message: mensagens.maxLength},
        minLength: {value: 14, message: mensagens.minLength},
    },
    cep: {
        maxLength: {value: 10, message: mensagens.maxLength},
        minLength: {value: 10, message: mensagens.minLength},
    },
    logradouro: {
        maxLength: {value: 100, message: mensagens.maxLength},
    },
    complemento: {
        maxLength: {value: 100, message: mensagens.maxLength},
    },
    numero: {
        maxLength: {value: 20, message: mensagens.maxLength},
    },
    bairro: {
        maxLength: {value: 100, message: mensagens.maxLength},
    },
}

export default alunoValidator