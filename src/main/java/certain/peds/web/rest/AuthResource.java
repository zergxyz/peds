package certain.peds.web.rest;


import certain.peds.entity.*;
import certain.peds.service.AuthService;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

/**
 * REST controller for managing Admission.
 */
@RestController
@RequestMapping("/api")

public class AuthResource {

    @Autowired
    private AuthService authServ;

    /**
     * GET  /center/:hospToken : get the center information by hosptoken
     *
     * @param hospToken
     * @return the ResponseEntity with status 200 (OK) and with body the center,
     * or with status 404 (Not Found)
     */
    @RequestMapping(value = "/center",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Center> getCenter(@RequestBody Center cc) {
        Optional<Center> c = authServ.findCenter(cc.getHospitalToken());
        return c
                .map(result -> new ResponseEntity<>(
                        result,
                        HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * POST  /user : user authentication
     *
     * @return the ResponseEntity with status 200 (OK) and with body the center,
     * or with status 404 (Not Found)
     * @param: user object (uname, pwd)
     */
    @RequestMapping(value = "/user/authenticate",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> authenticate(@RequestBody User u) {
        Optional<User> usr = authServ.userAuthentication(u.getUsername(), u.getPassword());
        return usr
                .map(result -> new ResponseEntity<>(
                        result,
                        HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * POST  /user : user registration
     *
     * @return the ResponseEntity with status 200 (OK) and with body the center,
     * @param: user object
     */
    @RequestMapping(value = "/user/register",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> register(@RequestBody User u) {
        User usr = authServ.userRegistration(u);
        return new ResponseEntity<>(
                usr,
                HttpStatus.OK);
    }
}

