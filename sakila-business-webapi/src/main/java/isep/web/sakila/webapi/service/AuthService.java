package isep.web.sakila.webapi.service;

import isep.web.sakila.jpa.entities.Staff;
import isep.web.sakila.webapi.model.form.FormLogin;

import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service("authService")
@Transactional
public class AuthService {

	public String login(FormLogin form) {
		if (form.getUsername().equals("admin")
				&& form.getPassword().equals("adminPwd")) {
			return UUID.randomUUID().toString();
		}
		return null;
	}

	public boolean isTokenExpired(Staff user) {
		return false;
	}

	public Staff updateTokenExpiration(Staff user) {
        return user;
		
	}

}
