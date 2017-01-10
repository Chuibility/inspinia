using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ASPNET_Core_1_0.Controllers
{
    public class FormsController : Controller
    {
        public IActionResult BasicFroms()
        {
            return View();
        }

        public IActionResult Advanced()
        {
            return View();
        }

        public IActionResult Wizard()
        {
            return View();
        }

        public IActionResult FileUpload()
        {
            return View();
        }


        public IActionResult TextEditor()
        {
            return View();
        }

        public IActionResult Markdown()
        {
            return View();
        }

        public IActionResult Autocomplete()
        {
            return View();
        }
    }
}