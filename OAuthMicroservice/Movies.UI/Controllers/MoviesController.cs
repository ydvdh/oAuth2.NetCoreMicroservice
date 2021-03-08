using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Movies.UI.APIServices;

namespace Movies.UI.Controllers
{
    public class MoviesController : Controller
    {
        private readonly IMovieApiService _movieApiService;

        public MoviesController(IMovieApiService movieApiService)
        {
            _movieApiService = movieApiService ?? throw new ArgumentNullException(nameof(movieApiService));
        }

        // GET: Movies
        public async Task<IActionResult> Index()
        {
            return View(await _movieApiService.GetMovies());
        }           
    }
}
