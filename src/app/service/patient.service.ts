import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../model/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  public url: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }


  getPatients(motClet: string, page: number, size: number) {
    return this.http.get(this.url + "/searchPatient?mc=" + motClet + "&page=" + page + "&size=" + size)

  }

  searchPatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(this.url + "/patients/" + id)
  }

  servicesHospByPatient(idU: number, page: number, size: number) {
    return this.http.get(this.url + "/serviceHospByPatientt?id=" + idU + "&page=" + page + "&size=" + size)

  }
  exitPatient(id: number): Observable<any> {
    return this.http.delete(`${this.url}/exitPatient/${id}`, { responseType: 'text' });
  }

  addPatient(patient: Patient) {
    return this.http.post(this.url + "/patients", patient);
  }

  editPatient(patient: Patient, id: number) {
    return this.http.put(this.url + "/patients/" + id, patient);
  }

}
