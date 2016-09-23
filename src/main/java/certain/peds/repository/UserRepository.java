package certain.peds.repository;

import certain.peds.entity.User;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    public Optional<User> findByUsernameAndPassword(String uname, String pwd);

    public Optional<User> findByUsername(String uname);
}
