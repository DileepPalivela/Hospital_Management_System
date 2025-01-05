package com.Hms.doclogin.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Hms.doclogin.entity.Appointment;
@Repository
public interface AppointmentRepository extends JpaRepository<Appointment,Long>{

}
