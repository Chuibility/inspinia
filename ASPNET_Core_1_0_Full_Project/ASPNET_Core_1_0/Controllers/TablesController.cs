using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ASPNET_Core_1_0.Controllers
{
    public class TablesController : Controller
    {
        public IActionResult StaticTables()
        {
            return View();
        }

        public IActionResult DataTables()
        {
            return View();
        }

        public IActionResult FooTables()
        {
            return View();
        }

        public IActionResult jqGrid()
        {
            return View();
        }
    }
}