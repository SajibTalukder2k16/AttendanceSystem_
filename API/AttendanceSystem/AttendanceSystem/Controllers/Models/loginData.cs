using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AttendanceSystem.Controllers.Models
{
    public class loginData
    {
        public ObjectId Id { get; set; }
        public string EmployeeId { get; set; }
       
        public string PIN { get; set; }
    }
}
