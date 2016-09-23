package certain.peds.repository;

import certain.peds.entity.RoundDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoundDetailRepository extends JpaRepository<RoundDetail, Long> {

}

