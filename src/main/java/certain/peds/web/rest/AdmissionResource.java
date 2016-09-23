package certain.peds.web.rest;

import certain.peds.entity.Admission;
import certain.peds.service.AdmissionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;


/**
 * REST controller for managing Admission.
 */
@RestController
@RequestMapping("/api")
public class AdmissionResource {

    @Autowired
    private AdmissionService admissionService;

    /**
     * POST  /admissions : save a new admission.
     *
     * @param admission the admission to create
     * @return the ResponseEntity with status 201 (Created) and with body the new admission, or with status 400 (Bad Request) if the admission has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @RequestMapping(value = "/admissions",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Admission> createAdmission(@RequestBody Admission admission) {
        Admission result = admissionService.saveAdmission(admission);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    /**
     * POST  /admissions/readmit : readmit the patient.
     *
     * @param admission the admission to save
     * @return the ResponseEntity with status 201 (Created) and with body the new admission, or with status 400 (Bad Request) if the admission has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @RequestMapping(value = "/admissions/readmit",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Admission> reAdmission(@RequestBody Admission admission) {
        Admission result = admissionService.reAdmit(admission);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    /**
     * GET  /admissions/:id : get center admissions based on center id.
     *
     * @param id of the center
     * @return the ResponseEntity with status 200 (OK) and with body the admissions, or with status 404 (Not Found)
     */
    @RequestMapping(value = "/admissions/{id}",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getAdmission(@PathVariable Long id) {
        List<Admission> adms = admissionService.findCenterAdmissions(id);
        return new ResponseEntity<>(adms, HttpStatus.OK);
    }

    /**
     * POST  /admissions/discharge : discharge an existing admission.
     *
     * @param admission to discharge
     * @return the ResponseEntity with status 200 (OK) and with body the updated admission,
     * or with status 400 (Bad Request) if the admission is not valid,
     */
    @RequestMapping(value = "/admissions/discharge",
            method = RequestMethod.POST,
            produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Admission> dischargeAdmission(@RequestBody Admission admission) {

        if (admission.getId() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
        Admission result = admissionService.dischargeAdmission(admission);
        return ResponseEntity.ok()
                .body(result);
    }


}

