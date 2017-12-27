import {customerFormHelper} from '../helpers/customerFormHelper';

it('verify when all the fields in Customer Form are empty', () => { 
    const allFieldsEmpty = {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        country: ''
    };
    var testEmpty = customerFormHelper.verifyAllFields(allFieldsEmpty);
    expect(testEmpty).toEqual(false);
  
});

it('verify when all the fields in Customer Form are not empty', () => { 
    const allFieldsNotEmpty = {
        firstName: 'firstName',
        lastName: 'lastName',
        email: 'email',
        address: 'address',
        city: 'city',
        country: 'country'
    };

    var testNotEmpty = customerFormHelper.verifyAllFields(allFieldsNotEmpty);
    expect(testNotEmpty).toEqual(true);
});