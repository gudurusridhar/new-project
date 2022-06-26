create  database Student
create  table StudentApplicationDetails(StudentId int primary key identity (1,1) ,
FirstName varchar(max),
LastName varchar(max),
Gender varchar(20),
DOB date,
MobileNumber bigint,
MotherTongue varchar(20),
Address varchar (max),
Country varchar(30),
State varchar(50),
City varchar(50),
AadharNumber  bigint,
Community varchar(50),
Religion varchar(50))

select *from CurrentJoiningSchoolDetails
select *from PreviousSchoolDetails
select *from AdmissionDetails

alter table CurrentJoiningSchoolDetails add AdmissionNummber  varchar(100)
alter table CurrentJoiningSchoolDetails add DateOfJoining  Date
alter table CurrentJoiningSchoolDetails add Section  char(1)



alter table PreviousSchoolDetails add ClassFrom varchar(100) 
alter table PreviousSchoolDetails add ClassTo varchar(100) 
alter table PreviousSchoolDetails add StartingYear varchar(100) 
alter table PreviousSchoolDetails add EndingYear varchar(100) 




alter table StudentApplicationDetails add IdentificationMarks varchar(200)
alter table GuardianDetails add Qualification varchar(200)
alter table PreviousSchoolDetails drop  column JoiningDate
 alter table PreviousSchoolDetails drop  column EndingDate

  alter table CurrentJoiningSchoolDetails drop  column IdentificationMarks





create table AdmissionDetails(AdmissionId int primary key identity (1,1),
AdmissionNumber varchar(30),
AdmissionDate date)

insert into AdmissionDetails values('SIC202201','2022-06-24')


select *from AdmissionDetails
select *from StudentApplicationDetails
select *from GuardianDetails
select *from PreviousSchoolDetails
select *from CurrentJoiningSchoolDetails
delete from CurrentJoiningSchoolDetails where CurrentSchoolId between 5 and 63877



create table GuardianDetails(GuardianId int primary key identity(1,1),
FirstName varchar(max),
LastName varchar(max),
Gender varchar(20),
MobileNumber bigint,
Occupation varchar (max),
Email varchar (max),
Address varchar (max),
Country varchar(max),
State varchar(50),
City varchar(50),
AadharNumber  bigint,
Relationship varchar (50),
StudentId int)

create table PreviousSchoolDetails(PreviousSchoolId int primary key identity(1,1),
NameoftheSchool varchar(max),
JoiningDate Date,
EndingDate Date,
AddressofSchool varchar(max),
Country varchar(20),
State varchar(50),
City varchar(50),
StudentId int)


create table CurrentJoiningSchoolDetails(CurrentSchoolId int primary key identity(1,1),
Class varchar (20),
Medium varchar (20),
BloodGroup varchar(20),
Caste varchar(20),
IdentificationMarks varchar(50),


)

create table Gender(GenderId int primary key identity (1,1),
GenderName varchar(50))



select *from Gender


insert into  Gender values('Others')




create table StudentCountry(CountryId int primary key identity (1,1),
CountryName varchar(max)
)

insert into Countries values('USA')
insert into States values('Texas',2)
insert into Cities values('Austin',4)

select * from States
select * from Cities
select * from Countries

create table States(StateId int primary key identity (1,1),
StateName varchar(max),
CountryId int)

create table Cities(CityId int primary key identity (1,1),
CityName varchar(max),
StateId int)







create table GuardianState(GnStateId int primary key identity (1,1),
StateName varchar(max),
GuardianId int)

create table GuardianCountry(GnCountryId int primary key identity (1,1),
CountryName varchar(max),
GuardianId int)

create table GuardianCity(GnCityId int primary key identity (1,1),
CityName varchar(max),
GuardianId int)


create table PreviousSchoolCountry(PSCountryId int primary key identity (1,1),
CountryName varchar(20),
PreviousSchoolId int)

create table PreviousSchoolState(PSStateId int primary key identity (1,1),
StateName varchar(20),
PreviousSchoolId int)


create table PreviousSchoolCity(PSCityId int primary key identity (1,1),
CityName varchar(20),
PreviousSchoolId int)

create table Medium(MediumId int primary key identity (1,1),
MediumName varchar(20),
CurrentSchoolId int)



select * from StudentApplicationDetails
-- change the data type we are converting varchar to int on country

alter table StudentApplicationDetails alter column City int
-- change the column name to Country to CountryId

sp_rename 'StudentApplicationDetails.City', 'CityId','column'


alter table GuardianDetails alter column State int

sp_rename 'GuardianDetails.State', 'StateId','column'

alter table GuardianDetails alter column Country int
sp_rename 'GuardianDetails.Country', 'CountryId','column'


alter table PreviousSchoolDetails alter column CountryId int
sp_rename 'PreviousSchoolDetails.Country','CountryId','column'


select *from  PreviousSchoolDetails

delete from  PreviousSchoolDetails where CountryId='ind'

alter table PreviousSchoolDetails alter column StateId int
sp_rename 'PreviousSchoolDetails.State','StateId','column'

alter table PreviousSchoolDetails alter column CityId int
sp_rename 'PreviousSchoolDetails.City','CityId','column'

