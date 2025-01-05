import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicine } from './medicine';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http:HttpClient) {}
    private baseurl="http://localhost:8998/api/v3/medicine";

  getMedicines():Observable<Medicine[]>{
    return this.http.get<Medicine[]>(this.baseurl);

  }
  deleteMedicine(id:number):Observable<object>{
    return this.http.delete<Medicine>(this.baseurl+'/'+id);
  }
}
