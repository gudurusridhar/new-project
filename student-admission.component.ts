import { Component, OnInit } from '@angular/core';
import { generate } from 'rxjs';
import { StudentAdmissionService } from '../student-admission.service';
export class StudentDetails
{
  StudentId!:number
  FirstName!:String
  LastName!:String
  Gender!:string
  DOB!:string
  MobileNumber!:number
  Age!:number
  IdentificationMarks!:string;
  Nationality!:string
  Mothertongue!:string
  Adress!:string
  CountryId!:number
  StateId!:number
  CityId!:number
  Community!:string
  Religion!:string

}
export class Gender{
  GenderId!:number;
  GenderName!:string;

}


export class  GaurdianDetails
{
  GaurdianId!:number
  FirstName!:String
  LastName!:String
  Gender!:string
  Qualification!:string
  MobileNumber!:number
  Occupation!:string
  Email!:string
  Adress!:string
  CountryId!:number
StateId!:number
CityId!:number
AadharNumber!:number
  Community!:string
  Relationship!:string
  StudentId!:number
}
export  class PreviousSchoolDetails
{
  PreviousSchoolId!:number
NameoftheSchool!:string;
StartYear!:string
EndYear!:string 
CountryId!:number
StateId!:number
CityId!:number
StudentId!:number
DurationYear!:string
ClassFrom!:string
ClassTo!:string
AddressofSchool!:string



}
export class Countries {
  CountryId!:number;
  CountryName!:number;
}

export class States {
  StateId!:number;
  StateName!:number;
  CountryId!:number;

}
export class Cities {
  CityId!:number;
  CityName!:number;
  StateId!:number;

}
export class CurrentJoiningSchoolDetails
{
  Class!:string
Medium!:string
BloodGroup!:string
Caste!:string
IdentificationMarks!:string
StudentId!:number
DateOfJoin!:Date
AdmissionNummber!:string
Section!:string

}

export class Admissiondetails
{
  
  AdmissionId!:number
  AdmissionNumber!:string
  AdmissionDate!:Date
}
@Component({
  selector: 'app-student-admission',
  templateUrl: './student-admission.component.html',
  styleUrls: ['./student-admission.component.css']
})
export class StudentAdmissionComponent implements OnInit {

  constructor(private studentAdmissionService:StudentAdmissionService) { }
url:string="https://localhost:44371/api/";
studentDetail:StudentDetails=new  StudentDetails();
studentDetails:StudentDetails[]=[];
gaurdianDetail:GaurdianDetails=new GaurdianDetails();
gaurdianDetails:GaurdianDetails[]=[];
previousSchoolDetail:PreviousSchoolDetails=new PreviousSchoolDetails();
previousSchoolDetails:PreviousSchoolDetails[]=[];
currentJoiningSchoolDetail:CurrentJoiningSchoolDetails=new CurrentJoiningSchoolDetails();
currentJoiningSchoolDetails:CurrentJoiningSchoolDetails[]=[]
gender:Gender=new Gender();
genders:Gender[]=[];
admission:Admissiondetails=new Admissiondetails();
admissionlist:Admissiondetails[]=[];
country:Countries=new Countries();
countries:Countries[]=[];
state:States=new States();
states:States[]=[];
city:Cities=new Cities();
cities:Cities[]=[];

studentId!:number
admissionNummber!:string


ngOnInit(): void {
 this. GetGender()
 
this.GetCountry()


  }

  AddStudent():void{
  // this. generateAdmissiondetails(this.admission.AdmissionId)
debugger
    
    this.studentAdmissionService.AddStudent(this.url+'AddStudent',this.studentDetail).subscribe((data:any)=>{
     // this.admission=Add.StudentId;
      debugger
      
        this.studentId=data;
        this.OnGenerateAdmissionNmmber();
     debugger
 })
  }


  OnGenerateAdmissionNmmber(){
    debugger
    if(this.studentId !=null )
  
    this.studentAdmissionService.GenerateAdmissionNumber(this.url+'GenerateAdminssionNumber/'+this.studentId).subscribe((data:any)=>{
      
     debugger 
this.admissionNummber=data;
this.AddCurrent();

    })
  }

  AddGaurdian():void{
    this.studentAdmissionService.AddGaurdian(this.url+'AddGuardianDetail',this.gaurdianDetail).subscribe((response:any)=>{
if(response=="data added")
{
  alert('data added')
}
else{
  alert('data not added')
}
 });
}

AddPrevious():void{
  this.studentAdmissionService.AddPrevious(this.url+'AddPreviousSchoolDetail',this.previousSchoolDetail).subscribe((response:any)=>{
if(response=="data added")
{
alert('data added')
}
else{
alert('data not added')
}
});
}

AddCurrent():void{
 //this. GetAdmission()
 debugger
 
 this.currentJoiningSchoolDetail.AdmissionNummber=this.admissionNummber
 debugger
  this.studentAdmissionService.AddCurrent(this.url+'AddSCurrentJoiningSchoolDetail',this.currentJoiningSchoolDetail).subscribe((response:any)=>{
if(response=="data saved")
{
alert('data added')

}
else{
alert('data not added') 
}
});
}
GetGender():void{
  this.studentAdmissionService.GetGender(this.url+'GetGenders').subscribe((a:any)=>{
    this.genders=a;
  }
  )
}
Onsave():void{ 
  
this.AddStudent();
  this.AddGaurdian();
this.AddPrevious();
this.AddCurrent();
//this.GetAdmission();
//this.GetAdmissionbyId(this.admission.AdmissionId);

}
GetCountry():void{
  this.studentAdmissionService.GetCountry(this.url+'GetCountries').subscribe((b:any)=>{
    this.countries=b;
  })
}

GetState(CountryId:any):void{
  this.studentAdmissionService.GetState(this.url+'GetStates/'+CountryId).subscribe((b:any)=>{
    this.states=b;
  })
}
Getcities(StateId:any):void{
  this.studentAdmissionService.Getcities(this.url+'GetCities/'+StateId).subscribe((b:any)=>{
    this.cities=b;
  })
}
GetAdmission():void{
  this.studentAdmissionService.GetAdmission(this.url+'GetAdmission').subscribe((c:any)=>{
    this.admissionlist=c;
  })
}
GetAdmissionbyId(Id:number):any{

  return this.studentAdmissionService.GetAdmissionbyId(this.url+'GetAdmissionbyId'+Id).subscribe((c:any)=>{
    this.admission=c;
  }) ;
}
generateAdmissiondetails(StudentId:number):any{
  if(StudentId>0){
  return 'sic'+'2022'+StudentId;
}
  else
  {
  return null;
  }
}

}


