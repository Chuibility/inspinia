using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Inspinia_MVC5.Controllers
{
    public class MailboxController : Controller
    {

        public ActionResult Inbox()
        {
            return View();
        }

        public ActionResult EmailView()
        {
            return View();
        }
    
        public ActionResult ComposeEmail()
        {
            return View();
        }
    
        public ActionResult EmailTemplates()
        {
            return View();
        }

        public ActionResult BasicActionEmail()
        {
            return View();
        }

        public ActionResult AlertEmail()
        {
            return View();
        }

        public ActionResult BillingEmail()
        {
            return View();
        }
	}
}