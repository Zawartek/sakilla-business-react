import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


describe('Mock Tests Customer', function() {
    var instance;
    var mock;
  
    beforeEach(function() {
      instance = axios.create();
      mock = new MockAdapter(instance);
    });

    it('mock request get all customers', function() {
        mock.onGet('/customer').reply(200, {
            "customerId": 1,
            "lastName": "SMITH",
            "firstName": "MARY",
            "email": "MARY.SMITH@sakilacustomer.org",
            "address": {
                "addressId": 5,
                "address": "2000 Hanoi Way",
                "address2": "",
                "district": "Nagasaki",
                "postalCode": null,
                "phone": "28303384290",
                "city": {
                    "cityId": 463,
                    "city": "Sasebo",
                    "country": {
                        "countryId": 50,
                        "country": "Japan"
                    }
                }
            },
            "store": null
        });
    
        return instance.get('/customer').then(function(response) {
          expect(response.status).toEqual(200);
          expect(response.data.customerId).toEqual(1);
          expect(response.data.lastName).toEqual('SMITH');
          expect(response.data.firstName).toEqual('MARY');
          expect(response.data.email).toEqual('MARY.SMITH@sakilacustomer.org');
          expect(response.data.address.address).toEqual('2000 Hanoi Way');
          expect(response.data.address.city.city).toEqual('Sasebo');
          expect(response.data.address.city.country.country).toEqual('Japan');
        });
    })    
})