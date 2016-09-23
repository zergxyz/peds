package certain.peds.repository;

import certain.peds.entity.Center;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CenterRepository extends JpaRepository<Center,Long>  {

    public Optional<Center> findByHospitalToken(String hospToken);
}