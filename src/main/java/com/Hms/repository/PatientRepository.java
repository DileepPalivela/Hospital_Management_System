package com.Hms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Hms.Entity.Patient;
@Repository
public interface PatientRepository extends JpaRepository<Patient,Long> {

}
