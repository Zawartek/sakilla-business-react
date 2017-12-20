package isep.web.sakila.webapi.config.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

import isep.web.sakila.jpa.entities.Staff;
import isep.web.sakila.webapi.service.AuthService;

@Component
public class TokenAuthenticationProvider implements AuthenticationProvider {

    @Autowired
    AuthService authService;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        TokenBasedAuthentication auth = (TokenBasedAuthentication) authentication;
        Staff user = (Staff) auth.getPrincipal();
        if (authService.isTokenExpired(user)) {
            throw new BadCredentialsException("The token has expired");
        }
        authService.updateTokenExpiration(user);
        return auth;
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return true;
    }

}
