using Microsoft.AspNetCore.Mvc;

namespace MyHobbyApp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Tips()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}