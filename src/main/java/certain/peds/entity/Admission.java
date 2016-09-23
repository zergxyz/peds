package certain.peds.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;
import java.util.Date;

import certain.peds.config.CustomDateDeserializer;
import certain.peds.config.CustomDateSerializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

/**
 * A Admission.
 */
@Entity
@Table(name = "certain_peds_adm_demo")
public class Admission implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "ctn_id")
    private String ctnID;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "middle_name")
    private String middleName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "date_of_birth")
    @Temporal(TemporalType.TIMESTAMP)
    @JsonDeserialize(using = CustomDateDeserializer.class)
    @JsonSerialize(using = CustomDateSerializer.class)
    private Date dob;

    @Column(name = "gender")
    private String gender;

    @Column(name = "blood_type")
    private String bloodType;

    @Column(name = "height")
    private String height;

    @Column(name = "weight")
    private String weight;

    @Column(name = "user_admit")
    private String userAdmit;

    @Column(name = "icu_adm_dt")
    @Temporal(TemporalType.TIMESTAMP)
    @JsonDeserialize(using = CustomDateDeserializer.class)
    @JsonSerialize(using = CustomDateSerializer.class)
    private Date icuAdmDT;

    @Column(name = "icu_dis_dt")
    @Temporal(TemporalType.TIMESTAMP)
    @JsonDeserialize(using = CustomDateDeserializer.class)
    @JsonSerialize(using = CustomDateSerializer.class)
    private Date icuDisDT;

    @Column(name = "user_discharge")
    private String userDischarge;

    @Column(name = "code_status")
    private String codeStatus;

    @ManyToOne
    @JoinColumn(name = "center")
    private Center center;

    public Center getCenter() {
        return center;
    }

    public void setCenter(Center center) {
        this.center = center;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCtnID() {
        return ctnID;
    }

    public void setCtnID(String ctnID) {
        this.ctnID = ctnID;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getBloodType() {
        return bloodType;
    }

    public void setBloodType(String bloodType) {
        this.bloodType = bloodType;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }


    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getUserAdmit() {
        return userAdmit;
    }

    public void setUserAdmit(String userAdmit) {
        this.userAdmit = userAdmit;
    }

    public Date getIcuAdmDT() {
        return icuAdmDT;
    }

    public void setIcuAdmDT(Date icuAdmDT) {
        this.icuAdmDT = icuAdmDT;
    }

    public Date getIcuDisDT() {
        return icuDisDT;
    }

    public void setIcuDisDT(Date icuDisDT) {
        this.icuDisDT = icuDisDT;
    }

    public String getUserDischarge() {
        return userDischarge;
    }

    public void setUserDischarge(String userDischarge) {
        this.userDischarge = userDischarge;
    }

    public String getCodeStatus() {
        return codeStatus;
    }

    public void setCodeStatus(String codeStatus) {
        this.codeStatus = codeStatus;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Admission admission = (Admission) o;
        if (admission.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, admission.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }
}
