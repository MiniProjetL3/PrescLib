import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from '../model/service';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  private url: string = "http://localhost:8080";
  private services: any;


  constructor(private http: HttpClient) { }

  getServices(): Observable<any> {
    this.services = this.http.get(this.url + "/services");
    console.log("la liste:" + this.services)
    return this.services;

  }

  AffectUserToService(idU: number, idS: number) {
    return this.http.get(this.url + "/user/" + idU + "/service/" + idS)

  }
  getAllServices(page: number, size: number) {
    return this.http.get(this.url + "/AllServices?page=" + page + "&size=" + size)

  }
  addService(service: Service) {
    console.log("test" + service);
    return this.http.post(this.url + "/services", service);
  }

  //getOneServiceById
  getOneServiceById(id: number): Observable<Service> {
    console.log("get")
    return this.http.get<Service>(this.url + "/services/" + id)
  }

  editService(service: Service, id: number) {
    console.log("edit")
    return this.http.put(this.url + "/services/" + id, service);
  }

  //archiveService
  archiveService(id: number): Observable<any> {
    return this.http.get(`${this.url}/archiveService/${id}`, { responseType: 'text' });
  }

  enableService(id: number): Observable<any> {
    return this.http.get(`${this.url}/enableService/${id}`, { responseType: 'text' });
  }

}
