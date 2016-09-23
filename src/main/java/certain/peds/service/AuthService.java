package certain.peds.service;


import certain.peds.entity.*;
import certain.peds.repository.*;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;


@Service
@Transactional
public class AuthService {

    @Autowired
    private CenterRepository centerRepo;

    @Autowired
    private UserRepository userRepo;


    /**
     * Get one center by hospital token.
     *
     * @param hospToken of the entity
     * @return the entity
     */
    @Transactional(readOnly = true)
    public Optional<Center> findCenter(String hospToken) {
        Optional<Center> c = centerRepo.findByHospitalToken(hospToken);
        return c;
    }

    /**
     * Get User by login.
     *
     * @param username, password
     * @return the user entity
     */
    @Transactional(readOnly = true)
    public Optional<User> userAuthentication(String uname, String pwd) {
        final String strPssword = "fantasticlei";
        EncryptionService.setKey(strPssword);
        EncryptionService.encrypt(pwd);
        String npwd = EncryptionService.getEncryptedString();
        Optional<User> u = userRepo.findByUsernameAndPassword(uname, npwd);
        return u;
    }

    /**
     * create new user.
     *
     * @param user object
     * @return the user entity
     */
    public User userRegistration(User usr) {
        //user already existed
        Optional<User> ua = userRepo.findByUsername(usr.getUsername());
        if (ua.isPresent()) {
            usr.setUsername("already existed");
            return usr;
        } else {
            final String strPssword = "fantasticlei";
            EncryptionService.setKey(strPssword);
            EncryptionService.encrypt(usr.getPassword());
            String npwd = EncryptionService.getEncryptedString();
            usr.setPassword(npwd);
            User u = userRepo.save(usr);
            return u;
        }

    }


}
