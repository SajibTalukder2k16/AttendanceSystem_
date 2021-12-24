using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;
using AttendanceSystem.Controllers.Models;

namespace AttendanceSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AttendanceController : Controller
    {
        private readonly IConfiguration _configuration;
        public AttendanceController(IConfiguration configuration)
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

            var empId = Request.Headers["EmployeeId"];

            MongoClient dbclient = new MongoClient(_configuration.GetConnectionString("AttendanceAppCon"));
            IMongoCollection<Attendance> table = dbclient.GetDatabase("AttendanceDB").GetCollection<Attendance>("TimeTracking");

            var list = table.Find(x => x.EmployeeId == empId).ToList();


            return new JsonResult(list);

        }
        [HttpPost]
        public JsonResult Post(Attendance emp)
        {
            MongoClient dbclient = new MongoClient(_configuration.GetConnectionString("AttendanceAppCon"));
            dbclient.GetDatabase("AttendanceDB").GetCollection<Attendance>("TimeTracking").InsertOne(emp);
            return new JsonResult("Added Successfully");
        }
    }
}
