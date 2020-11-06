using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using EF1.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EF1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExampleController : ControllerBase
    {
        [HttpGet]
        public IActionResult DoThing()
        {
            List<Example> alist = new List<Example>
            {
                new Example
                {
                    ExampleId = 1,
                    Name = "NameOne",
                    Description = "DescOne"
                },
                new Example
                {
                    ExampleId = 2,
                    Name = "NameTwo",
                    Description = "DescTwo"
                },
                new Example
                {
                    ExampleId = 3,
                    Name = "NameThree",
                    Description = "DescThree"
                }
            };

            return Ok(alist);
        }

        [HttpPost]
        public IActionResult PostThing(Example example)
        {
            example.ExampleId += 3;

            return CreatedAtAction(nameof(DoThing), example);
        }
    }
}
