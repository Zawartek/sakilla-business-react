package isep.web.sakila.webapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import isep.web.sakila.webapi.model.form.FormLogin;
import isep.web.sakila.webapi.service.AuthService;

@RestController
@RequestMapping(value = "/login")
public class StaffRestController {

    @Autowired
    private AuthService authService;

    /**
     * Connexion et récupération d'un token
     *
     * @param form
     * @return
     * @throws Exception
     */
    @PostMapping
    public String login(@RequestBody FormLogin form) throws Exception {
        return authService.login(form);
    }
}