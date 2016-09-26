package certain.peds.repository;

import certain.peds.entity.RoundDetail;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;


@Repository
public interface RoundDetailRepository extends JpaRepository<RoundDetail,Long> {

}

