package isep.web.sakila.webapi.service;

import java.util.List;

import isep.web.sakila.webapi.model.AddressWO;

public interface AddressService {
	AddressWO findById(int id);
	
	AddressWO findByAddressAndCity(String address, String string);

	void saveAddress(AddressWO addressWO);

	void updateAddress(AddressWO addressWO);

	void deleteAddressById(int id);

	List<AddressWO> findAllAddresses();

}
