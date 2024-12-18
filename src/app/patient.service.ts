import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }
  private url="http://localhost:8998/api/v1/patients"
  getPatientList():Observable<Patient[]>{
    return this.http.get<Patient[]>(this.url);
  }
}
