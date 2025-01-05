package com.Hms.doclogin.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Hms.doclogin.entity.Medicine;
@Repository
public interface MedicineRepository extends JpaRepository<Medicine,Long> {

}
