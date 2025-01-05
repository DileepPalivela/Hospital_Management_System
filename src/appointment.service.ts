import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './app/appointment';
import { Patient } from './app/patient';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http:HttpClient) { }
private url:string="http://localhost:8998/api/v2/insert";
getAllAppointments():Observable<Appointment[]>{
  return this.http.get<Appointment[]>("http://localhost:8998/api/v2/appointments");
}
createAppointment(appointment:Appointment):Observable<Appointment>{
  return this.http.post<Appointment>(this.url,appointment);
}
deleteAppointments(id: number): Observable<object> {
  return this.http.delete<Patient>("http://localhost:8998/api/v2/appointments"+"/"+id);
}

}
