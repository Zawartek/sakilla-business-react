package isep.web.sakila.webapi.service;

import java.util.List;

import isep.web.sakila.webapi.model.RentalWO;

public interface RentalService {
	RentalWO findById(int id);

	void saveRental(RentalWO rentalWO);

	void updateRental(RentalWO rentalWO);

	void deleteRentalById(int id);

	List<RentalWO> findAllRentals();

	List<RentalWO> findAllByCustomerId(int id);
}
