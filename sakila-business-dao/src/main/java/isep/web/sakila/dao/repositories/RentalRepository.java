package isep.web.sakila.dao.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import isep.web.sakila.jpa.entities.Customer;
import isep.web.sakila.jpa.entities.Rental;

public interface RentalRepository extends CrudRepository<Rental, Integer> {

	List<Rental> findAllByCustomer(Customer customer);

}
