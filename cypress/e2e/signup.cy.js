import signupPage from "../pages/SignupPage"
import signupFactory from "../factories/SignupFactory";

describe("Signup", () => {

  // beforeEach(function() {
  //   cy.fixture('deliver').then((d)=> {
  //     this.deliver = d
  //   })
  // });

  it("User should be deliver", function() {    

    var deliver = signupFactory.deliver()

    signupPage.go()
    signupPage.fillForm(deliver)
    signupPage.submit()

    const expectedMessage = "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato."
    signupPage.modalContentShouldBe(expectedMessage)    
  })

  it("Incorrect document", function() {

    var deliver = signupFactory.deliver()

    deliver.cpf = '00000000141AA'

    signupPage.go()
    signupPage.fillForm(deliver)
    signupPage.submit()

    signupPage.alertMessagShouldBe("Oops! CPF inválido") 

  })

  it("Incorrect email", function() {

    var deliver = signupFactory.deliver()

    deliver.email = 'user.com.br'

    signupPage.go()
    signupPage.fillForm(deliver)
    signupPage.submit()

    signupPage.alertMessagShouldBe("Oops! Email com formato inválido.") 

  })

  context('Required fields', function(){
    const messages = [
      { field: 'name', output: 'É necessário informar o nome'},
      { field: 'cpf', output: 'É necessário informar o CPF'},
      { field: 'email', output: 'É necessário informar o email'},
      { field: 'postalCode', output: 'É necessário informar o CEP'},
      { field: 'address', output: 'É necessário informar o número do endereço'},
      { field: 'deliverMethod', output: 'Selecione o método de entrega'},
      { field: 'cnh', output: 'Adicione uma foto da sua CNH'}
    ]

    before(function(){
      signupPage.go()
      signupPage.submit()
    })

    messages.forEach(function(msg){
      it(`${msg.field} is required`,function(){
        signupPage.alertMessagShouldBe(msg.output)
      })
    })
  })
})
