import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url = "http://localhost:8080/api/emp"

  constructor(private http: HttpClient) { }

  getStaff(employee: any): Observable<Employee[]> {
    return this.http.post<Employee[]>(this.url + "/staff", employee)
  }

}
