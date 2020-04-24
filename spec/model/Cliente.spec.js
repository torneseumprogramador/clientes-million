const Cliente = require('../../src/models/Cliente')

describe('Cliente', ()=> {
  beforeEach(async ()=> {
    await Cliente.deleteMany()
  })
  it('Deve retornar o modelo de Cliente', async () => {
    const cliente = await Cliente.find({})
    expect(cliente).not.toBeUndefined()
  });
  it('deveria ser definido', () => {
      expect(Cliente).toBeDefined()
  })
  it('deveria criar um cliente', async () => {
    const cliente = await Cliente.create({nome: "TEST1", sobrenome:"Testando", cpf:"11111111111",senha:"123",login:"test_user", createat: new Date(), updatetat:new Date()} )
    expect(cliente.nome).toBe("TEST1")
  })
  it('deveria atualizar um cliente', async () =>{
    const cliente = await Cliente.create({nome: "TEST3", sobrenome:"Testando", cpf:"11111111111",senha:"123",login:"test_user", createat: new Date(), updatetat:new Date()})
    const novoCliente = await Cliente.findByIdAndUpdate(cliente._id, {nome: "TEST3", sobrenome:"Testando", cpf:"11111111111",senha:"123",login:"test_user", createat: new Date(), updatetat:new Date()})
    expect(novoCliente.nome).toBe('TEST3')
  })
  it('deveria remover um cliente', async () => {
    const cliente = await Cliente.create({nome: "TEST1", sobrenome:"Testando", cpf:"11111111111",senha:"123",login:"test_user", createat: new Date(), updatetat:new Date()})
    await Cliente.findByIdAndRemove(cliente._id, {})
    const clienteRemovido = await Cliente.findById(cliente._id)
    expect(clienteRemovido).toBeNull()
  })
})