package com.Hms.doclogin.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.management.AttributeNotFoundException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.Hms.Entity.Patient;
import com.Hms.doclogin.Repository.MedicineRepository;
import com.Hms.doclogin.entity.Appointment;
import com.Hms.doclogin.entity.Medicine;

@RestController
@RequestMapping("/api/v3")
@CrossOrigin(origins = "http://localhost:4200")
public class MedicineController {
	public MedicineController(MedicineRepository medicineRepository) {
		super();
		this.medicineRepository = medicineRepository;
	}

	private MedicineRepository medicineRepository;
	
	@PostMapping("/insert")
	public Medicine createMedicine(@RequestBody Medicine medicine) {
		return medicineRepository.save(medicine);
	}
	@GetMapping("/medicine")
    public List<Medicine> getAllMedicine() {
        return medicineRepository.findAll();
    }
	@DeleteMapping("/medicine/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteMedicine(@PathVariable Long id){
		
		Medicine medicine = medicineRepository.findById(id)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Medicine not found with id " + id));
		
		medicineRepository.delete(medicine);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);

	}
	
	
	@GetMapping("medicine/{id}")
	public ResponseEntity<Medicine> getMedicineById(@PathVariable long id ) throws AttributeNotFoundException{
		
		
	Medicine medicine=medicineRepository.findById(id).orElseThrow(()-> new AttributeNotFoundException("Medicine not Found with id- "+id));
	
	return ResponseEntity.ok(medicine);
		
    }
	
	@PutMapping("/medicine/{id}")
    public   ResponseEntity<Medicine> getMedicineById(@PathVariable Long id,@RequestBody Medicine medicineDetails){
 	   
 	   Medicine medicine = medicineRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Medicine not found with id " + id));
 	  medicine.setDrugname(medicineDetails.getDrugname() );
 	 medicine.setStock(medicineDetails.getStock() );
 	
 	medicineRepository.save(medicine);
         return ResponseEntity.ok(medicine);
    }
}
	
	

