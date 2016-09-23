package certain.peds.entity;

import certain.peds.config.CustomDateDeserializer;
import certain.peds.config.CustomDateSerializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;
import java.util.Date;

@Entity
@Table(name = "certain_peds_rd_report")
public class Round implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "ctn_id")
    private String ctnID;

    @Column(name = "rd_dt")
    @Temporal(TemporalType.DATE)
    @JsonDeserialize(using = CustomDateDeserializer.class)
    @JsonSerialize(using = CustomDateSerializer.class)
    private Date rdDate;

    @Column(name = "sedation_break")
    private String sedationBreak = "";

    @Column(name = "delirium")
    private String delirium = "";

    @Column(name = "pain")
    private String pain = "";

    @Column(name = "cvMeds")
    private String cvMeds = "";

    @Column(name = "lpv")
    private String lpv = "";

    @Column(name = "ert")
    private String ert = "";

    @Column(name = "vap")
    private String vap = "";

    @Column(name = "fluid")
    private String fluid = "";

    @Column(name = "electrolyte")
    private String electrolyte = "";

    @Column(name = "glucose")
    private String glucose = "";

    @Column(name = "bowel")
    private String bowel = "";

    @Column(name = "sup")
    private String sup = "";

    @Column(name = "nutrition")
    private String nutrition = "";

    @Column(name = "dvt")
    private String dvt = "";

    @Column(name = "transfusion")
    private String transfusion = "";

    @Column(name = "skin")
    private String skin = "";

    @Column(name = "meds")
    private String meds = "";

    @Column(name = "devices")
    private String devices = "";

    @Column(name = "pt")
    private String pt = "";

    @Column(name = "social")
    private String social = "";

    @OneToOne
    @JoinColumn(name = "roundDetail")
    private RoundDetail rdetail;

    @ManyToOne
    @JoinColumn(name = "center")
    private Center center;

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

    public Date getRdDate() {
        return rdDate;
    }

    public void setRdDate(Date rdDate) {
        this.rdDate = rdDate;
    }

    public String getSedationBreak() {
        return sedationBreak;
    }

    public void setSedationBreak(String sedationBreak) {
        this.sedationBreak = sedationBreak;
    }

    public String getDelirium() {
        return delirium;
    }

    public void setDelirium(String delirium) {
        this.delirium = delirium;
    }

    public String getPain() {
        return pain;
    }

    public void setPain(String pain) {
        this.pain = pain;
    }

    public String getCvMeds() {
        return cvMeds;
    }

    public void setCvMeds(String cvMeds) {
        this.cvMeds = cvMeds;
    }

    public String getLpv() {
        return lpv;
    }

    public void setLpv(String lpv) {
        this.lpv = lpv;
    }

    public String getErt() {
        return ert;
    }

    public void setErt(String ert) {
        this.ert = ert;
    }

    public String getVap() {
        return vap;
    }

    public void setVap(String vap) {
        this.vap = vap;
    }

    public String getFluid() {
        return fluid;
    }

    public void setFluid(String fluid) {
        this.fluid = fluid;
    }

    public String getElectrolyte() {
        return electrolyte;
    }

    public void setElectrolyte(String electrolyte) {
        this.electrolyte = electrolyte;
    }

    public String getGlucose() {
        return glucose;
    }

    public void setGlucose(String glucose) {
        this.glucose = glucose;
    }

    public String getBowel() {
        return bowel;
    }

    public void setBowel(String bowel) {
        this.bowel = bowel;
    }

    public String getSup() {
        return sup;
    }

    public void setSup(String sup) {
        this.sup = sup;
    }

    public String getNutrition() {
        return nutrition;
    }

    public void setNutrition(String nutrition) {
        this.nutrition = nutrition;
    }

    public String getDvt() {
        return dvt;
    }

    public void setDvt(String dvt) {
        this.dvt = dvt;
    }

    public String getTransfusion() {
        return transfusion;
    }

    public void setTransfusion(String transfusion) {
        this.transfusion = transfusion;
    }

    public String getSkin() {
        return skin;
    }

    public void setSkin(String skin) {
        this.skin = skin;
    }

    public String getMeds() {
        return meds;
    }

    public void setMeds(String meds) {
        this.meds = meds;
    }

    public String getDevices() {
        return devices;
    }

    public void setDevices(String devices) {
        this.devices = devices;
    }

    public String getPt() {
        return pt;
    }

    public void setPt(String pt) {
        this.pt = pt;
    }

    public String getSocial() {
        return social;
    }

    public void setSocial(String social) {
        this.social = social;
    }

    public RoundDetail getRdetail() {
        return rdetail;
    }

    public void setRdetail(RoundDetail rdetail) {
        this.rdetail = rdetail;
    }

    public Center getCenter() {
        return center;
    }

    public void setCenter(Center center) {
        this.center = center;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Round r = (Round) o;
        if (r.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, r.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }


}
