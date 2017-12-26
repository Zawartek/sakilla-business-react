package isep.web.sakila.webapi.service;

import java.util.List;

import isep.web.sakila.webapi.model.CountryWO;

public interface CountryService {
	CountryWO findById(int id);
	
	CountryWO findByCountry(String countryName);

	void saveCountry(CountryWO countryWO);

	void updateCountry(CountryWO countryWO);

	void deleteCountryById(int id);

	List<CountryWO> findAllCountries();
}
