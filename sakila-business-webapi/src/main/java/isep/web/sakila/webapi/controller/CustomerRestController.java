package isep.web.sakila.webapi.controller;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import isep.web.sakila.webapi.model.AddressWO;
import isep.web.sakila.webapi.model.CityWO;
import isep.web.sakila.webapi.model.CountryWO;
import isep.web.sakila.webapi.model.CustomerWO;
import isep.web.sakila.webapi.model.form.FormCustomer;
import isep.web.sakila.webapi.service.AddressService;
import isep.web.sakila.webapi.service.CityService;
import isep.web.sakila.webapi.service.CountryService;
import isep.web.sakila.webapi.service.CustomerService;
import isep.web.sakila.webapi.service.StoreService;

@RestController
public class CustomerRestController
{

	@Autowired
	CustomerService	customerService;
	
	@Autowired
	AddressService addressService;

	@Autowired
	CityService cityService;

	@Autowired
	CountryService countryService;

	@Autowired
	StoreService storeService;
	
	private static final Log	log	= LogFactory.getLog(CustomerRestController.class);

	@RequestMapping(value = "/customer", method = RequestMethod.GET)
	public ResponseEntity<List<CustomerWO>> listAllCustomers()
	{
		List<CustomerWO> customers = customerService.findAllActiveCustomers();
		if (customers.isEmpty())
		{
			return new ResponseEntity<List<CustomerWO>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<CustomerWO>>(customers, HttpStatus.OK);
	}

	@RequestMapping(value = "/customer/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<CustomerWO> getCustomer(@PathVariable("id") int id)
	{
		System.out.println("Fetching Customer with id " + id);
		CustomerWO staffWO = customerService.findById(id);
		if (staffWO == null)
		{
			System.out.println("Customer with id " + id + " not found");
			return new ResponseEntity<CustomerWO>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<CustomerWO>(staffWO, HttpStatus.OK);
	}

	// -------------------Create a Customer----------------------------------

	@RequestMapping(value = "/customer", method = RequestMethod.POST)
	public ResponseEntity<CustomerWO> createCustomer(@RequestBody FormCustomer form, UriComponentsBuilder ucBuilder)
	{
		System.out.println("Creating customer " + form.getLastName());
		CustomerWO customer = new CustomerWO();
		CityWO customerCity = cityService.findByCityAndCountry(form.getCity(), form.getCountry());
		AddressWO customerAddress = new AddressWO();
		CountryWO customerCountry=null;
		if (customerCity== null) {
			customerCity = new CityWO();
			customerCity.setCity(form.getCity());
			customerCountry = countryService.findByCountry(form.getCountry());
			if (customerCountry==null) {
				customerCountry = new CountryWO();
				customerCountry.setCountry(form.getCountry());
				countryService.saveCountry(customerCountry);
				customerCountry = countryService.findByCountry(form.getCountry());
			}
			customerCity.setCountry(customerCountry);
			cityService.saveCity(customerCity);
			customerCity = cityService.findByCityAndCountry(form.getCity(), form.getCountry());
		}
		customerAddress.setCity(customerCity);
		customerAddress.setAddress(form.getAddress());
		customerAddress.setDistrict("");
		customerAddress.setPhone("");
		addressService.saveAddress(customerAddress);
		customer.setAddress(addressService.findByAddressAndCity(form.getAddress(), form.getCity()));
		
		// Customer Datas
		customer.setFirstName(form.getFirstName());
		customer.setLastName(form.getLastName());
		customer.setEmail(form.getEmail());
		customer.setStore(storeService.findById(1));
		customerService.saveCustomer(customer);

		return new ResponseEntity<CustomerWO>(customer, HttpStatus.OK);
	}

	@RequestMapping(value = "/customerUpdate", method = RequestMethod.POST)
	public ResponseEntity<CustomerWO> updateCustomer(@RequestBody FormCustomer form, UriComponentsBuilder ucBuilder)
	{

		System.out.println("Creating customer " + form.getLastName());
		CustomerWO customer = customerService.findById(form.getCustomerId());
		AddressWO customerAddress = customer.getAddress();
		CityWO customerCity = cityService.findByCityAndCountry(form.getCity(), form.getCountry());
		CountryWO customerCountry=null;
		if (customerCity== null) {
			customerCity = new CityWO();
			customerCity.setCity(form.getCity());
			customerCountry = countryService.findByCountry(form.getCountry());
			if (customerCountry==null) {
				customerCountry = new CountryWO();
				customerCountry.setCountry(form.getCountry());
				countryService.saveCountry(customerCountry);
				customerCountry = countryService.findByCountry(form.getCountry());
			}
			customerCity.setCountry(customerCountry);
			cityService.saveCity(customerCity);
			customerCity = cityService.findByCityAndCountry(form.getCity(), form.getCountry());
		}
		customerAddress.setCity(customerCity);
		customerAddress.setAddress(form.getAddress());
		addressService.updateAddress(customerAddress);
		
		// Customer Datas
		customer.setFirstName(form.getFirstName());
		customer.setLastName(form.getLastName());
		customer.setEmail(form.getEmail());
		customer.setAddress(customerAddress);
		customerService.updateCustomer(customer);

		return new ResponseEntity<CustomerWO>(customer, HttpStatus.OK);
	}

	@RequestMapping(value = "/customerDelete/{id}", method = RequestMethod.GET)
	public ResponseEntity<CustomerWO> deleteCustomer(@PathVariable("id") int id)
	{

		System.out.println("Fetching & Deleting Customer with id " + id);

		CustomerWO customerWO = customerService.findById(id);
		if (customerWO == null)
		{
			System.out.println("Unable to delete. Customer with id " + id + " not found");
			return new ResponseEntity<CustomerWO>(HttpStatus.NOT_FOUND);
		}

		customerService.deleteCustomerById(id);
		return new ResponseEntity<CustomerWO>(HttpStatus.NO_CONTENT);
	}
}
