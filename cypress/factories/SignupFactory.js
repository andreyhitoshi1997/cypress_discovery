import { faker } from '@faker-js/faker';

export default {
    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
    

        var data =  {
            name: `${firstName} ${lastName}`,
            cpf: '00000014141',
            email: faker.internet.email(firstName),
            whatsapp: '11999999999',
            address: {
                postalCode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'apto 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data
    }
}