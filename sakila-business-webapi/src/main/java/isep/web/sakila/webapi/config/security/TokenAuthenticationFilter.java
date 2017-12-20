package isep.web.sakila.webapi.config.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.filter.OncePerRequestFilter;

import isep.web.sakila.webapi.service.AuthService;

public class TokenAuthenticationFilter extends OncePerRequestFilter {

    private final String TOKEN_HEADER = "Authorization";
    private final String TOKEN_HEADER_PREFIX = "Bearer ";

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private AuthService authService;

    private String getToken(HttpServletRequest req) {
        String authHeader = req.getHeader(TOKEN_HEADER);
        if (authHeader != null && authHeader.startsWith(TOKEN_HEADER_PREFIX)) {
            return authHeader.substring(7);
        }
        return null;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain) throws ServletException, IOException {
        String authToken = getToken(req);

        if (authToken != null) {
            // Get user

            UserDetails userDetails = userDetailsService.loadUserByUsername(authToken);
            if (userDetails != null) {

                TokenBasedAuthentication authentication = new TokenBasedAuthentication(userDetails);
                authentication.setToken(authToken);

                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        }


        chain.doFilter(req, res);
    }
}