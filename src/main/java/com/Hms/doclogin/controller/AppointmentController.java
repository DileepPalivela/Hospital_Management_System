package com.Hms.doclogin.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.management.AttributeNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.Hms.Entity.Patient;
import com.Hms.doclogin.Repository.AppointmentRepository;
import com.Hms.doclogin.entity.Appointment;
import com.Hms.repository.PatientRepository;
@RestController
@RequestMapping("/api/v2")
@CrossOrigin(origins = "http://localhost:4200")
public class AppointmentController {

    private final AppointmentRepository appointmentRepository;

    @Autowired
    
    public AppointmentController(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    @PostMapping("/insert")
    public Appointment createAppointment(@RequestBody Appointment appointment) {
        return appointmentRepository.save(appointment);
    }

    @GetMapping("/appointments")
    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }
//    @GetMapping("/appointments/{id}")
//	public ResponseEntity<Appointment> getAppointmentById(@PathVariable Long id) throws AttributeNotFoundException {
//		
//		Appointment appointment = appointmentRepository.findById(id)
//				.orElseThrow(() -> new AttributeNotFoundException("ABCD" + id));
//		
//		return ResponseEntity.ok(appointment);}
	
    
	@DeleteMapping("/appointments/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteAppointment(@PathVariable Long id){
		
		Appointment appointment = appointmentRepository.findById(id)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Appointment not found with id " + id));
		
		appointmentRepository.delete(appointment);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
}
}
