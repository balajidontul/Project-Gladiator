import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personaldetails } from './personaldetails';
import { Familydetails } from './familydetails';
import { Coursedetails } from './coursedetails';
import {NgoDetails} from './ngodetails';
import {NgoCourseDetails} from './ngocoursedetails';


@Injectable({
  providedIn: 'root'
  
})
export class StepService {

  
  private baseURL = "http://localhost:9000/rest/api/";
  constructor(private httpClient:HttpClient) {}

  PushallPersonalDetails(personaldetail : Personaldetails):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}personaldetail/1` , personaldetail);
    console.log(personaldetail);
  }

  PushallFamilyDetails(familydetail : Familydetails):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}familydetail/1` , familydetail);
    console.log(familydetail);

  }
  // PushallCourseDetails(coursedetails : Coursedetails):Observable<Object>{
  //   return this.httpClient.post(`${this.baseURL}coursedetail` , coursedetails);
  //   console.log(coursedetails);

  // }

// nisha
  getallcourses():Observable<Coursedetails[]>{
    return this.httpClient.get<Coursedetails[]>(`${this.baseURL}courses`);
  }

  getAllStatus(): Observable<Coursedetails[]> {
    return this.httpClient.get<Coursedetails[]>(`${this.baseURL}courses`);
  }

  getAllNgos(): Observable<NgoDetails[]> {
    return this.httpClient.get<NgoDetails[]>(`${this.baseURL}Organisation`)
  }

  getAllNgocourses(): Observable<NgoCourseDetails[]> {
    return this.httpClient.get<NgoCourseDetails[]>(`${this.baseURL}show-ngo-course`)
  }


}
