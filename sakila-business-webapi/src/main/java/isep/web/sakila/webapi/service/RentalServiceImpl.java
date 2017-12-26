package isep.web.sakila.webapi.service;

import java.util.LinkedList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import isep.web.sakila.dao.repositories.CustomerRepository;
import isep.web.sakila.dao.repositories.FilmRepository;
import isep.web.sakila.dao.repositories.InventoryRepository;
import isep.web.sakila.dao.repositories.RentalRepository;
import isep.web.sakila.dao.repositories.StoreRepository;
import isep.web.sakila.jpa.entities.Inventory;
import isep.web.sakila.jpa.entities.Rental;
import isep.web.sakila.jpa.entities.Store;
import isep.web.sakila.webapi.model.CustomerWO;
import isep.web.sakila.webapi.model.InventoryWO;
import isep.web.sakila.webapi.model.RentalWO;
import isep.web.sakila.webapi.model.StoreWO;

@Service("rentalService")
@Transactional
public class RentalServiceImpl implements RentalService{

	private static final Log	log	= LogFactory.getLog(RentalServiceImpl.class);

	@Autowired
	private CustomerRepository customerRepository;
	@Autowired
	private RentalRepository rentalRepository;
	@Autowired
	private InventoryRepository inventoryRepository;
	@Autowired
	private StoreRepository storeRepository;
	@Autowired
	private FilmRepository filmRepository;

	@Override
	public RentalWO findById(int id) {
		log.debug(String.format("Looking for rental by Id %s", id));
		Rental rental = rentalRepository.findOne(id);

		if (rental != null)
		{
			return new RentalWO(rental);
		}
		return null;
	}

	@Override
	public List<RentalWO> findAllByCustomerId(int id) {
		List<RentalWO> rentals = new LinkedList<RentalWO>();
		log.debug(String.format("Looking for rentals by customer Id %s", id));
		RentalWO currentRental = null;
		for (Rental rental : rentalRepository.findAllByCustomer(customerRepository.findOne(id))) {
			currentRental = new RentalWO(rental);
			currentRental.setInventory(new InventoryWO(rental.getInventory()));
			currentRental.setCustomer(new CustomerWO(rental.getCustomer()));
			rentals.add(currentRental);
			log.debug("Rental : " + rental);
		}
		return rentals;
	}

	@Override
	public void saveRental(RentalWO rentalWO) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void updateRental(RentalWO rentalWO) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteRentalById(int id) {
		log.debug(String.format("Delete rental with Id %s", id));
		rentalRepository.delete(id);
		
	}

	@Override
	public List<RentalWO> findAllRentals() {
		List<RentalWO> rentals = new LinkedList<RentalWO>();
		RentalWO currentRental = null;
		for (Rental rental : rentalRepository.findAll()) {
			currentRental = new RentalWO(rental);
			currentRental.setInventory(new InventoryWO(rental.getInventory()));
			currentRental.setCustomer(new CustomerWO(rental.getCustomer()));
			rentals.add(currentRental);
			log.debug("Rental : " + rental);
		}
		return rentals;
	}

}
