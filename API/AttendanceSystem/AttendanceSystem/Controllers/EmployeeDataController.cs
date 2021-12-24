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
    public class EmployeeDataController : Controller
    {
        private readonly IConfiguration _configuration;
        public EmployeeDataController(IConfiguration configuration)
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
            var id = Request.Headers["EmployeeId"];
            var str_id = id.ToString();
            MongoClient dbclient = new MongoClient(_configuration.GetConnectionString("AttendanceAppCon"));
            IMongoCollection<Employee> table = dbclient.GetDatabase("AttendanceDB").GetCollection<Employee>("EmployeeList");
            Employee emp = table.Find(x => x.EmployeeId == str_id).FirstOrDefault();
            //Console.WriteLine(emp);

            return new JsonResult(emp);
        }
    }
}
