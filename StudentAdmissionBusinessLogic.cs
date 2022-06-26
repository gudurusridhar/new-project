using School_Admission_Form.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace School_Admission_Form.BusinessLogic
{
    public class StudentAdmissionBusinessLogic
    {
        StudentAdmissionRepository studentAdmissionRepository = new StudentAdmissionRepository();
        public int AddStudentDetails(StudentApplicationDetail studentApplicationDetail)
        {
            return studentAdmissionRepository.AddStudentDetails(studentApplicationDetail);
        }
        public string AddStudentDetails(  GuardianDetail guardianDetail)
        {
            return studentAdmissionRepository.AddStudentDetails(guardianDetail);
        }
        public string AddStudentDetails(PreviousSchoolDetail previousSchoolDetail)
        {
            return studentAdmissionRepository.AddStudentDetails(previousSchoolDetail);
        }
        public string AddStudentDetails(CurrentJoiningSchoolDetail currentJoiningSchoolDetail)
        {
            return studentAdmissionRepository.AddStudentDetails(currentJoiningSchoolDetail);
        }
        public List<Gender> GetGenders()
        {
            return studentAdmissionRepository.GetGenders();
        }
        public List<AdmissionDetail> GetAdmissionDetails()
        {
            return studentAdmissionRepository.GetAdmissionDetails();
        }
        public AdmissionDetail GetAdmissionDetailsbyId(int Id)
        {
            return studentAdmissionRepository.GetAdmissionDetailsbyId(Id);
        }
        public List<Country> GetCountries()
        {
            return this.studentAdmissionRepository.GetCountries();
        }

        public List<State> GetStates(int CountryId)
        {
            return studentAdmissionRepository.GetStates(CountryId); 
        }
        public List<City> GetCities(int StateId)
        {
            return studentAdmissionRepository.GetCities(StateId);
        }


        public string GenerateAdminssionNumber(int Studentid)
        {
            return studentAdmissionRepository.GenerateAdminssionNumber(Studentid);
        }

    }
}