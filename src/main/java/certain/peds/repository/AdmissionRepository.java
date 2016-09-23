package certain.peds.repository;

import certain.peds.entity.Admission;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdmissionRepository extends JpaRepository<Admission, Long> {

    @Query("SELECT adm FROM Admission adm where adm.center.id = :id and " +
            "adm.icuDisDT is NULL and adm.ctnID=:ctnid")
    public Optional<Admission> findActiveAdmission(@Param("ctnid") String ctnID,
                                                   @Param("id") Long centerID);

    @Query("SELECT adm FROM Admission adm where adm.center.id = :id and adm.ctnID=:ctnid")
    public List<Admission> findExistedAdmissions(@Param("ctnid") String ctnID,
                                                 @Param("id") Long centerID);

    @Query("SELECT adm FROM Admission adm where adm.center.id = :id and adm.icuDisDT is NULL")
    public List<Admission> findCurrentAdmissions(@Param("id") Long id);

}
