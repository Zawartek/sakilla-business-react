package isep.web.sakila.webapi.model;

import isep.web.sakila.jpa.entities.Inventory;

public class InventoryWO extends WebObject {

	/**
	 * 
	 */
	private static final long serialVersionUID = 8022142672944572088L;
	
	protected int inventoryId;
	
	protected StoreWO store;
	protected FilmWO film;
	
	InventoryWO() {
		super();
	}
	
	public InventoryWO(int inventoryId)
	{
		this();
		this.inventoryId = inventoryId;
	}
	
	public InventoryWO(final Inventory inventory) {
		this();
		this.inventoryId = inventory.getInventoryId();
		this.store = new StoreWO(inventory.getStore());
		this.film = new FilmWO(inventory.getFilm());
	}

	public int getInventoryId() {
		return inventoryId;
	}

	public void setInventoryId(int inventoryId) {
		this.inventoryId = inventoryId;
	}

	public StoreWO getStore() {
		return store;
	}

	public void setStore(StoreWO storeWO) {
		this.store = storeWO;
	}

	public FilmWO getFilm() {
		return film;
	}

	public void setFilm(FilmWO filmWO) {
		this.film = filmWO;
	}
	
	public String toString() {
		return "Inventory [id=" + this.inventoryId + 
				", storeId=" + this.getStore().getStoreId() + 
				", filmId=" + this.getFilm().getFilmId() + "]";
	}	
}
