package isep.web.sakila.dao.repositories;

import org.springframework.data.repository.CrudRepository;

import isep.web.sakila.jpa.entities.City;
import isep.web.sakila.jpa.entities.Country;

public interface CityRepository extends CrudRepository<City, Integer> {
	public City findOneByCity(String city);
	public City findOneByCityAndCountry(String city, Country country);
}
