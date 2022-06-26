import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentAdmissionService {

  constructor(private httpClient:HttpClient) { }

  AddStudent(url:string,data:any):any{
    return this.httpClient.post(url,data);
  }

  AddGaurdian(url:string,data:any):any{
    return this.httpClient.post(url,data);
  }

  AddPrevious(url:string,data:any):any{
    return this.httpClient.post(url,data);
  }

  AddCurrent(url:string,data:any):any{
    return this.httpClient.post(url,data);
  }
  GetGender(url:string):any{
    return this.httpClient.get(url);
  }
  GetAdmission(url:string):any{
    return this.httpClient.get(url);
  }
  GetAdmissionbyId(url:string):any{
    return this.httpClient.get(url);
  }
  GetCountry(url:string):any{
    return this.httpClient.get(url);
  }
  GetState(url:string):any{
    return this.httpClient.get(url);
  }
  Getcities(url:string):any{
    return this.httpClient.get(url);
  }

  GenerateAdmissionNumber(url:string):any{
    return this.httpClient.get(url);
  }

}
