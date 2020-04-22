const ClientsMillion = require ('../../src/models/Cliente')

describe('Model clientes-million', () => {
/*
  nome: {type: String, required: true},
  sobrenome: {type: String},
  cpf: {type: String, required: true, unique: true},
  senha: {type: String, required: true},
  login: {type: String, required: true, unique: true},
  createat: {type: Date, default:new Date().getDate() },
  updatetat: {type: Date, required: true, default:new Date().getDate() }


*/

beforeEach(async () => {
    await ClientsMillion.deleteMany({

    })
})

it ('Deveria retornar todos os clientes', async () => {
    const clienteMillion = await ClientsMillion.find({})
    expect(clienteMillion).toEqual([])
})

it ('Deveria criar um novo cliente', async () => {
    const clienteMillion = await ClientsMillion.create({nome:"TESTE DE NOME",sobrenome:"TESTE DE SOBRENOME",cpf:"123456789",senha:"12345",login:"TESTE_DE_LOGIN"})
    expect(clienteMillion).toBeDefined
})

it ('Deveria atualizar um novo cliente', async () => {
    const oldclienteMillion = await ClientsMillion.create({nome:"TESTE DE NOME",sobrenome:"TESTE DE SOBRENOME",cpf:"123456789",senha:"12345",login:"TESTE_DE_LOGIN"})
    const clienteMillion = await ClientsMillion.update(oldclienteMillion)
    expect(clienteMillion).toBeDefined
})

it ('Deveria remover um novo cliente', async () => {
    const oldclienteMillion = await ClientsMillion.create({nome:"TESTE DE NOME",sobrenome:"TESTE DE SOBRENOME",cpf:"123456789",senha:"12345",login:"TESTE_DE_LOGIN"})
    const clienteMillion = await ClientsMillion.findByIdAndRemove(oldclienteMillion._id)
    expect(clienteMillion).toBeDefined
})








})