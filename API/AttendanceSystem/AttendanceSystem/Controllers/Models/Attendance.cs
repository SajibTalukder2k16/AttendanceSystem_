using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AttendanceSystem.Controllers.Models
{
    public class Attendance
    {
        public ObjectId Id { get; set; }
        public string EmployeeId { get; set; }
        public string EntryTime { get; set; }
        public string ExitTime { get; set; }
        public string Date { get; set; }
        public string Month { get; set; }
        public string Year { get; set; }
        public string Suite { get; set; }

    }
}
