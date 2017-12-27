import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


describe('Mock Tests Rent', function() {
    var instance;
    var mock;
  
    beforeEach(function() {
      instance = axios.create();
      mock = new MockAdapter(instance);
    });

    it('mock request get all rentals', function() {
        mock.onGet('/rental').reply(200, {
            "rentalId": 1,
            "rentalDate": 1116968010000,
            "returnDate": 1117137870000,
            "customer": {
                "customerId": 130,
                "lastName": "HUNTER",
                "firstName": "CHARLOTTE",
                "email": "CHARLOTTE.HUNTER@sakilacustomer.org",
                "address": null,
                "store": null
            },
            "inventory": {
                "inventoryId": 367,
                "store": null ,
                "film": {
                    "filmId": 80,
                    "description": "A Emotional Documentary of a Student And a Girl who must Build a Boat in Nigeria",
                    "length": 148,
                    "rating": "G",
                    "releaseYear": "2006-01-01",
                    "rentalDuration": 7,
                    "rentalRate": 2.99,
                    "replacementCost": 21.99,
                    "specialFeatures": "Trailers",
                    "title": "BLANKET BEVERLY",
                    "language1": null,
                    "language2": null
                }
            }
        });
    
        return instance.get('/rental').then(function(response) {
            expect(response.status).toEqual(200);
            expect(response.data.rentalId).toEqual(1);
            expect(response.data.rentalDate).toEqual(1116968010000);
            expect(response.data.returnDate).toEqual(1117137870000);
            expect(response.data.customer.lastName).toEqual("HUNTER");
            expect(response.data.customer.firstName).toEqual("CHARLOTTE");
            expect(response.data.customer.email).toEqual("CHARLOTTE.HUNTER@sakilacustomer.org");
            expect(response.data.inventory.film.title).toEqual("BLANKET BEVERLY");         
        });
    })    
})