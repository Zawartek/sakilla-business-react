package isep.web.sakila.webapi.service;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import isep.web.sakila.dao.repositories.StoreRepository;
import isep.web.sakila.jpa.entities.Store;
import isep.web.sakila.webapi.model.StoreWO;


@Service("storeService")
@Transactional
public class StoreServiceImpl implements StoreService {

	private static final Log	log	= LogFactory.getLog(StoreServiceImpl.class);
	
	@Autowired
	private StoreRepository storeRepository;

	@Override
	public StoreWO findById(int id) {
		log.debug(String.format("Looking for store by Id %s", id));
		Store store = storeRepository.findOneByStoreId(id);

		if (store != null)
		{
			return new StoreWO(store);
		}
		return null;
	}

	@Override
	public void saveStore(StoreWO storeWO) {
	}

	@Override
	public void updateStore(StoreWO storeWO) {
	}

	@Override
	public void deleteStoreById(int id) {
		
	}

	@Override
	public List<StoreWO> findAllStores() {
		return null;
	}

}
