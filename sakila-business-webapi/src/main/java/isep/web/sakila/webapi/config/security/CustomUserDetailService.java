package isep.web.sakila.webapi.config.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import isep.web.sakila.dao.repositories.StaffRepository;

@Service
public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    private StaffRepository staffRepository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		return staffRepository.findOneByUsername(username);
	}


}
