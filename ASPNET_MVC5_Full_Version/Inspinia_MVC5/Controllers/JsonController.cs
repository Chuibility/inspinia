using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Inspinia_MVC5.Controllers
{
    public class JsonController : Controller
    {

        public ActionResult Index()
        {
            return View();
        }

        public JsonResult flotJsonData()
        {

            // Creat basic JSON object with data for chart
            var chartData = new
            {
                label = "Example Bar Chart",
                data = new[] {
                    new[] {1,34},
                    new[] {2,24},
                    new[] {3,11},
                    new[] {4,41},
                    new[] {5,17},
                    new[] {6,33}
                }
            };

            // Return JSON object
            return Json(chartData, JsonRequestBehavior.AllowGet);

        }

        public JsonResult tableJsonData()
        {

            // Creat basic JSON object with data for table
            var chartData = new[] {
                    new {Name = "Ashton Cox", Position = "Junior Technical Author", Office = "London", Age = 33},
                    new {Name = "Bradley Greer", Position = "Pre-Sales Support", Office = "Tokyo", Age = 27},
                    new {Name = "Airi Satou", Position = "Integration Specialist", Office = "New York", Age = 43},
                    new {Name = "Caesar Vance", Position = "Software Engineer", Office = "San Francisco", Age = 36},
                };

            // Return JSON object
            return Json(chartData, JsonRequestBehavior.AllowGet);

        }

        public JsonResult calendarEvents()
        {

            // Creat basic JSON object with events for calendar
            var rows = new[] { 
                new { title="Buy milk", start= "2014-12-04" }, 
                new { title="Call to Monica", start= "2014-12-22" }, 
                new { title="Send email to John", start= "2014-12-15" }, 
                new { title="Call to Mark", start= "2014-12-19" }, 
                new { title="Check new product", start= "2014-12-01" } 
            };

            // Return JSON object
            return Json(rows, JsonRequestBehavior.AllowGet);
        }

        public JsonResult tasksJsonData()
        {

            // Creat basic JSON object with data for table
            var tasksData = new[] {
                    new {Type = "Meeting", Time = "2014-12-04", Title = "Meeting with Monica", Desc = "Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products."},
                    new {Type = "Call", Time = "2014-12-18", Title = "Call to Stephen", Desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since."},
                    new {Type = "Chat", Time = "2014-12-04", Title = "Chat with Sandra", Desc = "Over the years, sometimes by accident, sometimes on purpose (injected humour and the like). "},
                    new {Type = "File", Time = "2014-12-11", Title = "Send files to Kim", Desc = "Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). "}
                };

            // Return JSON object
            return Json(tasksData, JsonRequestBehavior.AllowGet);

        }
    }
}