package isep.web.sakila.webapi.controller;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import isep.web.sakila.webapi.model.RentalWO;
import isep.web.sakila.webapi.service.RentalService;

@RestController
public class RentalRestController {

	@Autowired
	private RentalService rentalService;

	private static final Log	log	= LogFactory.getLog(RentalRestController.class);
	
	@RequestMapping(value = "/rental", method = RequestMethod.GET)
	public ResponseEntity<List<RentalWO>> listAllRentals()
	{
		List<RentalWO> rentals = rentalService.findAllRentals();
		if (rentals.isEmpty())
		{
			return new ResponseEntity<List<RentalWO>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<RentalWO>>(rentals, HttpStatus.OK);
	}

	@RequestMapping(value = "/rental/{id}", method = RequestMethod.GET)
	public ResponseEntity<List<RentalWO>> listAllRentalsByCustomer(@PathVariable("id") int id)
	{
		List<RentalWO> rentals = rentalService.findAllByCustomerId(id);
		if (rentals.isEmpty())
		{
			return new ResponseEntity<List<RentalWO>>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<List<RentalWO>>(rentals, HttpStatus.OK);
	}
}
