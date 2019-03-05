using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ASPNET_Core_2_1.Controllers
{
    public class EcommerceController : Controller
    {
        public IActionResult ProductsGrid()
        {
            return View();
        }

        public IActionResult ProductsList()
        {
            return View();
        }

        public IActionResult ProductEdit()
        {
            return View();
        }

        public IActionResult Orders()
        {
            return View();
        }

        public IActionResult ProductDetail()
        {
            return View();
        }

        public IActionResult Payments()
        {
            return View();
        }

        public IActionResult Cart()
        {
            return View();
        }
    }
}