using School_Admission_Form.BusinessLogic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace School_Admission_Form.Controllers
{
    public class StudentAdmissionController : ApiController { 
        StudentAdmissionBusinessLogic studentAdmissionBusinessLogic =new StudentAdmissionBusinessLogic();
        [Route("api/AddStudent")]
        [HttpPost]
        public int AddStudentDetails(StudentApplicationDetail studentApplicationDetail)
        {
            return studentAdmissionBusinessLogic.AddStudentDetails(studentApplicationDetail);
    }
        [Route("api/AddGuardianDetail")]
        [HttpPost]
        public string AddGuardianDetail(GuardianDetail guardianDetail)
    {
        return studentAdmissionBusinessLogic.AddStudentDetails(guardianDetail);
    }
        [Route("api/AddPreviousSchoolDetail")]
        [HttpPost]
        public string AddPreviousSchoolDetail(PreviousSchoolDetail previousSchoolDetail)
    {
        return studentAdmissionBusinessLogic.AddStudentDetails(previousSchoolDetail);
    }
        [Route("api/AddSCurrentJoiningSchoolDetail")]
        [HttpPost]
        public string AddSCurrentJoiningSchoolDetail(CurrentJoiningSchoolDetail currentJoiningSchoolDetail)
    {
        return studentAdmissionBusinessLogic.AddStudentDetails(currentJoiningSchoolDetail);
    }

        [Route("api/GetGenders")]
        [HttpGet]
        public List<Gender> GetGenders()
        {
            return studentAdmissionBusinessLogic.GetGenders();
        }
        [Route("api/GetAdmission")]
        [HttpGet]
        public List<AdmissionDetail> GetAdmissionDetails()
        {
            return studentAdmissionBusinessLogic.GetAdmissionDetails();
        }
        [Route("api/GetAdmissionbyId/{Id}")]
        [HttpGet]
        public AdmissionDetail GetAdmissionDetailsbyId(int Id)
        {
            return studentAdmissionBusinessLogic.GetAdmissionDetailsbyId(Id);
        }
        [Route("api/GetCountries")]
        [HttpGet]
        public List<Country> GetCountries()
        {
            return this.studentAdmissionBusinessLogic.GetCountries();
        }
        [Route("api/GetStates/{CountryId}")]
        [HttpGet]
        public List<State> GetStates(int CountryId)
        {
            return studentAdmissionBusinessLogic.GetStates(CountryId);
        }
        [Route("api/GetCities/{StateId}")]
        [HttpGet]
        public List<City> GetCities(int StateId)
        {
            return studentAdmissionBusinessLogic.GetCities(StateId);
        }
        [Route("api/GenerateAdminssionNumber/{Studentid}")]
        [HttpGet]
        public string GenerateAdminssionNumber(int Studentid)
        {
            return studentAdmissionBusinessLogic.GenerateAdminssionNumber(Studentid);
        }
    }
}

