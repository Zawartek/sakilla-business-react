package isep.web.sakila.dao.repositories;

import org.springframework.data.repository.CrudRepository;

import isep.web.sakila.jpa.entities.Address;
import isep.web.sakila.jpa.entities.City;

public interface AddressRepository extends CrudRepository<Address, Integer> {
	public Address findOneByAddressAndCity(String address, City city);

}
