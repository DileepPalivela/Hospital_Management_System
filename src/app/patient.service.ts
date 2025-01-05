import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }
  private url="http://localhost:8998/api/v1/patients"
  getPatientList():Observable<Patient[]>{
    return this.http.get<Patient[]>(this.url);
  }
  deletePatient(id:number):Observable<object>{
    return this.http.delete<Appointment>("http://localhost:8998/api/v1/patients"+"/"+id);
  }
  createPatient(patient:Patient):Observable<Patient>{
    return this.http.post<Patient>("http://localhost:8998/api/v1/insert",patient);
  }
}
