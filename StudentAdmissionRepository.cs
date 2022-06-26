using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace School_Admission_Form.Repository
{
    public class StudentAdmissionRepository
    {
        SchoolAdmissionEntities schoolAdmissionEntities = new SchoolAdmissionEntities();
        public int AddStudentDetails(StudentApplicationDetail studentApplicationDetail)

        {
            schoolAdmissionEntities.StudentApplicationDetails.Add(studentApplicationDetail);
            schoolAdmissionEntities.SaveChanges();
            return studentApplicationDetail.StudentId;
        }

        public string GenerateAdminssionNumber(int Studentid)
        {
            string acode= "SIC" + DateTime.Now.Year.ToString() + Studentid;
            return acode;
        }
        public string AddStudentDetails(GuardianDetail guardianDetail)

        {
             schoolAdmissionEntities.GuardianDetails.Add(guardianDetail);
            schoolAdmissionEntities.SaveChanges();
            return "data added";
        }
        public string AddStudentDetails( PreviousSchoolDetail previousSchoolDetail)

        {
            schoolAdmissionEntities.PreviousSchoolDetails.Add(previousSchoolDetail);
            schoolAdmissionEntities.SaveChanges();
            return "data added";
        }
        public string AddStudentDetails( CurrentJoiningSchoolDetail currentJoiningSchoolDetail)

    {
          //  currentJoiningSchoolDetail.AdmissionNummber = GenerateAdminssionNumber(3);
            schoolAdmissionEntities.CurrentJoiningSchoolDetails.Add(currentJoiningSchoolDetail);
            schoolAdmissionEntities.SaveChanges();
            return "data saved";
        }

        public List<Gender> GetGenders()
        {
            List<Gender> data= schoolAdmissionEntities.Genders.ToList();
            return data;
        }
        public List<AdmissionDetail> GetAdmissionDetails()
        {
            List<AdmissionDetail> data = schoolAdmissionEntities.AdmissionDetails.ToList();
            return data;
        }
        public AdmissionDetail GetAdmissionDetailsbyId(int Id)
        {
            AdmissionDetail data = schoolAdmissionEntities.AdmissionDetails.Where(a => a.AdmissionId == Id).FirstOrDefault();
            return data;
        }
      

        public List<Country> GetCountries()
        {
            List<Country> data = schoolAdmissionEntities.Countries.ToList();
            return data;
        }
        public List<State> GetStates(int CountryId)
        {
            List<State> data = schoolAdmissionEntities.States.Where(a => a.CountryId == CountryId).ToList();
            return data;
        }
        public List<City> GetCities(int StateId)
        {
            List<City> data = schoolAdmissionEntities.Cities.Where(a => a.StateId == StateId).ToList();
            return data;
        }
    }
}