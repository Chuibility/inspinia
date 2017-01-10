using System.Web;
using System.Web.Mvc;

namespace Inspinia_MVC5_SeedProject
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
