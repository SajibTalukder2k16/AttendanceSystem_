using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using AttendanceSystem.Controllers.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Driver;

namespace AttendanceSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogInController : Controller
    {
        private readonly IConfiguration _configuration;
        public LogInController(IConfiguration configuration)
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
            var pin = Request.Headers["PIN"];

            MongoClient dbclient = new MongoClient(_configuration.GetConnectionString("AttendanceAppCon"));
            IMongoCollection<Employee> table = dbclient.GetDatabase("AttendanceDB").GetCollection<Employee>("EmployeeList");
            Employee emp = table.Find(x => x.EmployeeId == empId).FirstOrDefault();
            if(emp==null)
                return new JsonResult("NotAnEmployee");
            if (emp.PIN == pin && emp.Role =="admin")
            {
                return new JsonResult("admin");
            }
            else if(emp.PIN==pin)
                return new JsonResult("member");
           
            return new JsonResult("NotAnEmployee");

        }
    }
}
