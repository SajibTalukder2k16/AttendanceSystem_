using AttendanceSystem.Controllers.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using MongoDB.Bson;
using System.Threading.Tasks;

namespace AttendanceSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : Controller
    {
        private readonly IConfiguration _configuration;
        public EmployeeController(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public JsonResult Get()
        {
            MongoClient dbclient = new MongoClient(_configuration.GetConnectionString("AttendanceAppCon"));
            var dblist = dbclient.GetDatabase("AttendanceDB").GetCollection<Employee>("EmployeeList").AsQueryable();
            return new JsonResult(dblist);
        }
        [HttpPost]
        public JsonResult Post(Employee emp)
        {
            MongoClient dbclient = new MongoClient(_configuration.GetConnectionString("AttendanceAppCon"));
            var dblist = dbclient.GetDatabase("AttendanceDB").GetCollection<Employee>("EmployeeList").AsQueryable();
            //Console.WriteLine(dblist);
            if (dblist == null)
            {
                emp.Role = "admin";
            }
            else
                emp.Role = "member";
            dbclient.GetDatabase("AttendanceDB").GetCollection<Employee>("EmployeeList").InsertOne(emp);
            return new JsonResult("Added Successfully");
        }
        [HttpPut]
        public JsonResult Put(Employee emp)
        {
            MongoClient dbclient = new MongoClient(_configuration.GetConnectionString("AttendanceAppCon"));
            var filter = Builders<Employee>.Filter.Eq("EmployeeId", emp.EmployeeId);
            var update = Builders<Employee>.Update.Set("FirstName", emp.FirstName)
                .Set("LastName", emp.LastName)
                .Set("Designation", emp.Designation)
                .Set("Address", emp.Address)
                .Set("PhoneNumber", emp.PhoneNumber)
                .Set("Email", emp.Email)
                .Set("PIN", emp.PIN);
            dbclient.GetDatabase("AttendanceDB").GetCollection<Employee>("EmployeeList").UpdateOne(filter, update);
            return new JsonResult("Updated");
        }
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            
            MongoClient dbclient = new MongoClient(_configuration.GetConnectionString("AttendanceAppCon"));
            var filter = Builders<Employee>.Filter.Eq("EmployeeId", id);
            dbclient.GetDatabase("AttendanceDB").GetCollection<Employee>("EmployeeList").DeleteOne(filter);
            return new JsonResult("Deleted");
        }

    }
}
