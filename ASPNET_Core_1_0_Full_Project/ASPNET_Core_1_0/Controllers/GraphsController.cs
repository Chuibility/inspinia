using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ASPNET_Core_1_0.Controllers
{
    public class GraphsController : Controller
    {
        public IActionResult Flot()
        {
            return View();
        }

        public IActionResult Morris()
        {
            return View();
        }

        public IActionResult Rickshaw()
        {
            return View();
        }

        public IActionResult Chartjs()
        {
            return View();
        }
        public IActionResult Chartist()
        {
            return View();
        }
        public IActionResult Peity()
        {
            return View();
        }

        public IActionResult Sparkline()
        {
            return View();
        }

        public IActionResult C3charts()
        {
            return View();
        }
    }
}