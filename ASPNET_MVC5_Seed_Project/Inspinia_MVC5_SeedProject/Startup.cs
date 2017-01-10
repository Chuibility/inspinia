using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Inspinia_MVC5_SeedProject.Startup))]
namespace Inspinia_MVC5_SeedProject
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
