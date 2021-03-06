package isep.web.sakila.webapi.service;

import java.util.List;

import isep.web.sakila.webapi.model.CityWO;

public interface CityService {
	CityWO findById(int id);
	
	CityWO findByCityAndCountry(String cityName, String countryName);

	void saveCity(CityWO cityWO);

	void updateCity(CityWO cityWO);

	void deleteCityById(int id);

	List<CityWO> findAllCities();
}
